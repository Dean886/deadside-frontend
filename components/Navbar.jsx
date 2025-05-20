import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-bold tracking-wide text-blue-400">Deadside Monitor</h1>
      <div className="space-x-4 text-sm">
        <Link to="/" className="hover:text-blue-300">🏠 Home</Link>
        <Link to="/register" className="hover:text-blue-300">📝 Register</Link>
        <Link to="/login" className="hover:text-blue-300">🔐 Login</Link>
        <Link to="/health" className="hover:text-blue-300">📊 Health</Link>
      </div>
    </nav>
  );
}
