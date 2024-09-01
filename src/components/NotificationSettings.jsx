import React, { useState } from "react";

const NotificationSettings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(true);

  const handleSave = () => {
    // Logic to save notification settings (e.g., API call)
    console.log("Notification settings saved:", {
      emailAlerts,
      smsAlerts,
      inAppNotifications,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Notification Settings
      </h3>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
            className="mr-2"
          />
          Email Alerts
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={smsAlerts}
            onChange={() => setSmsAlerts(!smsAlerts)}
            className="mr-2"
          />
          SMS Alerts
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={inAppNotifications}
            onChange={() => setInAppNotifications(!inAppNotifications)}
            className="mr-2"
          />
          In-App Notifications
        </label>
      </div>
      <button
        onClick={handleSave}
        className="w-full bg-custom-accent text-white py-2 px-4 rounded-lg shadow-md hover:bg-custom-accent-dark"
      >
        Save Settings
      </button>
    </div>
  );
};

export default NotificationSettings;
