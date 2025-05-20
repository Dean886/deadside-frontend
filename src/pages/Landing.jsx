export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold mb-4">💀 Welcome to Deadside Monitor</h1>
      <p className="text-lg mb-6">Select an option to continue:</p>
      <div className="flex space-x-4">
        <a
          href="/register"
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold"
        >
          ✍️ Register
        </a>
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
        >
          🔐 Login
        </a>
      </div>
    </div>
  );
}
