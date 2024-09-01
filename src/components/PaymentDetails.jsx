import React from "react";

const PaymentDetails = ({ payment }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Payment Details
      </h3>
      <p className="text-gray-700 mb-2">Payment Method: {payment.method}</p>
      <p className="text-gray-700 mb-2">Payment Date: {payment.date}</p>
      <p className="text-gray-700 mb-2">
        Amount Paid: ${payment.amount.toFixed(2)}
      </p>
    </div>
  );
};

export default PaymentDetails;
