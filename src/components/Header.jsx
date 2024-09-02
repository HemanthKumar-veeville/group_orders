import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsUserLoggedIn(!!token);
  }, [token]);

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/logout");
  };

  return (
    <header className="bg-custom-primary text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-custom-accent">
            Veeville.{" "}
          </Link>
        </h1>
        <nav>
          {!isUserLoggedIn && (
            <ul className="flex space-x-4">
              <li>
                <div
                  onClick={handleSignUp}
                  className="hover:text-custom-accent"
                >
                  Sign Up
                </div>
              </li>
              <li>
                <div onClick={handleLogin} className="hover:text-custom-accent">
                  Login
                </div>
              </li>
            </ul>
          )}
          {isUserLoggedIn && (
            <ul className="flex space-x-4">
              <li>
                <div
                  onClick={handleLogout}
                  className="hover:text-custom-accent"
                >
                  Logout
                </div>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
