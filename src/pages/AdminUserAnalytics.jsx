import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import UserAnalytics from "../components/UserAnalytics";

const AdminUserAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalDealsCreated: 15,
    totalOrdersPlaced: 75,
    chartData: {
      labels: ["User 1", "User 2", "User 3", "User 4"],
      dealsCreated: [5, 3, 2, 5],
      ordersPlaced: [20, 15, 10, 30],
    },
  });

  const handleFilterChange = (filters) => {
    // Logic to fetch filtered analytics data
    console.log("Filters applied:", filters);
    // Example: update analyticsData based on filters
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            User Analytics
          </h2>

          <UserAnalytics
            analyticsData={analyticsData}
            onFilterChange={handleFilterChange}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminUserAnalytics;
