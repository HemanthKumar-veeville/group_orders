import React, { useState } from "react";
import { useSelector } from "react-redux"; // Assuming you're using Redux to manage user state

const DealForm = ({ onCreateDeal }) => {
  const [name, setName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  // Assuming `organizerId` comes from the logged-in user's state
  const organizerId = useSelector((state) => state?.auth?.user?.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the deal data
    const newDeal = {
      name,
      totalAmount: parseFloat(totalAmount),
      organizerId,
      isFinalized: false, // Assuming deal creation starts as not finalized
    };

    // Pass the deal data to the parent component or trigger an API call
    onCreateDeal(newDeal);

    // Reset form fields after submission
    setName("");
    setTotalAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-2xl font-bold mb-4 text-custom-dark">New Deal</h4>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-custom-dark font-medium mb-2"
        >
          Deal Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="totalAmount"
          className="block text-custom-dark font-medium mb-2"
        >
          Total Amount
        </label>
        <input
          id="totalAmount"
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className=" bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
