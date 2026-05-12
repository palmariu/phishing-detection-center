import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://phishing-detection-center-backend.onrender.com/api/history")
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalScans = history.length;

  const maliciousCount = history.filter(
    (item) => item.status === "Malicious"
  ).length;

  const safeCount = history.filter(
    (item) => item.status === "Safe"
  ).length;

  // Graph Data
  const chartData = [
    {
      name: "Safe",
      count: safeCount,
    },
    {
      name: "Malicious",
      count: maliciousCount,
    },
  ];

  // Search Filter Logic
  const filteredHistory = history.filter((item) =>
    item.scannedUrl
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/admin-login";
  };

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://phishing-detection-center-backend.onrender.com/api/delete-history/${id}`,
        {
          method: "DELETE",
        }
      );

      setHistory(
        history.filter((item) => item._id !== id)
      );

      alert("Record deleted successfully");
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-400 transition font-semibold text-white"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg mb-2">
              Total Scans
            </h2>
            <p className="text-4xl font-bold">
              {totalScans}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg mb-2">
              Malicious URLs
            </h2>
            <p className="text-4xl font-bold text-red-400">
              {maliciousCount}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg mb-2">
              Safe URLs
            </h2>
            <p className="text-4xl font-bold text-green-400">
              {safeCount}
            </p>
          </div>

        </div>

        {/* Threat Statistics Graph */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-6">
            Threat Statistics
          </h2>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Scan History Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Scan History
          </h2>

          {/* Search Box */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search URL..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3">URL</th>
                  <th>Status</th>
                  <th>Risk Score</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.map((item, index) => (
                  <tr
                    key={item._id || index}
                    className="border-b border-slate-800"
                  >
                    <td className="py-4">
                      {item.scannedUrl}
                    </td>

                    <td>
                      {item.status}
                    </td>

                    <td>
                      {item.riskScore}
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;