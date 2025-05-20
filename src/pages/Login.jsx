import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate(); // ✅ Top-level hook
  const [message, setMessage] = useState(""); // ✅ Fix undefined message bug

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      });

      const result = await res.json();
      setMessage(result.message || result.error);

      if (res.status === 200) {
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("user_id", result.user_id);
        localStorage.setItem("username", result.username);
        localStorage.setItem("username", data.username);
        toast.success("✅ Login successful!");

        navigate("/dashboard");
      } else {
        toast.error(result.error || "Invalid login.");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>

        {message && (
          <p className="mb-4 text-sm text-center text-yellow-300">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
