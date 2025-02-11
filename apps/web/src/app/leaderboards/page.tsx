"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  name?: string;
}

interface LeaderboardEntry {
  userId?: string;
  eventId?: string;
  orderCount: number;
  userDetails?: User;
}

interface LeaderboardData {
  topAttendee: LeaderboardEntry[];
  topEvent: LeaderboardEntry[];
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/leaderboards", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setLeaderboard(data.data);
        } else {
          throw new Error("Failed to fetch leaderboard");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p>Error!!!: {error}</p>;
  if (!leaderboard) return <p>No data available.</p>;

  return (
    <div className="mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-2xl font-bold">Leaderboard</h1>
      {leaderboard.topAttendee && leaderboard.topAttendee.length > 0 && (
        <div className="mb-4 rounded border p-4">
          <h2 className="text-xl font-semibold">Top Attendee</h2>
          <p>
            <strong>User:</strong>{" "}
            {leaderboard.topAttendee[0]?.userDetails?.name || "Unknown"}
          </p>
          <p>
            <strong>Orders:</strong> {leaderboard.topAttendee[0]?.orderCount}
          </p>
        </div>
      )}
      {leaderboard.topEvent && leaderboard.topEvent.length > 0 && (
        <div className="mb-4 rounded border p-4">
          <h2 className="text-xl font-semibold">Top Event</h2>
          <p>
            <strong>Event ID:</strong> {leaderboard.topEvent[0]?.eventId}
          </p>
          <p>
            <strong>Orders:</strong> {leaderboard.topEvent[0]?.orderCount}
          </p>
        </div>
      )}
    </div>
  );
}
