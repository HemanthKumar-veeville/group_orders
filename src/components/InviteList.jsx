import React from "react";

const InviteList = ({ invites }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Sent Invitations
      </h3>
      <ul>
        {invites.map((invite, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-custom-light"
          >
            <span className="text-custom-dark">{invite.email}</span>
            <span
              className={`text-${
                invite.status === "Accepted" ? "green-500" : "red-500"
              }`}
            >
              {invite.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InviteList;
