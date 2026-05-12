import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FileText, Mail, X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // sets the menu to close
  const closeMenu = () => setOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-[#00bf63]" : "transition hover:text-[#00bf63]";

  // Tailwind CSS classes used throughout the code for styling.
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#eef4f0]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-1 px-2 py-2.5 min-[420px]:gap-2 min-[420px]:px-3 sm:px-5 sm:py-4 md:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 text-left"
        >
          <span className="text-xl font-black tracking-tight text-[#00bf63] min-[420px]:text-2xl sm:text-3xl">
            DKT
          </span>
          <span className="hidden text-xs font-medium text-slate-700 sm:block">
            Website Optimisation Specialist
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
        <div className="flex min-w-0 items-center gap-1 min-[420px]:gap-1.5 sm:gap-2">
          <a
            href="./assets/website-optimisation-for-small-businesses.pdf"
            target="_blank"
            className="inline-flex shrink items-center justify-center gap-1 rounded-full border border-slate-300 bg-white/70 px-1.5 py-1 text-[8px] font-semibold text-slate-900 backdrop-blur-xl transition hover:border-[#00bf63] hover:text-[#00bf63] min-[420px]:px-2.5 min-[420px]:py-1.5 min-[420px]:text-[10px] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:py-3 md:text-sm"
            rel="noopener noreferrer"
          >
            <FileText
              size={10}
              className="shrink-0 min-[420px]:size-3 sm:size-4"
            />
            <span className="whitespace-nowrap">View One-Pager</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex shrink items-center justify-center gap-1 rounded-full bg-[#00bf63] px-1.5 py-1 text-[8px] font-semibold text-slate-950 shadow-lg shadow-[#00bf63]/20 transition hover:bg-[#18d875] min-[420px]:px-2.5 min-[420px]:py-1.5 min-[420px]:text-[10px] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:py-3 md:text-sm"
          >
            <Mail size={10} className="shrink-0 min-[420px]:size-3 sm:size-4" />
            <span className="whitespace-nowrap">Email Me</span>
          </Link>
        </div>
        {/* Menu Toggle */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-900 min-[420px]:h-9 min-[420px]:w-9 sm:h-11 sm:w-11 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={14} className="min-[420px]:size-4 sm:size-5" />
          ) : (
            <Menu size={14} className="min-[420px]:size-4 sm:size-5" />
          )}
        </button>
      </div>
      {/* Items that are displayed when the menu is open */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-2 mb-4 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-xl sm:mx-5">
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
