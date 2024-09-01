import React, { useState } from "react";

const ForgotPasswordForm = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    onForgotPassword({ email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Forgot Password
      </h3>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-custom-dark font-medium mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
