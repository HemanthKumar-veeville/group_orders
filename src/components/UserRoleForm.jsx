import React, { useState } from "react";

const UserRoleForm = ({ user, onSaveRole }) => {
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    onSaveRole(user.id, role);
  };

  return (
    <div className="flex items-center">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mr-2"
      >
        <option value="Admin">Admin</option>
        <option value="Organizer">Organizer</option>
        <option value="Customer">Customer</option>
      </select>
      <button
        onClick={handleSave}
        className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
      >
        Save
      </button>
    </div>
  );
};

export default UserRoleForm;
