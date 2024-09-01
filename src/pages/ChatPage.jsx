import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const ChatPage = ({ dealId }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            Deal Chat
          </h2>
          <Chat dealId={dealId} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ChatPage;
