import React from "react";
import ChartComponent from "./ChartComponent";
import FilterComponent from "./FilterComponent";

const DealAnalytics = ({ analyticsData, onFilterChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Deal Analytics
      </h3>

      <FilterComponent onFilterChange={onFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-custom-light p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-custom-dark">
            Total Orders
          </h4>
          <p className="text-2xl font-bold text-custom-accent">
            {analyticsData.totalOrders}
          </p>
        </div>
        <div className="bg-custom-light p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-custom-dark">
            Total Revenue
          </h4>
          <p className="text-2xl font-bold text-custom-accent">
            ${analyticsData.totalRevenue.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ChartComponent data={analyticsData.chartData} />
      </div>
    </div>
  );
};

export default DealAnalytics;
