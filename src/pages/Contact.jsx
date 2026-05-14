import { Mail, Send, ArrowLeft } from "lucide-react";
import AnimatedShapes from "../components/AnimatedShapes";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // tracking whether or not the form has been submitted.
  const [submitted, setSubmitted] = useState(false);

  // tracking the loading state. If the form is loading then sending will be displayed in the button to let the user know.
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    // preventing the form submit from refreshing the page.
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // set loading to true before the async call below.
    setLoading(true);

    // No current error
    setError("");

    if (formData.get("company")) {
      setLoading(false);
      return;
    }

    try {
      const sentEmail = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey,
      );

      if (sentEmail.text === "OK") {
        form.reset();
        setSubmitted(true);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#eef4f0] px-5 py-20 md:px-8">
      <AnimatedShapes density="low" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-[#00bf63]"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            Get in touch
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-[-0.05em] text-slate-950 md:text-7xl">
            Let’s improve your website.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-700">
            Fill out the form and I will get back to you as soon as possible.
            You can also email me directly.
          </p>
          <div className="mt-10 space-y-5 text-slate-700">
            <a
              href="mailto:dante@dantekellman.co.uk"
              className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 font-semibold shadow-lg shadow-slate-900/5 backdrop-blur-xl"
              aria-label="Email Danté at dante@dantekellman.co.uk"
            >
              <Mail size={18} className="text-[#00bf63]" aria-hidden="true" />{" "}
              dante@dantekellman.co.uk
            </a>
            <a
              href="https://www.linkedin.com/in/dant%C3%A9-kellman-thompson-8b720720a/"
              className="flex items-center gap-4 rounded-3xl bg-white/70 p-5 font-semibold shadow-lg shadow-slate-900/5 backdrop-blur-xl"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Danté on LinkedIn"
            >
              <FaLinkedin
                size={18}
                className="text-[#00bf63]"
                aria-hidden="true"
              />{" "}
              Connect on LinkedIn
            </a>
          </div>
        </div>
        {submitted ? (
          <div
            className="min-h-[620px] rounded-[2rem] border border-[#00bf63]/20 bg-white/80 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl md:p-10"
            role="status"
            aria-live="polite"
          >
            <h2 className="text-2xl font-black text-slate-950">
              Thanks for getting in touch.
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              I’ve received your message and look forward to speaking with you
              soon.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-[#00bf63] hover:text-[#00bf63]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl md:p-8">
            <form
              onSubmit={handleFormSubmit}
              className="grid gap-5"
              aria-labelledby="contact-form-title"
            >
              <div>
                <h2
                  id="contact-form-title"
                  className="text-2xl font-black text-slate-950"
                >
                  Send an enquiry
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Fields marked with <span aria-hidden="true">*</span> are
                  required.
                </p>
              </div>

              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label
                  htmlFor="name"
                  className="grid gap-2 text-sm font-semibold text-slate-700"
                >
                  <span className="flex items-center gap-1">
                    Your name <span aria-hidden="true">*</span>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-label="Your name"
                    placeholder="Your name"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                  />
                </label>

                <label
                  htmlFor="email"
                  className="grid gap-2 text-sm font-semibold text-slate-700"
                >
                  <span className="flex items-center gap-1">
                    Your email <span aria-hidden="true">*</span>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-label="Your email address"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                  />
                </label>
              </div>

              <label
                htmlFor="business"
                className="grid gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-1">
                  Business name
                  <span aria-hidden="true">*</span>
                </span>
                <input
                  id="business"
                  name="business"
                  type="text"
                  autoComplete="organization"
                  aria-label="Business name"
                  placeholder="Business name"
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                />
              </label>

              <label
                htmlFor="website"
                className="grid gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-1">
                  Website URL{" "}
                  <span className="font-normal text-slate-500">optional</span>
                </span>
                <input
                  id="website"
                  name="website"
                  type="url"
                  inputMode="url"
                  autoComplete="url"
                  aria-label="Website URL, optional"
                  placeholder="https://"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                />
              </label>

              <label
                htmlFor="message"
                className="grid gap-2 text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-1">
                  How can I help? <span aria-hidden="true">*</span>
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  aria-label="How can I help?"
                  placeholder="Tell me a bit about your website and what you’d like help with."
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#00bf63]"
                />
              </label>

              {error && (
                <p
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex cursor-pointer w-fit items-center gap-2 rounded-2xl bg-[#00bf63] px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-[#16d978] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} aria-hidden="true" />
              </button>

              <p className="text-sm text-slate-500">
                Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
