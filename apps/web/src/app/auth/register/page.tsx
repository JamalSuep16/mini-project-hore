"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
    referralCode: "", // Tambahkan referral code
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }

      router.push("/auth/login");
    } catch (err) {
      if (err instanceof Error) {
        console.log(error);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="USER">User</option>
            <option value="ORGANIZER">Organizer</option>
          </select>

          {/* Referral Code Input */}
          <input
            name="referralCode"
            type="text"
            placeholder="Referral Code (Optional)"
            value={form.referralCode}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
