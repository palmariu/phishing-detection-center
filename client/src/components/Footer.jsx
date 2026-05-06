// client/src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Project Info */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Phishing Detection Center
            </h2>

            <p className="text-slate-400 leading-relaxed">
              A cybersecurity-focused phishing detection system designed to scan
              suspicious URLs, domains, and IP addresses using intelligent
              threat analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Dashboard</li>
              <li className="hover:text-cyan-400 cursor-pointer">Scan Results</li>
              <li className="hover:text-cyan-400 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Tech Stack
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>React.js + Tailwind CSS</li>
              <li>Node.js + Express.js</li>
              <li>MongoDB + Mongoose</li>
              <li>Cybersecurity Threat Detection</li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © 2026 Phishing Detection Center — Final Year Project
        </div>
      </div>
    </footer>
  );
};

export default Footer;