import React from "react";

const OrderList = () => {
  // Example data, replace with actual data fetching
  const orders = [
    { id: 1, dealName: "Deal 1", amount: "$50.25", status: "Pending" },
    { id: 2, dealName: "Deal 2", amount: "$75.00", status: "Completed" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="mb-4 p-4 border-b border-gray-200">
            <div className="flex justify-between">
              <span className="font-semibold">{order.dealName}</span>
              <span className="text-custom-accent">{order.amount}</span>
              <span className="text-sm text-gray-600">{order.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
