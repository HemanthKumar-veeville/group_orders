import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle logout logic
    dispatch(logoutUser());
    navigate("/login");
  }, [dispatch, navigate]);

  return (
    <div className="flex flex-col h-[100vh] bg-custom-light">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <p className="text-custom-dark text-xl">Logging out...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Logout;
