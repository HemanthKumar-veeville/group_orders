import React from "react";

const PaymentStatus = ({ status, message }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        status === "success" ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${
          status === "success" ? "text-green-800" : "text-red-800"
        }`}
      >
        {status === "success" ? "Payment Successful" : "Payment Failed"}
      </h3>
      <p className="text-custom-dark">{message}</p>
    </div>
  );
};

export default PaymentStatus;
