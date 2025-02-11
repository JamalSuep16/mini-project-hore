"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name?: string;
  badges: { id: number; name: string }[];
}

export default function UserDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        // Fetch the current logged-in user's ID (Replace with actual endpoint)
        const currentUserResponse = await fetch(
          "http://localhost:8000/api/v1/auth/me",
          {
            credentials: "include", // Ensure cookies/session tokens are sent if needed
          },
        );

        if (!currentUserResponse.ok) {
          throw new Error("Failed to fetch current user");
        }

        const currentUser = await currentUserResponse.json();

        // Fetch the user details using the retrieved ID
        const userResponse = await fetch(
          `http://localhost:8000/api/v1/users/${currentUser.id}`,
        );

        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await userResponse.json();
        setUser(result.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!user) return <p>No user data found</p>;

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">User Dashboard</h2>
      <p className="text-lg font-semibold">Name: {user.name}</p>
      <h3 className="mt-4 text-xl font-semibold">Badges Achieved:</h3>
      <ul className="mt-2 list-inside list-disc">
        {user.badges.length > 0 ? (
          user.badges.map((badge) => (
            <li key={badge.id} className="text-gray-700">
              {badge.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No badges earned yet</p>
        )}
      </ul>
    </div>
  );
}
