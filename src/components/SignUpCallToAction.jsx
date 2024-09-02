import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpCallToAction = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <section className="bg-custom-accent-dark text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Veeville Today</h2>
        <p className="text-lg mb-8">
          Experience the easiest way to manage group orders. Sign up now and
          start organizing!
        </p>
        <div
          onClick={handleSignUp}
          className="bg-white text-custom-accent px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Sign Up Now
        </div>
      </div>
    </section>
  );
};

export default SignUpCallToAction;
