import React, { useState } from "react";

const PrivacySettings = () => {
  const [dataSharing, setDataSharing] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState("Public");

  const handleSave = () => {
    // Logic to save privacy settings (e.g., API call)
    console.log("Privacy settings saved:", { dataSharing, accountVisibility });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Privacy Settings
      </h3>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={dataSharing}
            onChange={() => setDataSharing(!dataSharing)}
            className="mr-2"
          />
          Allow data sharing
        </label>
      </div>
      <div className="mb-4">
        <label
          htmlFor="accountVisibility"
          className="block text-custom-dark font-medium mb-2"
        >
          Account Visibility
        </label>
        <select
          id="accountVisibility"
          value={accountVisibility}
          onChange={(e) => setAccountVisibility(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
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

export default PrivacySettings;
