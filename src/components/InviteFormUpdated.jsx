import React, { useState } from "react";

const InviteForm = ({ onInvite }) => {
  const [email, setEmail] = useState("");

  const handleInvite = () => {
    // Logic to send the invitation (e.g., API call)
    onInvite(email);
    setEmail(""); // Clear the input after sending the invite
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Send Invitation
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
        onClick={handleInvite}
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Send Invitation
      </button>
    </div>
  );
};

export default InviteForm;
