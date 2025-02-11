import React from "react";
import Image from "next/image";

export default function Leaderboard() {
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
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
    {
      rank: 2,
      name: "Nick Gilev",
      points: 1539,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      rank: 3,
      name: "Simon Tran",
      points: 1202,
      avatar:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwzOXx8cGVvcGxlfGVufDB8fHx8MTczNzQ1NzgxOXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      rank: 4,
      name: "Herry Utchie",
      points: 1124,
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      rank: 5,
      name: "Sergey Glazow",
      points: 1089,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      rank: 23,
      name: "Lisa Wisley (You)",
      points: 493,
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      isUser: true,
    },
  ];
  return (
    <>
      <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md mx-auto m-10">
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
                  : "bg-yellow-900"
              }`}
            >
              <div className="relative border-2 w-16 h-16 rounded-full mb-2 overflow-hidden">
                <Image
                  src={entry.avatar}
                  alt={entry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-md font-semibold">{entry.name}</h2>
              <p className="font-bold">{entry.points} Points</p>
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
              <div className="flex items-center gap-3">
                <span className="font-bold text-xl w-5">{entry.rank}</span>
                <div className="relative">
                  <Image
                    src={entry.avatar}
                    alt={entry.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full mb-2 object-cover"
                  />
                </div>
                <h2 className="text-lg">{entry.name}</h2>
              </div>
              <p className="font-bold">{entry.points} Points</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
