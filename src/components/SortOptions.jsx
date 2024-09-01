import React from "react";

const SortOptions = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="mb-6 flex justify-end">
      <select
        onChange={handleSortChange}
        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-custom-accent focus:border-custom-accent"
      >
        <option value="popularity">Sort by Popularity</option>
        <option value="deadline">Sort by Deadline</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
};

export default SortOptions;
