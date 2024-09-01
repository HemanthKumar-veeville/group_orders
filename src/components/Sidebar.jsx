import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-custom-primary text-white h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Menu</h2>
        <ul className="mt-6">
          <li className="mb-4">
            <Link to="/dashboard" className="hover:text-custom-accent">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/deals" className="hover:text-custom-accent">
              Deals
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/orders/history" className="hover:text-custom-accent">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/notifications" className="hover:text-custom-accent">
              Notifications
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="hover:text-custom-accent">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/support" className="hover:text-custom-accent">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
