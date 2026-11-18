import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ArrowDownToLine, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Bank ATM & Cash Guides Pakistan | ATM Finder",
  description:
    "Practical guides on finding working Bank ATMs near you open now, Cash Deposit Machines (CDMs), 24/7 bank lobbies, and avoiding 1-Link inter-bank charges in Pakistan.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Bank ATM & Cash Guides Pakistan | ATM Finder",
    description:
      "Practical guides on finding working Bank ATMs near you open now, Cash Deposit Machines (CDMs), and 24/7 bank lobbies across Pakistan.",
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
    author: "ATM Finder Research Desk",
    category: "Cash & ATM Access",
  },
  {
    slug: "cash-deposit-machine-cdm-near-me-pakistan",
    title: "Cash Deposit Machines (CDM) in Pakistan: How to Deposit Cash 24/7 Without Bank Lines",
    description:
      "Skip long branch teller lines. Discover which banks offer Cash Deposit Machines (CDMs), how cardless deposit works using your CNIC, and how to locate one near you.",
    date: "November 2026",
    readingTime: "6 min read",
    author: "ATM Finder Research Desk",
    category: "Self-Service Banking",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-canvas-soft/40">
      {/* Editorial Header */}
      <section className="border-b border-canvas-border bg-white py-14 sm:py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
              <BookOpen className="h-4 w-4" />
              <span>Guides &amp; Field Reports</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              ATM &amp; Cash Insights for Pakistan
            </h1>
            <p className="mt-4 text-base text-ink-500 sm:text-lg leading-relaxed">
              Field-tested guides to finding working Bank ATMs near you open now, locating 24/7 Cash
              Deposit Machines (CDMs), and navigating bank services without wasted trips.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 sm:py-16">
        <div className="container-wide max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-3xl border border-canvas-border bg-white p-7 sm:p-9 shadow-xs transition hover:border-brand-300 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-ink-400 mb-4">
                    <span className="font-semibold text-brand-600">{post.category}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-ink-950 transition group-hover:text-brand-600 sm:text-2xl leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3.5 text-sm text-ink-500 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-canvas-border flex items-center justify-between">
                  <div className="text-xs text-ink-400">
                    <span className="font-medium text-ink-700">{post.author}</span> • {post.date}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 transition group-hover:translate-x-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Download App Banner */}
          <div className="mt-14 rounded-3xl border border-ink-950 bg-ink-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-2">
                Pakistan&apos;s Independent Cash Radar
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Locate working Bank ATMs in real-time
              </h3>
              <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                Check recent community-reported cash status, filter by HBL, Meezan, UBL, MCB, and 20+
                banks, and get turn-by-turn directions directly on your phone.
              </p>
              <div className="mt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=dev.varbox.atmfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent cta-shine inline-flex items-center gap-2 px-6 py-3 text-sm font-bold"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  <span>Get on Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
