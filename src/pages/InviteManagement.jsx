import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import InviteForm from "../components/InviteForm";
import InviteList from "../components/InviteList";

const InviteManagement = () => {
  const [invites, setInvites] = useState([
    { email: "user1@example.com", status: "Pending" },
    { email: "user2@example.com", status: "Accepted" },
  ]);

  const handleInvite = (email) => {
    // Logic to handle sending an invitation (e.g., API call to backend)
    setInvites([...invites, { email, status: "Pending" }]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-[100vh] bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Invite Management
          </h2>
          <InviteForm onInvite={handleInvite} />
          <InviteList invites={invites} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default InviteManagement;
