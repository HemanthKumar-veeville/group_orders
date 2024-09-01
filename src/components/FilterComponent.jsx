import React, { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [dateRange, setDateRange] = useState("last30days");
  const [status, setStatus] = useState("all");

  const handleFilterChange = () => {
    onFilterChange({ dateRange, status });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Date Range
          </label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thismonth">This Month</option>
            <option value="thisyear">This Year</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Deal Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleFilterChange}
        className="mt-4 bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
