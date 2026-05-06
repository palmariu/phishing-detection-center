import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/history");
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <p className="text-cyan-400 text-sm mb-2">
              Scan History Dashboard
            </p>

            <h1 className="text-4xl font-bold">
              Previous URL Scans
            </h1>

            <p className="text-slate-400 mt-3">
              Real scan history fetched from MongoDB database.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full">

              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-4">URL</th>
                  <th className="text-left p-4">Risk Score</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Threat Type</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-slate-800"
                  >
                    <td className="p-4">{item.scannedUrl}</td>
                    <td className="p-4">{item.riskScore}</td>
                    <td className="p-4">{item.status}</td>
                    <td className="p-4">{item.threatType}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;