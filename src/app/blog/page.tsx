import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Sparkles, ShieldCheck, ArrowDownToLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Bank ATM & Cash Guides Pakistan | ATM Finder Blog",
  description:
    "Expert guides on finding working Bank ATMs near you open now, Cash Deposit Machines (CDMs), 24/7 bank lobbies, and avoiding 1-Link inter-bank fees in Pakistan.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Bank ATM & Cash Guides Pakistan | ATM Finder Blog",
    description:
      "Expert guides on finding working Bank ATMs near you open now, Cash Deposit Machines (CDMs), and 24/7 bank lobbies across Pakistan.",
    url: "https://atmfinder.varbox.dev/blog",
  },
};

const POSTS = [
  {
    slug: "working-bank-atm-near-me-open-now-pakistan",
    title: "How to Find Working Bank ATMs Near You Open Now in Pakistan (Real-Time Cash Guide)",
    description:
      "Never drive to an empty or out-of-service ATM again. Learn how to verify cash availability, locate 24/7 bank lobbies, and avoid 1-Link fees across HBL, Meezan, UBL, and MCB.",
    date: "November 2026",
    readingTime: "5 min read",
    tag: "ATM Guide",
    highlights: ["Verified Cash Status", "24/7 Bank Lobbies", "Avoid 1-Link Charges"],
  },
  {
    slug: "cash-deposit-machine-cdm-near-me-pakistan",
    title: "Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7 Without Bank Lines",
    description:
      "Skip long branch teller lines. Discover which banks offer Cash Deposit Machines (CDMs), how cardless deposit works using your CNIC, and how to locate one near you.",
    date: "November 2026",
    readingTime: "6 min read",
    tag: "CDM & Banking",
    highlights: ["Meezan & HBL CDMs", "Cardless Deposit Steps", "Zero Branch Line"],
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-canvas-soft/60">
      {/* Hero Header */}
      <section className="border-b border-canvas-border bg-white py-14 sm:py-20">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Pakistan Banking &amp; ATM Guides</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              ATM &amp; Cash Insights for Pakistan
            </h1>
            <p className="mt-4 text-base text-ink-500 sm:text-lg leading-relaxed">
              Actionable guides on finding operational Bank ATMs near you open now, locating 24/7
              Cash Deposit Machines (CDMs), and navigating bank services without wasted trips.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-3xl border border-canvas-border bg-white p-7 shadow-sm transition hover:border-brand-300 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-ink-400 mb-3">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-600">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-ink-950 transition group-hover:text-brand-600 sm:text-2xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 rounded-md bg-canvas-soft px-2 py-0.5 text-xs font-medium text-ink-700"
                      >
                        <ShieldCheck className="h-3 w-3 text-cash-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-canvas-border/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-ink-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 transition group-hover:translate-x-0.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Download App CTA Banner */}
          <div className="mt-14 rounded-3xl border border-ink-900 bg-ink-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="relative z-10 max-w-xl">
              <span className="inline-block rounded-full bg-brand-500/20 px-3 py-1 text-xs font-bold text-brand-400 mb-3">
                Free Android App
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Find working Bank ATMs in real-time across Pakistan
              </h3>
              <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                Check recent community-reported cash status, filter by HBL, Meezan, UBL, MCB, and 20+
                banks, and get turn-by-turn directions directly on your phone.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=dev.varbox.atmfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent cta-shine inline-flex items-center gap-2 px-6 py-3 text-sm font-bold"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  <span>Download on Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
