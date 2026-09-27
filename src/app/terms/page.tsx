import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and non-affiliation disclaimers for the ATM Finder Pakistan application and website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-3">
        Terms of Service
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 pb-6 mb-8 border-b border-canvas-border">
        <span>
          <strong>Last Updated:</strong> September 27, 2026
        </span>
        <span>•</span>
        <span>
          <strong>App Package:</strong> <code className="bg-canvas-card px-1.5 py-0.5 rounded border border-canvas-border">dev.varbox.atmfinder</code>
        </span>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-charcoal-700 leading-relaxed">
        <p>
          Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the ATM
          Finder Pakistan mobile application (the &ldquo;App&rdquo;) or website (the
          &ldquo;Site&rdquo;) operated by ATM Finder Pakistan (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;).
        </p>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">1. Acceptance of Terms</h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            By accessing or using our App or Site, you agree to be bound by these Terms. If you
            disagree with any part of the Terms, you may not access or use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            2. Independent Directory &amp; Non-Affiliation Disclaimer
          </h2>
          <div className="bg-canvas-card border-l-4 border-l-brand-500 border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
            <div className="flex items-center gap-2 font-bold text-charcoal-900 mb-2">
              <ShieldAlert className="w-5 h-5 text-brand-600" />
              <span>Independent Directory Status</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 mb-2 leading-relaxed">
              ATM Finder Pakistan is an independent informational directory and community utility.
              We are <strong>NOT</strong> affiliated with, associated with, authorized, endorsed
              by, or in any way officially connected with Habib Bank Limited (HBL), Meezan Bank,
              United Bank Limited (UBL), MCB Bank, Bank Alfalah, Allied Bank (ABL), 1LINK (Pvt)
              Limited, JazzCash, Easypaisa, Google LLC, or any other financial institution.
            </p>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              All bank names, logos, and registered trademarks belong to their respective owners.
              Their use is solely for nominative fair use and location identification purposes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            3. Crowdsourced Information &amp; Status Disclaimer
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            The cash availability, operating hours, and operational status shown in the App are based
            on public listings and voluntary community reports submitted by other cardholders.
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1.5">
            <li>
              Status reports reflect historical user submissions and may not represent real-time
              conditions at the exact moment of your visit.
            </li>
            <li>
              ATM cash levels and machine operations are subject to rapid change by banking staff
              and cardholder demand.
            </li>
            <li>
              We do not guarantee that an ATM will have cash, be operational, or be accessible when
              you arrive.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            4. Acceptable Use of Community Reporting
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            When submitting status reports or notes within the App, you agree to:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1.5">
            <li>Provide honest and truthful observations regarding machine status.</li>
            <li>Refrain from submitting abusive, vulgar, defamatory, or fraudulent content.</li>
            <li>Not attempt to manipulate reports, flood the system, or reverse-engineer the API.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. Limitation of Liability</h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            To the maximum extent permitted by applicable law, ATM Finder Pakistan, its developers,
            and affiliates shall not be liable for any direct, indirect, incidental, or
            consequential damages resulting from your use of or inability to use the service,
            including but not limited to travel expenses, wasted fuel, banking fees, or inability to
            withdraw cash.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">6. Contact</h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            For questions regarding these Terms, contact us at:{" "}
            <a href="mailto:support@varbox.dev" className="text-brand-600 font-semibold underline">
              support@varbox.dev
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
