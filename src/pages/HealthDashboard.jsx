import { useEffect, useState } from 'react';

export default function HealthDashboard() {
  const [status, setStatus] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const checkHealth = async () => {
    try {
      const res = await fetch('http://127.0.0.1:5000/health');
      const data = await res.json();
      setStatus('online');
      setResponseData(data);
    } catch {
      setStatus('offline');
      setResponseData(null);
    }
    setLastChecked(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center text-white">
        <h2 className="text-3xl font-bold mb-4">API Health</h2>
        <p className="mb-2">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium 
            ${status === 'online' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {status === 'online' ? '🟢 Online' : '🔴 Offline'}
          </span>
        </p>
        <p className="text-sm mb-4">Last checked: {lastChecked}</p>
        <pre className="text-left bg-gray-700 p-3 rounded overflow-x-auto text-sm">
          {responseData ? JSON.stringify(responseData, null, 2) : 'No response'}
        </pre>
      </div>
    </div>
  );
}
