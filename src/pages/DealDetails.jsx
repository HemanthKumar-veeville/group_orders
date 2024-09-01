import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import DealDetails from "../components/DealDetails";
import Chat from "../components/Chat";
import ReviewList from "../components/ReviewList";
import OrderForm from "../components/OrderForm";
import InviteForm from "../components/InviteForm";

const DealDetailsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Deal Details
          </h2>
          <section className="mb-8">
            <DealDetails />
          </section>
          <section className="mb-8">
            <OrderForm />
          </section>
          <section className="mb-8">
            <InviteForm />
          </section>
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Discussion
            </h3>
            <Chat />
          </section>
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Reviews
            </h3>
            <ReviewList />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DealDetailsPage;
