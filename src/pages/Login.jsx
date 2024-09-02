import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (credentials) => {
    // Handle login process
    console.log("Login with credentials:", credentials);
    dispatch(login(credentials));
    navigate("/");
  };

  return (
    <div className="flex flex-col h-[100vh] bg-custom-light">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <LoginForm onLogin={handleLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
