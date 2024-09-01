import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import NotificationSettings from "../components/NotificationSettings";
import AccountSettings from "../components/AccountSettings";
import PrivacySettings from "../components/PrivacySettings";

const Settings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">Settings</h2>
          <NotificationSettings />
          <AccountSettings />
          <PrivacySettings />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;
