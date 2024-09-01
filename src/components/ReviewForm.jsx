import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Submit a Review
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-custom-dark font-medium mb-2"
          >
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
          >
            <option value={0}>Select a rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-custom-dark font-medium mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="block w-full p-2 border border-custom-light rounded-lg shadow-sm"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
