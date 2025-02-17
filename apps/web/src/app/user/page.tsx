"use client";

import React from "react";
import Image from "next/image";

export default function UserDashboard() {
  // Sample user data - replace with actual data from your backend
  const userData = {
    name: "Sarah Anderson",
    balance: 850000,
    eventsAttended: 12,
    upcomingEvents: 3,
    badges: [
      {
        id: 1,
        name: "First Event",
        description: "Register first event",
        imageUrl: "badge1-minpro.png",
      },
      {
        id: 2,
        name: "Reviewer",
        description: "Leave a review in attended event",
        imageUrl: "badge2-minpro.png",
      },
    ],
    transactions: [
      {
        id: 1,
        event: "Wedding Expo 2025",
        amount: -250000,
        date: "2025-02-10",
      },
      {
        id: 2,
        event: "Refund - Canceled Event",
        amount: 150000,
        date: "2025-02-08",
      },
      { id: 3, event: "Birthday Gala", amount: -350000, date: "2025-02-01" },
    ],
    reviews: [
      {
        id: 1,
        event: "Summer Music Festival",
        rating: 5,
        comment: "Amazing experience!",
      },
      {
        id: 2,
        event: "Corporate Workshop",
        rating: 4,
        comment: "Well organized",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header with User Info */}
      <div className="mb-8 flex items-center justify-between rounded-xl bg-lightPurple p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full bg-darkPurple">
            <Image
              src="/api/placeholder/64/64"
              alt="Profile"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-montserrat text-2xl font-bold text-darkPurple">
              {userData.name}
            </h1>
            <p className="font-delius text-darkPurple">Member since 2024</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-delius text-sm text-darkPurple">Wallet Balance</p>
          <p className="font-montserrat text-2xl font-bold text-bluePastel">
            Rp {userData.balance.toLocaleString()}
          </p>
        </div>
      </div>

      {/* User Badges Section */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-montserrat text-xl font-bold text-darkPurple">
          User Badges
        </h2>
        <div className="flex flex-wrap gap-3">
          {userData.badges.length > 0 ? (
            userData.badges.map((badge) => (
              <div
                key={badge.id}
                className="rounded-lg bg-bluePastel px-4 py-2 text-white shadow-md"
              >
                <Image
                  src={badge.imageUrl} // Replace with your badge image URL
                  alt={badge.name}
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
                  className="rounded-full" // Optional styling
                />
                <p className="font-montserrat text-sm font-bold">
                  {badge.name}
                </p>
                <p className="text-xs">{badge.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No badges yet</p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-pinkPastel p-6">
          <h3 className="font-delius text-lg text-foreground">
            Events Attended
          </h3>
          <p className="font-montserrat text-3xl font-bold text-foreground">
            {userData.eventsAttended}
          </p>
        </div>
        <div className="rounded-xl bg-bluePastel p-6">
          <h3 className="font-delius text-lg text-white">Upcoming Events</h3>
          <p className="font-montserrat text-3xl font-bold text-white">
            {userData.upcomingEvents}
          </p>
        </div>
        <div className="rounded-xl bg-yellowPastel p-6">
          <h3 className="font-delius text-lg text-foreground">Total Reviews</h3>
          <p className="font-montserrat text-3xl font-bold text-foreground">
            {userData.reviews.length}
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-montserrat text-xl font-bold text-darkPurple">
          Recent Transactions
        </h2>
        <div className="space-y-4">
          {userData.transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg border border-lightPurple p-4"
            >
              <div>
                <p className="font-montserrat font-medium">
                  {transaction.event}
                </p>
                <p className="font-delius text-sm">{transaction.date}</p>
              </div>
              <p className="font-montserrat font-bold">
                Rp {Math.abs(transaction.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews and Feedback */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-montserrat text-xl font-bold text-darkPurple">
          Your Reviews
        </h2>
        <div className="space-y-4">
          {userData.reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-lightPurple p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="font-montserrat font-medium text-darkPurple">
                  {review.event}
                </p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellowPastel">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-delius text-darkPurple">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}