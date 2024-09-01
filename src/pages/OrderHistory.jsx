import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrderList from "../components/OrderList";
import OrderFilter from "../components/OrderFilter";

const OrderHistory = () => {
  const [filters, setFilters] = useState({
    status: "",
    dateRange: { start: "", end: "" },
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Order History
          </h2>

          <OrderFilter onFilterChange={handleFilterChange} />

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Past Orders
            </h3>
            <OrderList filters={filters} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrderHistory;
