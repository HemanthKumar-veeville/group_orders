import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-custom-primary text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-custom-accent">
            Veeville.{" "}
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="hover:text-custom-accent">
                Features
              </a>
            </li>
            <li>
              <a href="#signup" className="hover:text-custom-accent">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#login" className="hover:text-custom-accent">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
