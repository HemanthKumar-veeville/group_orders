import React from "react";
import UserActions from "./UserActions";

const UserList = ({ users, onEditRole, onDeleteUser }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        User Management
      </h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-4">Email</th>
            <th className="pb-4">Role</th>
            <th className="pb-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-4">{user.email}</td>
              <td className="py-4">{user.role}</td>
              <td className="py-4">
                <UserActions
                  user={user}
                  onEditRole={onEditRole}
                  onDeleteUser={onDeleteUser}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
