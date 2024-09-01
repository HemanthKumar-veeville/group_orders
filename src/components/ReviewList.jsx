import React from "react";

const ReviewList = () => {
  // Example data, replace with actual data fetching
  const reviews = [
    {
      id: 1,
      reviewer: "John Doe",
      rating: 5,
      comment: "Great deal!",
      timestamp: "2024-08-30T12:00:00Z",
    },
    {
      id: 2,
      reviewer: "Jane Doe",
      rating: 4,
      comment: "Good deal, but shipping was slow.",
      timestamp: "2024-08-30T12:05:00Z",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{review.reviewer}</span>
              <span className="text-sm text-gray-600">
                {new Date(review.timestamp).toLocaleString()}
              </span>
            </div>
            <p className="text-custom-dark">{review.comment}</p>
            <p className="text-sm text-gray-600">Rating: {review.rating} / 5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
