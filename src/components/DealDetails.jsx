import React from "react";

const DealDetails = () => {
  // Example data, replace with actual data fetching
  const deal = {
    id: 1,
    name: "Group Order for Widgets",
    description: "A great deal for widgets. Join now!",
    totalAmount: "$100.50",
    organizer: "John Doe",
    status: "Active",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-3xl font-bold mb-4">{deal.name}</h3>
      <p className="mb-4">{deal.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Organized by: {deal.organizer}
          </p>
          <p className="text-sm text-gray-600">Status: {deal.status}</p>
        </div>
        <div className="text-custom-accent font-semibold text-lg">
          Total: {deal.totalAmount}
        </div>
      </div>
    </div>
  );
};

export default DealDetails;
