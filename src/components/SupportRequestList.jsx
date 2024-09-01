import React from "react";

const SupportRequestList = ({ requests, onViewRequest }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Support Requests
      </h3>
      <ul className="space-y-4">
        {requests.map((request) => (
          <li
            key={request.id}
            className="border border-gray-300 p-4 rounded-md"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  {request.subject}
                </h4>
                <p className="text-sm text-gray-500">
                  Status: {request.status}
                </p>
                <p className="text-sm text-gray-500">
                  Submitted on:{" "}
                  {new Date(request.timestamp).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => onViewRequest(request.id)}
                className="text-custom-accent hover:text-custom-accent-dark transition duration-300"
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportRequestList;
