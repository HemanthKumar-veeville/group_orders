import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";

const AdminUserManagement = () => {
  const users = [
    {
      id: 1,
      email: "admin@example.com",
      role: "Admin",
    },
    {
      id: 2,
      email: "organizer@example.com",
      role: "Organizer",
    },
    {
      id: 3,
      email: "user@example.com",
      role: "Customer",
    },
  ];

  const handleEditRole = (id, newRole) => {
    // Logic to update the user's role
    console.log(`User ${id} role changed to ${newRole}`);
  };

  const handleDeleteUser = (id) => {
    // Logic to delete the user
    console.log(`User ${id} deleted`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col  bg-custom-light">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto max-h-screen">
          <h2 className="text-4xl font-bold mb-6 text-custom-dark">
            User Management
          </h2>

          <UserList
            users={users}
            onEditRole={handleEditRole}
            onDeleteUser={handleDeleteUser}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminUserManagement;
