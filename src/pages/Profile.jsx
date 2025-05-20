import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      navigate("/login");
      return;
    }

    fetch(`http://127.0.0.1:5000/users/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error("Profile fetch error:", err);
        navigate("/login");
      });
  }, [navigate]);

  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6">
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">👤 Profile</h1>
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Created:</strong> {profile.created_at}</p>
      </div>
    </div>
  );
}
