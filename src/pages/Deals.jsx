import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import DealList from "../components/DealList";
import SearchBar from "../components/SearchBar";
import SortOptions from "../components/SortOptions";

const Deals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("popularity");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">Deals</h2>
          <SearchBar onSearch={handleSearch} />
          <SortOptions onSort={handleSort} />
          <section className="mb-8">
            <DealList searchTerm={searchTerm} sortCriteria={sortCriteria} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Deals;
