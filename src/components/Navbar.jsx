import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FileText, Mail, X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinkClass = ({ isActive }) => {
    isActive ? "text-[#00bf63]" : "transition hover:text-[#00bf63]";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#eef4f0]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 text-left"
        >
          <span className="text-3xl font-black tracking-tight text-[#00bf63]">
            DKT
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          <a href="/#services" className="transition hover:text-[#00bf63]">
            Services
          </a>
          <a href="/#process" className="transition hover:text-[#00bf63]">
            Process
          </a>
          <a href="/#recentwork" className="transition hover:text-[#00bf63]">
            Recent Work
          </a>
          <a href="/#testimonials" className="transition hover:text-[#00bf63]">
            Testimonials
          </a>
          <a href="/#about" className="transition hover:text-[#00bf63]">
            About
          </a>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="./assets/website-optimisation-for-small-businesses.pdf"
            target="_blank"
            className="
                    inline-flex items-center justify-center gap-2
                    rounded-full border border-slate-300
                    bg-white/70 backdrop-blur-xl
                    text-slate-900 font-semibold transition
                    hover:border-[#00bf63] hover:text-[#00bf63]

                    px-3 py-2 text-[11px]
                    sm:px-4 sm:py-2.5 sm:text-xs
                    md:px-5 md:py-3 md:text-sm"
            rel="noopener noreferrer"
          >
            <FileText size={17} />
            <span>View One-Pager</span>
          </a>
          <Link
            to="/contact"
            className="
                    inline-flex items-center justify-center gap-2
                    rounded-full bg-[#00bf63]
                    text-slate-950 font-semibold
                    shadow-lg shadow-[#00bf63]/20
                    transition hover:bg-[#18d875]

                    px-3 py-2 text-[11px]
                    sm:px-4 sm:py-2.5 sm:text-xs
                    md:px-5 md:py-3 md:text-sm"
          >
            <Mail size={17} />
            <span>Email Me</span>
          </Link>
        </div>
        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="mx-5 mb-4 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-xl">
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/#services"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Services
              </Link>
              <Link
                to="/#process"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Process
              </Link>
              <Link
                to="/#recentwork"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Recent Work
              </Link>
              <Link
                to="/#testimonials"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Testimonials
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
