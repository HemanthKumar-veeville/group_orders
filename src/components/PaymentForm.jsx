import React, { useState } from "react";

const PaymentForm = ({ onPaymentSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Logic to handle payment processing (e.g., API call to payment gateway)
    onPaymentSubmit({ cardNumber, expiryDate, cvc });
  };

  return (
    <form
      onSubmit={handlePaymentSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Payment Details
      </h3>
      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-custom-dark font-medium mb-2"
        >
          Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="expiryDate"
            className="block text-custom-dark font-medium mb-2"
          >
            Expiry Date
          </label>
          <input
            id="expiryDate"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="cvc"
            className="block text-custom-dark font-medium mb-2"
          >
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Process Payment
      </button>
    </form>
  );
};

export default PaymentForm;
