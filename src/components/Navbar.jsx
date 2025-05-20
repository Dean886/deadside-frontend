import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/70 text-white px-6 py-3 shadow-lg flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🧠 Deadside
      </Link>
      <div className="space-x-4">
        <Link to="/register" className="hover:text-emerald-400">✍️ Register</Link>
        <Link to="/login" className="hover:text-indigo-400">🔐 Login</Link>
        <Link to="/health" className="hover:text-pink-400">📊 Health</Link>
      </div>
    </nav>
  );
}
