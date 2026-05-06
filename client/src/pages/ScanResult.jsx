import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RiskGauge from "../components/RiskGauge";

const ScanResult = () => {
  const mockScanData = {
    url: "https://fake-bank-login.com",
    score: 82,
    category: "Phishing",
    domainAge: "12 Days",
    sslStatus: "Invalid SSL Certificate",
    ipReputation: "Blacklisted",
    whois: "Domain recently registered, suspicious ownership details",
    screenshot:
      "Suspicious banking login page detected with credential harvesting behavior",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <p className="text-cyan-400 text-sm mb-2">
              Scan Report
            </p>

            <h1 className="text-4xl font-bold">
              URL Threat Analysis Result
            </h1>

            <p className="text-slate-400 mt-3">
              Detailed phishing detection report for the submitted URL.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
            <p className="text-slate-400 text-sm mb-2">
              Scanned URL
            </p>

            <h2 className="text-xl font-semibold text-cyan-400 break-all">
              {mockScanData.url}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <RiskGauge score={mockScanData.score} />

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">
                Threat Details
              </h2>

              <div className="space-y-4 text-slate-300">

                <div>
                  <span className="font-semibold text-white">
                    Threat Category:
                  </span>{" "}
                  {mockScanData.category}
                </div>

                <div>
                  <span className="font-semibold text-white">
                    Domain Age:
                  </span>{" "}
                  {mockScanData.domainAge}
                </div>

                <div>
                  <span className="font-semibold text-white">
                    SSL Status:
                  </span>{" "}
                  {mockScanData.sslStatus}
                </div>

                <div>
                  <span className="font-semibold text-white">
                    IP Reputation:
                  </span>{" "}
                  {mockScanData.ipReputation}
                </div>

                <div>
                  <span className="font-semibold text-white">
                    WHOIS:
                  </span>{" "}
                  {mockScanData.whois}
                </div>

                <div>
                  <span className="font-semibold text-white">
                    Screenshot Analysis:
                  </span>{" "}
                  {mockScanData.screenshot}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScanResult;