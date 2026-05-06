import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm mb-2">
              About Project
            </p>

            <h1 className="text-4xl font-bold">
              Phishing Detection Center
            </h1>

            <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
              A cybersecurity-focused phishing URL detection system designed to
              analyze suspicious URLs, domains, and IP addresses for phishing,
              malware, scam activity, and malicious behavior using intelligent
              threat detection techniques.
            </p>
          </div>

          {/* Project Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Project Objective
              </h2>

              <p className="text-slate-400 leading-relaxed">
                The main objective of this project is to help users identify
                dangerous phishing websites before they become victims of scams,
                credential theft, fake login pages, and malware attacks.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">
                How It Works
              </h2>

              <p className="text-slate-400 leading-relaxed">
                Users submit a suspicious URL. The system performs analysis
                using domain reputation, SSL verification, WHOIS information,
                blacklist detection, and risk scoring to classify the threat.
              </p>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Technology Stack
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>Frontend: React.js + Tailwind CSS</div>
              <div>Backend: Node.js + Express.js</div>
              <div>Database: MongoDB + Mongoose</div>
              <div>API Integration: VirusTotal / Safe Browsing API</div>
              <div>Optional ML: Python + Flask + Scikit-learn</div>
              <div>Deployment: Vercel + Render</div>
            </div>
          </div>

          {/* API Docs */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              API Documentation
            </h2>

            <div className="space-y-5 text-slate-300">

              <div>
                <p className="font-semibold text-white">
                  POST /api/scan-url
                </p>
                <p className="text-slate-400">
                  Submit a URL for phishing detection and receive a threat report.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  GET /api/history
                </p>
                <p className="text-slate-400">
                  Fetch previously scanned URLs from MongoDB history.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  GET /api/report/:id
                </p>
                <p className="text-slate-400">
                  Retrieve detailed scan analysis for a specific scan report.
                </p>
              </div>

            </div>
          </div>

          {/* Team Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Project Team
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Final Year Cybersecurity Project developed for academic research,
              demonstration, and practical phishing detection implementation
              using modern full-stack web technologies.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;