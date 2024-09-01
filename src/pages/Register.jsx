import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const handleRegister = (credentials) => {
    // Handle registration process
    console.log("Register with credentials:", credentials);
  };

  return (
    <div className="flex flex-col h-[100vh] bg-custom-light">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <RegisterForm onRegister={handleRegister} />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
