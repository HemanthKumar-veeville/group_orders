import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import NotificationList from "../components/NotificationList";
import NotificationFilter from "../components/NotificationFilter";

const Notifications = () => {
  const [filters, setFilters] = useState({
    type: "",
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
            Notifications
          </h2>

          <NotificationFilter onFilterChange={handleFilterChange} />

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Recent Notifications
            </h3>
            <NotificationList filters={filters} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;
