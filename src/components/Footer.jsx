import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/5 bg-[#eef4f0] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-600 md:flex-row md:items-center md:text-left">
        <p>
          <span className="font-black text-[#00bf63]">DKT</span> ©{" "}
          {new Date().getFullYear()} Danté Kellman-Thompson
        </p>
        <div className="flex gap-5">
          <Link
            to="/recentwork"
            className="hover:text-[#00bf63] whitespace-nowrap"
          >
            Recent Work
          </Link>
          <Link to="/contact" className="hover:text-[#00bf63]">
            Contact
          </Link>
          <Link
            to="/privacypolicy"
            className="hover:text-[#00bf63] whitespace-nowrap"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
