import React from "react";

const PaymentMethods = ({ methods, onAdd, onRemove }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Payment Methods
      </h3>
      <ul className="mb-4">
        {methods.map((method) => (
          <li key={method.id} className="mb-2 flex justify-between">
            <span className="text-gray-700">
              {method.cardBrand} **** {method.cardLast4} - Expires{" "}
              {method.expiryMonth}/{method.expiryYear}
            </span>
            <button
              onClick={() => onRemove(method.id)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onAdd}
        className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
      >
        Add Payment Method
      </button>
    </div>
  );
};

export default PaymentMethods;
