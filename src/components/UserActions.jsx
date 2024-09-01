import React, { useState } from "react";
import UserRoleForm from "./UserRoleForm";

const UserActions = ({ user, onEditRole, onDeleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditRole = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center space-x-4">
      {isEditing ? (
        <UserRoleForm
          user={user}
          onSaveRole={(id, role) => {
            onEditRole(id, role);
            setIsEditing(false);
          }}
        />
      ) : (
        <button
          onClick={handleEditRole}
          className="text-custom-accent hover:text-custom-accent-dark transition duration-300"
        >
          Edit Role
        </button>
      )}
      <button
        onClick={() => onDeleteUser(user.id)}
        className="text-red-600 hover:text-red-800 transition duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default UserActions;
