const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Project Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Phishing Detection Center
            </h2>

            <p className="text-slate-400 leading-relaxed">
              A professional cybersecurity platform developed to detect
              phishing URLs, suspicious domains, SSL threats, and
              malicious activities using intelligent threat analysis
              and real-time security scoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Scan Results
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                About
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                Admin Panel
              </li>
            </ul>
          </div>

          {/* Project Credits */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Project Credits
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                Created by <span className="text-white font-medium">Umar Abdullah</span>
              </li>

              <li>
                Final Year Cybersecurity Project
              </li>

              <li>
                BCA – Computer Science
              </li>

              <li>
                Jagannath University, Jaipur
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center">

          <p className="text-slate-500 text-sm">
            © 2026 Phishing Detection Center — Final Year Project
          </p>

          <p className="text-slate-600 text-xs mt-2">
            Built with React, Node.js, MongoDB & Cybersecurity Intelligence
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;