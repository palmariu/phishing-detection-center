import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Premium Logo */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 shadow-md">
            <ShieldCheck
              className="text-cyan-400"
              size={26}
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              Phishing Detection Center
            </h1>

            <p className="text-xs text-slate-400 tracking-wider uppercase">
              Cyber Threat Intelligence Platform
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/scan-results"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Scan Results
          </Link>

          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/admin-login"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Admin
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition duration-300 font-semibold text-slate-950 shadow-md"
        >
          Start Scan
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;