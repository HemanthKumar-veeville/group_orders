import React from "react";
import { Bar } from "react-chartjs-2";

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
        data: data.revenue,
      },
      {
        label: "Orders",
        backgroundColor: "#10B981",
        borderColor: "#10B981",
        data: data.orders,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartComponent;
