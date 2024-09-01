import React from "react";

const OrderDetails = ({ order }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Order Details
      </h3>
      <p className="text-gray-700 mb-2">Order ID: {order.id}</p>
      <p className="text-gray-700 mb-2">Order Date: {order.date}</p>
      <p className="text-gray-700 mb-2">Customer: {order.customerName}</p>
      <p className="text-gray-700 mb-2">
        Total Amount: ${order.totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default OrderDetails;
