import React, { useState } from "react";

const AccountSettings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = () => {
    // Logic to save account settings (e.g., API call)
    console.log("Account settings saved:", { username, email });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Account Settings
      </h3>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-custom-dark font-medium mb-2"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
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
        onClick={handleSave}
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Save Settings
      </button>
    </div>
  );
};

export default AccountSettings;
