import React from "react";

const DealList = ({ searchTerm, sortCriteria }) => {
  // Example data, replace with actual data fetching and filtering
  let deals = [
    { id: 1, name: "Deal 1", totalAmount: "$100.50", status: "Active" },
    { id: 2, name: "Deal 2", totalAmount: "$250.00", status: "Active" },
  ];

  // Filter deals based on search term
  if (searchTerm) {
    deals = deals.filter((deal) =>
      deal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort deals based on selected criteria
  if (sortCriteria === "popularity") {
    // Example: Sort by popularity logic
  } else if (sortCriteria === "deadline") {
    // Example: Sort by deadline logic
  } else if (sortCriteria === "price") {
    // Example: Sort by price logic
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ul>
        {deals.map((deal) => (
          <li key={deal.id} className="mb-4 p-4 border-b border-gray-200">
            <div className="flex justify-between">
              <span className="font-semibold">{deal.name}</span>
              <span className="text-custom-accent">{deal.totalAmount}</span>
              <span className="text-sm text-gray-600">{deal.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealList;
