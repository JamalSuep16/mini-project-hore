import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}/profile`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Badges</h2>
      <ul>
        {user.badges.map((badge) => (
          <li key={badge.id}>
            <strong>{badge.name}</strong>: {badge.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
