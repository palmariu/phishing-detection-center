import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RiskGauge from "../components/RiskGauge";
import axios from "axios";

const ScanResult = () => {
  const result = {
    scannedUrl: "https://fake-bank-login.com",
    riskScore: 82,
    status: "Malicious",
    threatType: "Phishing",
    message: "Suspicious login page detected",
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await axios.post(
        "https://phishing-detection-center-3.onrender.com/api/export-pdf",
        result,
        {
          responseType: "blob",
        }
      );

      const file = new Blob(
        [response.data],
        { type: "application/pdf" }
      );

      const fileURL = window.URL.createObjectURL(file);

      const link = document.createElement("a");
      link.href = fileURL;
      link.setAttribute(
        "download",
        "Phishing-Scan-Report.pdf"
      );

      document.body.appendChild(link);
      link.click();
      link.remove();

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

          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm mb-2">
              Detailed Threat Analysis
            </p>

            <h1 className="text-4xl font-bold mb-4">
              Scan Result
            </h1>

            <p className="text-slate-400">
              Complete phishing risk breakdown for the submitted URL.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <RiskGauge score={result.riskScore} />

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Threat Report
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

                <button
                  onClick={handleDownloadPDF}
                  className="w-full mt-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950"
                >
                  Download PDF Report
                </button>

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