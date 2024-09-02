import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../features/orders/orderSlice";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axiosInstance from "../utils/helperMethods";

const OrderForm = ({ dealId }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet. Please try again later.");
      setIsProcessing(false);
      return;
    }

    try {
      // Step 1: Create SetupIntent on the server
      let clientSecret;
      try {
        const response = await axiosInstance.post(
          "/payments/create-setup-intent",
          {
            customerId: user.stripeCustomerId,
            user: user,
          }
        );

        const { clientSecret: secret, error: serverError } = response.data;
        if (serverError) {
          throw new Error(serverError);
        }
        clientSecret = secret;
      } catch (err) {
        throw new Error(
          "Failed to create SetupIntent on the server: " + err.message
        );
      }

      // Step 2: Confirm the SetupIntent on the client
      let setupIntent;
      try {
        const cardElement = elements.getElement(CardElement);
        const { setupIntent: intent, error: stripeError } =
          await stripe.confirmCardSetup(clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: user.name,
                email: user.email,
              },
            },
          });

        if (stripeError) {
          throw new Error(stripeError.message);
        }
        setupIntent = intent;
      } catch (err) {
        throw new Error("Failed to confirm SetupIntent: " + err.message);
      }

      // Step 3: Save the Payment Method ID and Create the Order
      try {
        const orderData = {
          amount: parseFloat(amount),
          isPaid: false,
          dealId: dealId,
          customerId: user.stripeCustomerId,
          paymentMethodId: setupIntent.payment_method,
          userId: user.id,
        };

        // Dispatch the action to create the order
        await dispatch(createOrder(orderData));

        // Reset form or provide feedback
        console.log("Order placed (payment method saved):", orderData);
        setSuccess(true);
        setAmount(0);
        elements.getElement(CardElement).clear();
      } catch (err) {
        throw new Error("Failed to create order: " + err.message);
      }
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }

    setIsProcessing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
        Place Your Order
      </h3>
      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          Order placed successfully! Your payment method has been saved for
          future payments.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-custom-accent focus:border-custom-accent"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="card-element"
            className="block text-sm font-medium text-gray-700"
          >
            Credit or Debit Card
          </label>
          <div className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white">
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <button
          type="submit"
          className="bg-custom-accent text-white px-6 py-2 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
          disabled={isProcessing || !stripe}
        >
          {isProcessing ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
