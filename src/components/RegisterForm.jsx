import React, { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Participant"); // Default role is "Participant"

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password, confirmPassword, role });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("Participant");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">Register</h3>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-custom-dark font-medium mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-custom-dark font-medium mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-custom-dark font-medium mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-custom-dark font-medium mb-2"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="role"
          className="block text-custom-dark font-medium mb-2"
        >
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
        >
          <option value="Participant">Participant</option>
          <option value="Organizer">Organizer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
        disabled={!email || !password || !confirmPassword || !name}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
