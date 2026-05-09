import { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("adminAuth", "true");

        alert("Login Successful");

        window.location.href = "/admin-dashboard";
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Admin Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white"
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white"
          />

          <button
            onClick={handleLogin}
            className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950"
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;