import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowDownToLine, Banknote, ShieldCheck } from "lucide-react";
import InteractiveCdmChecker from "@/components/InteractiveCdmChecker";
import InteractiveFaqAccordion from "@/components/InteractiveFaqAccordion";

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
          <header className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-10 shadow-xs mb-8">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-ink-400 mb-3">
              <span className="font-semibold text-cash-600">Self-Service Banking</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> 6 min read
              </span>
              <span>•</span>
              <span>November 2026</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-950 leading-tight">
              Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7 Without Bank Lines
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-500 leading-relaxed">
              Standing in a packed branch queue for 45 minutes just to deposit utility bill cash or
              transfer money to a family member is one of the biggest headaches in Pakistan. With{" "}
              <strong>Cash Deposit Machines (CDMs)</strong>, you can deposit money in under 60
              seconds at any time of day or night. Here is how they work and how to find one near you.
            </p>
          </header>

          {/* Main Content Body */}
          <div className="space-y-8 text-ink-700 leading-relaxed text-base sm:text-[17px]">
            {/* Section 1 */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-3 flex items-center gap-2.5">
                <Banknote className="h-5 w-5 text-cash-600 flex-shrink-0" />
                <span>1. What is a Cash Deposit Machine (CDM)?</span>
              </h2>
              <p className="mb-3 text-sm sm:text-base">
                A <strong>Cash Deposit Machine (CDM)</strong> (also called a Cash Recycler Machine or
                CRM) is an automated terminal equipped with high-speed optical validation sensors.
              </p>
              <p className="text-sm sm:text-base">
                Unlike standard ATMs that only dispense cash, a CDM features an automated motorized tray
                that accepts a stack of physical bank notes, counts them in seconds, verifies their
                authenticity, and immediately credits the funds to your account with real-time SMS
                confirmation.
              </p>
            </section>

            {/* Section 2: Interactive Bank CDM & Note Validator */}
            <InteractiveCdmChecker />

            {/* Section 3: Real App Screenshot Showcase for CDM Filter */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-4 flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span>2. Step-by-Step: Cardless Cash Deposit Process</span>
              </h2>
              <p className="mb-4 text-sm sm:text-base">
                You do not need a plastic ATM debit card to deposit money into a personal, business, or
                family account. Follow these 4 straightforward steps:
              </p>
              <div className="space-y-3 pl-1 mb-6">
                <div className="flex items-start gap-3 rounded-2xl bg-canvas-soft border border-canvas-border/80 p-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-ink-950 text-sm block">Select &quot;Cardless Transactions&quot;</strong>
                    <span className="text-xs text-ink-600 mt-0.5 block">
                      On the machine touch screen, choose English or Urdu and tap &quot;Cash Deposit&quot;.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-canvas-soft border border-canvas-border/80 p-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-ink-950 text-sm block">Enter Your CNIC &amp; Target Account</strong>
                    <span className="text-xs text-ink-600 mt-0.5 block">
                      Type your 13-digit CNIC number, followed by the beneficiary&apos;s 14-to-16-digit bank account number.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-canvas-soft border border-canvas-border/80 p-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-ink-950 text-sm block">Verify Account Title on Screen</strong>
                    <span className="text-xs text-ink-600 mt-0.5 block">
                      The screen will display the recipient&apos;s registered account name. Confirm it matches before inserting cash.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-canvas-soft border border-canvas-border/80 p-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="text-ink-950 text-sm block">Insert Cash &amp; Collect Receipt</strong>
                    <span className="text-xs text-ink-600 mt-0.5 block">
                      Place your flat notes in the motorized slot. The machine counts them, shows the total amount, and prints your receipt.
                    </span>
                  </div>
                </div>
              </div>

              {/* Real App Screenshot Showcase */}
              <div className="rounded-2xl border border-canvas-border bg-canvas-soft p-4 sm:p-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-canvas-border bg-ink-950/5 shadow-sm">
                  <Image
                    src="/images/app-screens/branch-detail.png"
                    alt="ATM Finder Pakistan Branch Detail with CDM and 24/7 Amenities"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center text-xs text-ink-500 mt-3 font-medium">
                  ATM Finder Pakistan: Branch details screen showing 24/7 hours, CDM cash deposit availability, and one-tap directions
                </div>
              </div>
            </section>

            {/* In-Article App Banner */}
            <div className="rounded-3xl border border-brand-200 bg-brand-50/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
                  ATM Finder Pakistan
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-ink-950">
                  Looking for a Working CDM Near You?
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
                className="btn-accent cta-shine flex-shrink-0 px-6 py-3 text-sm font-bold inline-flex items-center gap-2"
              >
                <ArrowDownToLine className="h-4 w-4" />
                <span>Get on Google Play</span>
              </a>
            </div>

            {/* Section 4: Interactive FAQ Accordion */}
            <section className="rounded-3xl border border-canvas-border bg-white p-7 sm:p-9 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink-950 mb-5">
                Frequently Asked Questions
              </h2>
              <InteractiveFaqAccordion items={FAQ_ITEMS} />
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
