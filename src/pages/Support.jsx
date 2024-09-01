import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SupportRequestList from "../components/SupportRequestList";
import SupportRequestForm from "../components/SupportRequestForm";

const Support = () => {
  const supportRequests = [
    {
      id: 1,
      subject: "Payment issue",
      status: "Open",
      timestamp: "2024-08-30T12:00:00Z",
    },
    {
      id: 2,
      subject: "Order not received",
      status: "Closed",
      timestamp: "2024-08-30T12:05:00Z",
    },
  ];

  const handleViewRequest = (id) => {
    // Logic to view support request details
  };

  const handleSubmitRequest = (formData) => {
    // Logic to submit a new support request
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">Support</h2>

          <SupportRequestList
            requests={supportRequests}
            onViewRequest={handleViewRequest}
          />

          <SupportRequestForm onSubmitRequest={handleSubmitRequest} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Support;
