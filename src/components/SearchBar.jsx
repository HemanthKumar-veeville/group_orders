import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search deals..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-custom-accent focus:border-custom-accent"
      />
    </div>
  );
};

export default SearchBar;
