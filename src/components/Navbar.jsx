import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ section, setSection }) {
  const [open, setOpen] = useState(false);

  // this allows the user to navigate down when clicking on a nav item.
  const go = (nextSection, hash) => {
    setSection(nextSection);
    setOpen(false);
    // If hash exists and destination page is home, then scroll to the matching section.
    setTimeout(() => {
      if (hash && nextSection === "home") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

  // link pairings
  const homeLinks = [
    ["Services", "#services"],
    ["Process", "#process"],
    ["Recent Work", "#recentwork"],
    ["Testimonials", "#testimonials"],
    ["About", "#about"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#eef4f0]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-left">
          <span className="text-3xl font-black tracking-tight text-[#00bf63]">
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#00bf63]" : "transition hover:text-[#00bf63]"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

{
  /*

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {page === "home" ? (
            <>
              {homeLinks.map(([label, hash]) => (
                <button
                  key={label}
                  onClick={() => go("home", hash)}
                  className="transition hover:text-[#00bf63]"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => go("contact")}
                className="transition hover:text-[#00bf63]"
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => go("home")}
                className="transition hover:text-[#00bf63]"
              >
                Home
              </button>
              <button
                onClick={() => go("project")}
                className="transition hover:text-[#00bf63]"
              >
                Project
              </button>
              <button
                onClick={() => go("contact")}
                className="transition hover:text-[#00bf63]"
              >
                Contact
              </button>
            </>
          )}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Button variant="secondary" href="/one-pager.pdf">
            <FileText size={17} /> View One-Pager
          </Button>
          <Button onClick={() => go("contact")}>
            <Mail size={17} /> Email Me
          </Button>
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
              <button
                onClick={() => go("home")}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Home
              </button>
              <button
                onClick={() => go("project")}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Project
              </button>
              <button
                onClick={() => go("contact")}
                className="rounded-2xl px-4 py-3 text-left hover:bg-slate-50"
              >
                Contact
              </button>
              <a
                href="/one-pager.pdf"
                className="rounded-2xl px-4 py-3 hover:bg-slate-50"
              >
                View One-Pager
              </a>
            </div>
          </div>
        </div>
      )}
    </header> */
}
