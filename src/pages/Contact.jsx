function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#eef4f0] px-5 py-20 md:px-8">
      <AnimatedShapes density="low" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            Get in touch
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-[-0.05em] text-slate-950 md:text-7xl">
            Let’s improve your website.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-700">
            Fill out the form and I’ll get back to you as soon as possible. You
            can also email me directly.
          </p>
          <div className="mt-10 space-y-5 text-slate-700">
            <a
              href="mailto:dante@dantekellman.co.uk"
              className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 font-semibold shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            >
              <Mail className="text-[#00bf63]" /> dante@dantekellman.co.uk
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 font-semibold shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            >
              <Linkedin className="text-[#00bf63]" /> Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl md:p-8">
          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Your name
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Your email
                <input
                  type="email"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Business name
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                placeholder="Business name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Website URL optional
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                placeholder="https://"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              How can I help?
              <textarea
                rows={7}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                placeholder="Tell me a bit about your website and what you’d like help with."
              />
            </label>
            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#00bf63] px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-[#16d978]"
            >
              Send Message <Send size={18} />
            </button>
            <p className="text-sm text-slate-500">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
