import React from "react";

type LeaderboardEntry = {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  isUser?: boolean;
};

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Lucia Pillar",
    points: 2184,
    avatar: "path_to_lucia_image",
  },
  { rank: 2, name: "Nick Gilev", points: 1539, avatar: "path_to_nick_image" },
  { rank: 3, name: "Simon Tran", points: 1202, avatar: "path_to_simon_image" },
  {
    rank: 4,
    name: "Herry Utchie",
    points: 1124,
    avatar: "path_to_herry_image",
  },
  {
    rank: 5,
    name: "Sergey Glazow",
    points: 1089,
    avatar: "path_to_sergey_image",
  },
  {
    rank: 23,
    name: "Lisa Wisley (You)",
    points: 493,
    avatar: "path_to_lisa_image",
    isUser: true,
  },
];

const Leaderboard = (): JSX.Element => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {leaderboardData.slice(0, 3).map((entry, index) => (
          <div
            key={entry.rank}
            className={`flex flex-col items-center p-4 rounded-lg ${
              index === 0
                ? "bg-yellow-500 text-black"
                : index === 1
                ? "bg-gray-500"
                : "bg-orange-600"
            }`}
          >
            <img
              src={entry.avatar}
              alt={entry.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="text-lg font-semibold">{entry.name}</h2>
            <p className="text-xl font-bold">{entry.points} Points</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        {leaderboardData.slice(3).map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center justify-between p-2 ${
              entry.isUser ? "bg-gray-700 rounded-lg" : ""
            }`}
          >
            <div className="flex items-center">
              <span className="font-bold text-xl mr-3">{entry.rank}</span>
              <img
                src={entry.avatar}
                alt={entry.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-lg">{entry.name}</h2>
            </div>
            <p className="font-bold">{entry.points} Points</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
