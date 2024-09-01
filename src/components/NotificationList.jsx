import React from "react";

const NotificationList = () => {
  // Example data, replace with actual data fetching
  const notifications = [
    { id: 1, message: "Your order has been shipped.", isRead: false },
    { id: 2, message: "Your payment was successful.", isRead: true },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`mb-4 p-4 border-b border-gray-200 ${
              notification.isRead ? "text-gray-600" : "font-bold"
            }`}
          >
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
