import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <section className="bg-custom-accent text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Veeville</h1>
        <p className="text-lg mb-8">
          The ultimate platform for group ordering. Simplify your group
          purchases with ease.
        </p>
        <span
          onClick={handleSignUp}
          className="bg-white text-custom-accent px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
