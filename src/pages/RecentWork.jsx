import { Link } from "react-router-dom";
import AnimatedShapes from "../components/AnimatedShapes";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { projects } from "../data/projects";

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
        <section className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            Recent Work
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-[-0.05em] text-slate-950 md:text-7xl">
            Selected website optimisation projects.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            A selection of projects focused on improving usability,
            accessibility, performance, information structure and user journeys.
          </p>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-xl md:p-8"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="1200"
                  height="700"
                  loading="lazy"
                  className="h-56 w-full object-cotain object-top"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#00bf63]/10 px-3 py-1 text-xs font-semibold text-[#007c42]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="text-sm font-black text-slate-950">Role</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-950">Focus</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.focus}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-950">
                    Recognition
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.recognition}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00bf63] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#18d875]"
                >
                  View Live Website <ExternalLink size={16} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-[#00bf63] hover:text-[#00bf63]"
                >
                  Discuss your website <Mail size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#00bf63]/20 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl md:p-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            What this shows
          </p>

          <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950">
            Experience improving real websites with real users.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            These projects show the type of practical thinking I bring to
            website optimisation: making content easier to understand, reducing
            friction, improving user journeys and helping visitors take the next
            step with confidence.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00bf63] px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#18d875]"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
