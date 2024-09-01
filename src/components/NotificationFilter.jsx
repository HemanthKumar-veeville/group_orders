import React, { useState } from "react";

const NotificationFilter = ({ onFilterChange }) => {
  const [type, setType] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const handleFilterChange = () => {
    onFilterChange({ type, dateRange });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4 text-custom-dark">
        Filter Notifications
      </h3>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">
            Notification Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="">All</option>
            <option value="deal">Deal</option>
            <option value="order">Order</option>
            <option value="payment">Payment</option>
            <option value="system">System</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) =>
                setDateRange({ ...dateRange, start: e.target.value })
              }
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) =>
                setDateRange({ ...dateRange, end: e.target.value })
              }
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
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

export default NotificationFilter;
