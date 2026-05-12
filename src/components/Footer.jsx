export default function Footer({ setPage }) {
  return (
    <footer className="border-t border-slate-900/5 bg-[#eef4f0] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-600 md:flex-row md:items-center">
        <p>
          <span className="font-black text-[#00bf63]">DKT</span> ©{" "}
          {new Date().getFullYear()} Danté Kellman-Thompson
        </p>
        <div className="flex gap-5">
          <a href="/one-pager.pdf" className="hover:text-[#00bf63]">
            One-Pager
          </a>
          <button
            onClick={() => setPage("project")}
            className="hover:text-[#00bf63]"
          >
            Project
          </button>
          <button
            onClick={() => setPage("contact")}
            className="hover:text-[#00bf63]"
          >
            Contact
          </button>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            className="hover:text-[#00bf63]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
