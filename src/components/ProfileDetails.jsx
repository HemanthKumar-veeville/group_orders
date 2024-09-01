import React, { useState } from "react";

const ProfileDetails = ({ user }) => {
  const [profile, setProfile] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Call API to save profile details
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4 text-custom-dark">
        Profile Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
      </div>
      <div className="mt-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-custom-accent text-white py-2 px-4 rounded-full shadow-md hover:bg-custom-accent-dark transition duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
