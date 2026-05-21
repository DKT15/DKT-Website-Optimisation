import { Link } from "react-router-dom";
import AnimatedShapes from "../components/AnimatedShapes";
import SectionHeader from "../components/SectionHeader";
import { testimonials } from "../data/testimonials";
import Button from "../components/Button";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Gauge,
  MousePointerClick,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  // This is to be later mapped below for the services section.
  const services = [
    {
      icon: Search,
      title: "Website Audits & Insights",
      text: "A clear review of what may be limiting your website’s usability, search and AI visibility, performance, accessibility and trust.",
    },
    {
      icon: MousePointerClick,
      title: "UX & Conversion Optimisation",
      text: "Clearer journeys, stronger calls-to-action and fewer barriers to getting in touch.",
    },
    {
      icon: Gauge,
      title: "SEO & Performance Improvements",
      text: "Practical improvements to visibility, speed and how well your website supports users.",
    },
    {
      icon: ShieldCheck,
      title: "Accessibility Improvements",
      text: "Improvements that make your website easier to use for a wider range of visitors.",
    },
    {
      icon: Sparkles,
      title: "AI Search Visibility (AEO/GEO)",
      text: "Improvements that help your website appear more clearly in AI-powered search tools and modern search experiences.",
    },
  ];

  // First two sectinos to have animated shapes.
  return (
    <main>
      <section className="relative min-h-[calc(100vh-77px)] overflow-hidden bg-[#eef4f0] px-5 py-20 md:px-8 md:py-24">
        <AnimatedShapes />
        <div className="relative mx-auto max-w-7xl">
          <div className="animate-fade-up max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#00bf63]">
              Website optimisation for small businesses
              <span className="h-px w-12 bg-[#00bf63]/50" />
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl md:text-8xl">
              Helping your website work {""}
              <span className="text-[#00bf63]">better.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              I help small and micro businesses improve underperforming websites
              through better usability, visibility and performance, making it
              easier for visitors to understand your business and get in touch.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                to="/contact"
                className="w-full rounded-2xl px-6 py-4 sm:w-auto"
              >
                Request a Website Review <ArrowRight size={18} />
              </Button>
              <Button
                href="/assets/website-optimisation-for-small-businesses.pdf"
                rel="noopener noreferrer"
                target="_blank"
                variant="secondary"
                className="w-full rounded-2xl px-6 py-4 sm:w-auto"
              >
                <FileText size={18} /> View One-Pager
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-5 text-sm font-medium text-slate-600 [@media(max-width:639px)]:justify-center [@media(max-width:639px)]:text-xs">
              {[
                "UX & Usability",
                "SEO & Visibility",
                "Performance",
                "Accessibility",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#00bf63]" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="recentwork"
        className="scroll-mt-24 relative overflow-hidden bg-[#f7faf7] px-5 py-24 md:px-8"
      >
        <AnimatedShapes density="low" />
        <div className="relative mx-auto max-w-7xl border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="Recent Work"
            title="Office of the Small Business Commissioner & Fair Payment Code"
          />
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-slate-700">
              Led the relaunch and ongoing optimisation of the OSBC website and
              Fair Payment Code site, improving usability, accessibility and
              engagement. The project was later recognised with a Vega Award
              which recognised its strong user experience and design as part of
              a larger project.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["UX", "Accessibility", "Performance", "SEO"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#00bf63]/10 px-3 py-1 text-xs font-semibold text-[#007c42]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/recentwork"
                className="inline-flex items-center gap-2 rounded-full border border-[#00bf63]/30 bg-white/70 px-5 py-3 text-sm font-bold text-[#008a49] transition hover:border-[#00bf63] hover:text-[#00bf63]"
              >
                View More Projects <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.smallbusinesscommissioner.gov.uk/"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#00bf63]"
              >
                Visit Live Site <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-[#eef4f0] px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="Services"
            title="How I can help"
            text="Practical website improvements focused on usability, visibility, performance and trust."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00bf63]/10 text-[#00bf63]">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 bg-[#f7faf7] px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Process" title="Simple. Clear. Effective." />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              [
                "Audit",
                "I review your site and identify what may be holding it back.",
              ],
              [
                "Plan",
                "You receive clear priorities based on what will be most useful.",
              ],
              ["Optimise", "I implement agreed improvements across your site."],
              ["Review", "You get a simple summary of what changed and why."],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#00bf63] font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="scroll-mt-24 bg-[#eef4f0] px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Testimonial" title="Professional Feedback" />

          {/* Single featured testimonial */}

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 md:p-12"
            >
              <p className="text-6xl font-black leading-none text-[#00bf63]">
                “
              </p>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">
                {testimonial.quote}
              </p>

              <div className="mt-8">
                <p className="font-bold text-slate-950">
                  {testimonial.company}
                </p>

                <p className="text-sm text-slate-500">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}

          {/*
      Future multi-testimonial layout

      <div className="grid gap-6 md:grid-cols-3">
          <div
            key={testimonial.id}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5"
          >
            <p className="text-5xl font-black text-[#00bf63]">
              “
            </p>

            <p className="mt-3 leading-7 text-slate-700">
              {testimonial.quote}
            </p>
            <div className="mt-8">
                <p className="font-bold text-slate-950">
                  {testimonial.company}
                </p>
                <p className="mt-6 text-sm font-semibold text-slate-500">
                  {testimonial.description}
                </p>
              </div>
          </div>
        ))}
      </div>
    */}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-[#f7faf7] px-5 py-24 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="About"
            title="Website optimisation with practical experience behind it."
          />
          <div className="text-lg leading-8 text-slate-700">
            <p>
              I am Danté Kellman-Thompson, a Website Optimisation Specialist
              with experience managing, relaunching and improving public-facing
              websites at a national level.
            </p>
            <p className="mt-5">
              My focus is on practical improvements that make websites easier to
              use, easier to understand and better set up to support enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef4f0] px-5 py-24 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#00bf63]/20 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950">
              Ready to improve your website?
            </h2>
            <p className="mt-3 text-slate-600">
              Send a few details and I will get back to you as soon as possible.
            </p>
          </div>
          <Button to="/contact">
            Go to contact form <Send size={18} />
          </Button>
        </div>
      </section>
    </main>
  );
}
