import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PaymentForm from "../components/PaymentForm";
import PaymentStatus from "../components/PaymentStatus";

const PaymentProcessing = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentSubmit = (paymentDetails) => {
    // Simulate payment processing
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setPaymentStatus({
        status: "success",
        message: "Your payment was processed successfully.",
      });
    } else {
      setPaymentStatus({
        status: "error",
        message:
          "There was an issue processing your payment. Please try again.",
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Payment Processing
          </h2>
          {!paymentStatus ? (
            <PaymentForm onPaymentSubmit={handlePaymentSubmit} />
          ) : (
            <PaymentStatus
              status={paymentStatus.status}
              message={paymentStatus.message}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentProcessing;
