"use client";
import React, { useState } from 'react';

// Define the User interface
interface User {
  name: string;
  email: string;
}

// Define the props interface for UserCard
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Add API call here if needed to save the updated data
    setIsEditing(false);
    console.log("Updated user data:", formData);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded mb-2"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded mb-2"
          />
          <button onClick={handleSave} className="bg-green-500 text-white p-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded">
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;