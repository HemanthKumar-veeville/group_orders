import React, { useState } from "react";

const InviteForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Invitation sent to:", email);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-custom-dark">
        Invite Others
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-custom-accent focus:border-custom-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-custom-accent text-white px-6 py-2 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
        >
          Send Invitation
        </button>
      </form>
    </div>
  );
};

export default InviteForm;
