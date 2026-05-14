import { Link } from "react-router-dom";
import AnimatedShapes from "../components/AnimatedShapes";
import { ExternalLink, Mail } from "lucide-react";
import Button from "../components/Button";

export default function RecentWork() {
  return (
    <main className="relative overflow-hidden bg-[#eef4f0] px-5 py-20 md:px-8">
      <AnimatedShapes density="low" />
      <div className="relative mx-auto max-w-7xl">
        <Link to="/">
          <button className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-[#00bf63]">
            ← Back to Home
          </button>
        </Link>
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            Project case study
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-[-0.05em] text-slate-950 md:text-7xl">
            Office of the Small Business Commissioner & Fair Payment Code
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-700">
            A public-facing website project focused on clearer user journeys,
            improved usability, accessibility and engagement. The OSBC website
            and Fair Payment Code section sit on the same domain, creating one
            connected platform for users.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "UX",
              "Accessibility",
              "Information architecture",
              "Engagement",
              "Performance",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#00bf63]/10 px-3 py-1 text-xs font-semibold text-[#007c42]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Role",
              text: "Led relaunch activity and ongoing optimisation across content, structure, usability and engagement.",
            },
            {
              title: "Focus",
              text: "Clearer journeys, better accessibility, improved information structure and practical performance improvements.",
            },
            {
              title: "Recognition",
              text: "The OSBC website was later recognised with a Vega Award as part of wider project delivery involving external suppliers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#00bf63]/20 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            What this shows
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950">
            Experience improving real websites with real users.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            This project demonstrates the same type of thinking I bring to small
            business websites: making content easier to understand, reducing
            friction, improving user journeys and helping visitors take the next
            step with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.smallbusinesscommissioner.gov.uk/"
              className="inline-flex items-center gap-2 rounded-full bg-[#00bf63] px-6 py-4 text-sm font-bold text-slate-950 hover:bg-[#16d978]"
              target="_blank"
            >
              View Live Website <ExternalLink size={18} />
            </a>
            <Link to="/contact">
              <Button className="cursor-pointer" variant="secondary">
                Discuss your website <Mail size={18} />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
