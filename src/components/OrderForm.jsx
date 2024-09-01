import React, { useState } from "react";

const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Order placed:", quantity);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
        Place Your Order
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-custom-accent focus:border-custom-accent"
            min="1"
          />
        </div>
        <button
          type="submit"
          className="bg-custom-accent text-white px-6 py-2 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
