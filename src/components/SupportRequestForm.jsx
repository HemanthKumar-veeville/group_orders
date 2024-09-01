import React, { useState } from "react";

const SupportRequestForm = ({ onSubmitRequest }) => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitRequest(formData);
    setFormData({
      subject: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Submit a New Support Request
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default SupportRequestForm;
