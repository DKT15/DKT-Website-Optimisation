import { Link } from "react-router-dom";
import AnimatedShapes from "../components/AnimatedShapes";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="relative overflow-hidden bg-[#eef4f0] px-5 py-20 md:px-8">
      <AnimatedShapes density="low" />

      <div className="relative mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:text-[#00bf63]"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bf63]">
            Privacy Policy
          </p>

          <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
            How your information is used
          </h1>

          <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>

          <div className="mt-10 space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-black text-slate-950">Overview</h2>
              <p className="mt-3 leading-7">
                This website is operated by Danté Kellman-Thompson. This privacy
                policy explains what personal information may be collected when
                you use this website and how that information is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Information collected
              </h2>
              <p className="mt-3 leading-7">
                If you contact me through the website contact form, the
                following information may be collected:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">
                <li>Name</li>
                <li>Email address</li>
                <li>Business name</li>
                <li>Website URL, if provided</li>
                <li>Any information included in your message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                How your information is used
              </h2>
              <p className="mt-3 leading-7">
                Your information is only used to respond to your enquiry,
                discuss potential website optimisation work or communicate with
                you regarding your request.
              </p>
              <p className="mt-3 leading-7">
                Your information will not be sold or shared for marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Form processing
              </h2>
              <p className="mt-3 leading-7">
                Contact form submissions are processed using EmailJS, a
                third-party email delivery service. EmailJS processes form data
                in order to deliver enquiries to my email inbox.
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.emailjs.com/legal/privacy-policy/"
                className="mt-3 inline-flex font-bold text-[#008a49] hover:text-[#00bf63]"
              >
                You can read EmailJS privacy policy on their website.
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Data retention
              </h2>
              <p className="mt-3 leading-7">
                Information submitted through the contact form may be retained
                for as long as reasonably necessary to respond to enquiries or
                maintain basic business records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Cookies and tracking
              </h2>
              <p className="mt-3 leading-7">
                This website does not currently use advertising cookies or
                third-party tracking tools.
              </p>
              <p className="mt-3 leading-7">
                Basic technical data may still be processed by hosting providers
                or browser technologies necessary for the website to function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                External links
              </h2>
              <p className="mt-3 leading-7">
                This website may contain links to external websites. I am not
                responsible for the privacy practices or content of external
                sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">
                Your rights
              </h2>
              <p className="mt-3 leading-7">
                You may request access to correction of or deletion of any
                personal information submitted through the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-950">Contact</h2>
              <p className="mt-3 leading-7">
                If you have any questions about this privacy policy or your
                personal information, you can contact:
              </p>
              <a
                href="mailto:dante@dantekellman.co.uk"
                className="mt-3 inline-flex font-bold text-[#008a49] hover:text-[#00bf63]"
              >
                dante@dantekellman.co.uk
              </a>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
