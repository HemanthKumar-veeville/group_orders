import React, { useState } from "react";

const ChangePasswordForm = ({ onChangePassword }) => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    onChangePassword(passwords);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Change Password
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
