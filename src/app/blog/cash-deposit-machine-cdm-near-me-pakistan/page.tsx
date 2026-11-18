import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Sparkles, Building2, ShieldCheck, ArrowDownToLine, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7",
  description:
    "Skip branch teller lines. Find Cash Deposit Machines (CDM) near you in Pakistan, learn how cardless deposits work, and check accepted currency notes.",
  keywords: [
    "cdm near me",
    "cash deposit machine near me",
    "meezan bank cdm near me",
    "hbl cdm near me",
    "cash deposit machine pakistan",
    "cardless cash deposit",
    "deposit cash in atm",
  ],
  alternates: {
    canonical: "/blog/cash-deposit-machine-cdm-near-me-pakistan",
  },
  openGraph: {
    title: "Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7",
    description:
      "Deposit cash into any Pakistani bank account 24/7 without waiting in branch teller lines. Guide to finding and using CDMs.",
    url: "https://atmfinder.varbox.dev/blog/cash-deposit-machine-cdm-near-me-pakistan",
  },
};

const FAQ_ITEMS = [
  {
    q: "Can I deposit cash in a CDM without an ATM debit card?",
    a: "Yes. Most banks in Pakistan (including Meezan Bank, HBL, Bank Alfalah, and UBL) allow Cardless Cash Deposit. You simply select 'Cardless Transaction' on the touch screen, type your 13-digit CNIC, enter the recipient's bank account number, and verify the beneficiary name on the screen before inserting cash.",
  },
  {
    q: "Which currency notes do Cash Deposit Machines (CDMs) accept in Pakistan?",
    a: "Pakistani CDMs strictly accept Rs. 500, Rs. 1,000, and Rs. 5,000 currency notes. They do NOT accept Rs. 10, Rs. 20, Rs. 50, or Rs. 100 notes. Ensure notes are crisp, unfolded, and free of tape, pins, or severe ink stains, otherwise the machine will reject and return them.",
  },
  {
    q: "Is there any charge or fee for depositing cash via a CDM?",
    a: "No. Cash deposits made via a CDM into an account within the same bank network are 100% free of charge. Instant credit confirmation is sent via SMS within 30 seconds of completing the transaction.",
  },
  {
    q: "How can I find a CDM near me in Pakistan?",
    a: "You can use the ATM Finder Pakistan app and toggle the 'CDM / Cash Deposit' amenity filter. It displays only bank machines equipped with instant automated cash deposit slots in Karachi, Lahore, Islamabad, and across Pakistan.",
  },
];

export default function CdmGuideArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7 Without Bank Lines",
    description:
      "Complete guide to finding and using Cash Deposit Machines (CDMs) across Pakistan. Cardless deposit instructions, accepted notes, and 24/7 locations.",
    author: {
      "@type": "Organization",
      name: "ATM Finder Pakistan",
      url: "https://atmfinder.varbox.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "ATM Finder Pakistan",
      logo: {
        "@type": "ImageObject",
        url: "https://atmfinder.varbox.dev/images/brand/app_logo.png",
      },
    },
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="min-h-screen bg-canvas-soft/40 py-12 sm:py-16">
        <div className="container-wide max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mb-6 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Guides</span>
          </Link>

          {/* Article Header */}
          <header className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm mb-10">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-ink-400 mb-4">
              <span className="rounded-full bg-cash-50 px-3 py-1 font-bold text-cash-600">
                CDM &amp; Cash Deposit
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> 6 min read
              </span>
              <span>•</span>
              <span>Updated November 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-950 leading-tight">
              Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7 Without Bank Lines
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-500 leading-relaxed">
              Standing in a packed bank branch queue for 45 minutes just to deposit utility bill
              cash or transfer money to a family member is one of the biggest headaches in Pakistan.
              With <strong>Cash Deposit Machines (CDMs)</strong>, you can deposit money in under 60
              seconds at any time of day or night. Here is how they work and how to find one near you.
            </p>
          </header>

          {/* Main Content Body */}
          <div className="space-y-10 text-ink-700 leading-relaxed text-base sm:text-[17px]">
            {/* Section 1 */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-4 flex items-center gap-2.5">
                <Banknote className="h-6 w-6 text-cash-600 flex-shrink-0" />
                <span>1. What is a Cash Deposit Machine (CDM)?</span>
              </h2>
              <p className="mb-4">
                A <strong>Cash Deposit Machine (CDM)</strong> (also referred to by banks as a Cash
                Recycler Machine or CRM) is an advanced automated terminal equipped with high-speed
                currency validation sensors.
              </p>
              <p>
                Unlike standard ATMs that only dispense cash, a CDM has an automated motorized tray
                that accepts a stack of physical bank notes, counts them in seconds, verifies their
                authenticity, and immediately credits the funds to your account with real-time SMS
                confirmation.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-4 flex items-center gap-2.5">
                <Building2 className="h-6 w-6 text-brand-500 flex-shrink-0" />
                <span>2. Which Pakistani Banks Have the Best CDM Networks?</span>
              </h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-canvas-border bg-canvas-soft p-5">
                  <h3 className="font-bold text-ink-950 text-base mb-1">Meezan Bank</h3>
                  <p className="text-sm text-ink-600">
                    Meezan Bank has the largest Islamic CDM network in Pakistan. Almost every major
                    commercial branch in Karachi, Lahore, Rawalpindi, and Faisalabad features a 24/7
                    accessible CDM inside their self-service lobby.
                  </p>
                </div>
                <div className="rounded-2xl border border-canvas-border bg-canvas-soft p-5">
                  <h3 className="font-bold text-ink-950 text-base mb-1">HBL (Habib Bank Limited)</h3>
                  <p className="text-sm text-ink-600">
                    HBL features Cash Recycler Machines across key hub branches. They allow both card
                    and cardless cash deposits with real-time Konnect and HBL Mobile integration.
                  </p>
                </div>
                <div className="rounded-2xl border border-canvas-border bg-canvas-soft p-5">
                  <h3 className="font-bold text-ink-950 text-base mb-1">Bank Alfalah &amp; UBL</h3>
                  <p className="text-sm text-ink-600">
                    Both Bank Alfalah and UBL have rapidly upgraded their high-traffic urban branches
                    with CDMs, allowing customers to deposit utility bill payments and corporate
                    collections 24/7.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-4 flex items-center gap-2.5">
                <CheckCircle2 className="h-6 w-6 text-cash-500 flex-shrink-0" />
                <span>3. Step-by-Step: How to Deposit Cash Without an ATM Card</span>
              </h2>
              <p className="mb-4">
                You do not need an ATM card to deposit money into a friend, family member, or
                business account. Follow these 4 simple steps:
              </p>
              <ol className="space-y-3.5 pl-2">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Tap &quot;Cardless Transactions&quot;:</strong> On the CDM touch screen,
                    select your language (English or Urdu) and tap &quot;Cash Deposit&quot;.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Enter CNIC &amp; Account Number:</strong> Type your 13-digit CNIC number,
                    followed by the beneficiary&apos;s 14-to-16-digit bank account or IBAN number.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Verify the Title of Account:</strong> The screen will display the
                    recipient&apos;s registered name. Double-check that the name matches before
                    proceeding.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    <strong>Insert Cash &amp; Confirm:</strong> The motorized slot will open. Place
                    your neat stack of Rs. 500, Rs. 1000, or Rs. 5000 notes into the slot. The
                    machine counts and displays the denomination breakdown. Tap &quot;Confirm&quot;
                    and collect your printed receipt.
                  </span>
                </li>
              </ol>
            </section>

            {/* In-Article App Banner */}
            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="inline-block rounded-full bg-brand-500 px-3 py-0.5 text-xs font-bold text-white mb-2">
                  CDM Filter Included
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-ink-950">
                  Looking for a CDM Near You Right Now?
                </h3>
                <p className="text-sm text-ink-500 mt-1">
                  Use the ATM Finder app to filter specifically for bank machines with 24/7 Cash
                  Deposit slots.
                </p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=dev.varbox.atmfinder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent cta-shine flex-shrink-0 px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2"
              >
                <ArrowDownToLine className="h-4 w-4" />
                <span>Get on Google Play</span>
              </a>
            </div>

            {/* Section 4 */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-4 flex items-center gap-2.5">
                <ShieldCheck className="h-6 w-6 text-brand-500 flex-shrink-0" />
                <span>4. Important Rules to Avoid CDM Note Rejection</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-2xl border border-cash-200 bg-cash-50/60">
                  <div className="font-bold text-cash-700 mb-2">✅ Accepted Notes:</div>
                  <ul className="space-y-1.5 text-ink-600 text-xs">
                    <li>• Rs. 500 currency notes</li>
                    <li>• Rs. 1,000 currency notes</li>
                    <li>• Rs. 5,000 currency notes</li>
                    <li>• Clean, flat, unfolded notes</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-red-200 bg-red-50/60">
                  <div className="font-bold text-red-700 mb-2">❌ Strictly Rejected:</div>
                  <ul className="space-y-1.5 text-ink-600 text-xs">
                    <li>• Rs. 10, Rs. 20, Rs. 50, Rs. 100 notes</li>
                    <li>• Stapler pins, paperclips, rubber bands</li>
                    <li>• Notes with cellotape or heavy ink writing</li>
                    <li>• Dog-eared or folded corners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-6">
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-6">
                {FAQ_ITEMS.map((item, idx) => (
                  <div key={idx} className="border-b border-canvas-border pb-5 last:border-b-0 last:pb-0">
                    <h3 className="font-bold text-ink-950 text-base sm:text-lg mb-2">{item.q}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
