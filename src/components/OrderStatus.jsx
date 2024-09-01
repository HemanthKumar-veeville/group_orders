import React from "react";

const OrderStatus = ({ status }) => {
  const statusColors = {
    pending: "bg-yellow-500",
    shipped: "bg-blue-500",
    delivered: "bg-green-500",
    canceled: "bg-red-500",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">Order Status</h3>
      <span
        className={`inline-block px-4 py-2 rounded-full text-white ${statusColors[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
};

export default OrderStatus;
