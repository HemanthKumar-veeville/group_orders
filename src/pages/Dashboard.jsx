import React from "react";
import { useDispatch } from "react-redux";
import { createDeal } from "../features/deals/dealSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import DealList from "../components/DealList";
import OrderList from "../components/OrderList";
import NotificationList from "../components/NotificationList";
import DealForm from "../components/DealForm";

const Dashboard = ({ user, deals }) => {
  const dispatch = useDispatch();

  const handleCreateDeal = (dealData) => {
    dispatch(createDeal(dealData));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Dashboard
          </h2>

          {user?.role === "Organizer" && (
            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
                Create New Deal
              </h3>
              <DealForm onCreateDeal={handleCreateDeal} />
            </section>
          )}

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Active Deals
            </h3>
            <DealList deals={deals} />
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Recent Orders
            </h3>
            <OrderList deals={deals} />
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
              Notifications
            </h3>
            <NotificationList />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
