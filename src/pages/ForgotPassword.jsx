import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const ForgotPassword = () => {
  const handleForgotPassword = (data) => {
    // Handle forgot password process
    console.log("Forgot password for:", data.email);
  };

  return (
    <div className="flex flex-col h-[100vh] bg-custom-light">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <ForgotPasswordForm onForgotPassword={handleForgotPassword} />
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
