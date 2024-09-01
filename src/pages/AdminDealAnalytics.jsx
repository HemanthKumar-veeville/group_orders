import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import DealAnalytics from "../components/DealAnalytics";

const AdminDealAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalOrders: 150,
    totalRevenue: 7500,
    chartData: {
      labels: ["Deal 1", "Deal 2", "Deal 3", "Deal 4"],
      revenue: [2000, 1500, 2500, 1500],
      orders: [40, 30, 50, 30],
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
            Deal Analytics
          </h2>

          <DealAnalytics
            analyticsData={analyticsData}
            onFilterChange={handleFilterChange}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDealAnalytics;
