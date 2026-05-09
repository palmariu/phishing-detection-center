import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
            <ShieldCheck className="text-cyan-400" size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Phishing Detection Center
            </h1>

            <p className="text-xs text-slate-400">
              Cyber Threat Intelligence
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/scan-results"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Scan Results
          </Link>

          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            About
          </Link>

        </div>

        {/* Start Scan Button */}
        <Link
          to="/"
          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-slate-950"
        >
          Start Scan
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;