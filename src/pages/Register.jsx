import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Register() {
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
        })
      });

      const result = await res.json();
      setMessage(result.message || result.error);

      if (res.status === 201) {
        toast.success("✅ Registered successfully!");
        setTimeout(() => window.location.href = '/login', 1000);
      } else {
        toast.error(result.error || "Registration failed.");
      }
    } catch (err) {
      console.error("Error submitting registration:", err);
      toast.error("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>

        {message && (
          <p className="mb-4 text-sm text-center text-green-400">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
