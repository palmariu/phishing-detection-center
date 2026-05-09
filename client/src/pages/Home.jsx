import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RiskGauge from "../components/RiskGauge";

const Home = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  // Scan URL Function
  const handleScan = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/scan-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log(error);
      alert("Server connection failed");
    }
  };

  // Download PDF Function
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/export-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result),
        }
      );

      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "scan-report.pdf";
      link.click();
    } catch (error) {
      console.log(error);
      alert("PDF download failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">

        
      {/* Premium Hero Section */}
<div className="text-center mb-14">

  <p className="text-cyan-400 text-sm mb-3 tracking-widest uppercase font-semibold">
    AI Powered Cybersecurity Platform
  </p>

  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
    Phishing Detection
    <span className="block text-cyan-400">
      Center
    </span>
  </h1>

  <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
    Detect malicious URLs, phishing websites, SSL threats,
    WHOIS risks, and VirusTotal intelligence in real-time
    using advanced cyber threat analysis and smart security scoring.
  </p>

</div>

{/* Trust Stats Section */}
<div className="grid md:grid-cols-3 gap-6 mb-12">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
    <h2 className="text-4xl font-bold text-cyan-400 mb-2">
      10K+
    </h2>
    <p className="text-slate-400">
      URLs Scanned
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
    <h2 className="text-4xl font-bold text-red-400 mb-2">
      3K+
    </h2>
    <p className="text-slate-400">
      Threats Detected
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
    <h2 className="text-4xl font-bold text-green-400 mb-2">
      98%
    </h2>
    <p className="text-slate-400">
      Detection Accuracy
    </p>
  </div>

</div>

          {/* Scanner Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                placeholder="Enter suspicious URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleScan}
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950"
              >
                Scan URL
              </button>

            </div>
          </div>

{/* Security Features Section */}
<div className="grid md:grid-cols-3 gap-6 mb-14">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-semibold mb-3 text-cyan-400">
      Real-Time Detection
    </h2>

    <p className="text-slate-400 leading-relaxed">
      Instantly scan suspicious URLs and detect phishing threats
      using smart risk scoring and live analysis.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-semibold mb-3 text-cyan-400">
      SSL + WHOIS Intelligence
    </h2>

    <p className="text-slate-400 leading-relaxed">
      Analyze domain registration details, SSL validity,
      ownership risks, and security certificate trust.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <h2 className="text-xl font-semibold mb-3 text-cyan-400">
      PDF Security Reports
    </h2>

    <p className="text-slate-400 leading-relaxed">
      Export professional cybersecurity reports instantly
      for analysis, documentation, and final project demo.
    </p>
  </div>

</div>

          {/* Result Section */}
          {result && (
            <div className="space-y-8">

              {/* Main Result + Risk Gauge */}
              <div className="grid md:grid-cols-2 gap-8">

                <RiskGauge score={result.riskScore} />

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Scan Result
                  </h2>

                  <div className="space-y-4 text-slate-300">
                    <div>
                      <span className="font-semibold text-white">
                        URL:
                      </span>{" "}
                      {result.scannedUrl}
                    </div>

                    <div>
                      <span className="font-semibold text-white">
                        Status:
                      </span>{" "}
                      {result.status}
                    </div>

                    <div>
                      <span className="font-semibold text-white">
                        Threat Type:
                      </span>{" "}
                      {result.threatType}
                    </div>

                    <div>
                      <span className="font-semibold text-white">
                        Message:
                      </span>{" "}
                      {result.message}
                    </div>
                  </div>
                </div>
              </div>

              {/* WHOIS Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  WHOIS Details
                </h2>

                <div className="space-y-4 text-slate-300">
                  <div>
                    <span className="font-semibold text-white">
                      Registrar:
                    </span>{" "}
                    {result.whois?.registrar}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Creation Date:
                    </span>{" "}
                    {result.whois?.creationDate}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Expiry Date:
                    </span>{" "}
                    {result.whois?.expiryDate}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Country:
                    </span>{" "}
                    {result.whois?.country}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Name Servers:
                    </span>{" "}
                    {Array.isArray(result.whois?.nameServers)
                      ? result.whois.nameServers.join(", ")
                      : result.whois?.nameServers}
                  </div>
                </div>
              </div>

              {/* SSL Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  SSL Certificate Details
                </h2>

                <div className="space-y-4 text-slate-300">
                  <div>
                    <span className="font-semibold text-white">
                      SSL Valid:
                    </span>{" "}
                    {result.ssl?.valid ? "Yes" : "No"}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Issuer:
                    </span>{" "}
                    {result.ssl?.issuer}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Valid From:
                    </span>{" "}
                    {result.ssl?.validFrom}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Expiry Date:
                    </span>{" "}
                    {result.ssl?.validTo}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Days Remaining:
                    </span>{" "}
                    {result.ssl?.daysRemaining}
                  </div>
                </div>
              </div>

              {/* VirusTotal Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  VirusTotal Analysis
                </h2>

                <div className="space-y-4 text-slate-300">
                  <div>
                    <span className="font-semibold text-white">
                      Malicious:
                    </span>{" "}
                    {result.virusTotal?.malicious}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Suspicious:
                    </span>{" "}
                    {result.virusTotal?.suspicious}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Harmless:
                    </span>{" "}
                    {result.virusTotal?.harmless}
                  </div>

                  <div>
                    <span className="font-semibold text-white">
                      Undetected:
                    </span>{" "}
                    {result.virusTotal?.undetected}
                  </div>
                </div>
              </div>

              {/* Screenshot Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Website Screenshot Preview
                </h2>

                {result.screenshot?.screenshotUrl ? (
                  <img
                    src={result.screenshot.screenshotUrl}
                    alt="Website Preview"
                    className="w-full rounded-xl border border-slate-700"
                  />
                ) : (
                  <p className="text-slate-400">
                    Screenshot preview not available
                  </p>
                )}
              </div>

              {/* PDF Button */}
              <div className="text-center">
                <button
                  onClick={handleDownloadPDF}
                  className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950"
                >
                  Download PDF Report
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;