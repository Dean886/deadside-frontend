import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { userId, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">👋 Welcome back, {userId || "Loading"}!</h1>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </div>

      <p className="text-lg text-gray-300 mb-12">Here’s your Deadside Dashboard:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Profile Card */}
        <div className="bg-slate-700 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">📄 Profile</h2>
          <p className="text-sm text-gray-300 mb-4">Manage your account details.</p>
          <button
            onClick={() => navigate("/profile")}
            className="text-green-400 hover:text-green-300"
          >
            Go to Profile →
          </button>
        </div>

        {/* Health Card */}
        <div className="bg-slate-700 p-6 rounded-lg shadow hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">🧠 Health Check</h2>
          <p className="text-sm text-gray-300 mb-4">Monitor backend system health.</p>
          <button
            onClick={() => navigate("/health")}
            className="text-indigo-400 hover:text-indigo-300"
          >
            Check Status →
          </button>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-slate-700 p-6 rounded-lg shadow opacity-60">
          <h2 className="text-xl font-semibold mb-2">📊 Monitor</h2>
          <p className="text-sm text-gray-300 mb-4">Live tracking for Deadside (soon).</p>
          <span className="italic text-gray-400">Coming soon...</span>
        </div>
      </div>
    </div>
  );
}
