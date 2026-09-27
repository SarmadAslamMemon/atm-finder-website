import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FF5733",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://atmfinder.varbox.dev"),
  title: {
    default: "ATM Finder Pakistan | Find Working ATMs & Cash Availability",
    template: "%s | ATM Finder Pakistan",
  },
  description:
    "Never drive to an empty ATM again. Find working cash machines, 24/7 bank lobbies, and biometric ATMs across 20+ Pakistani banks with verified community status.",
  keywords: [
    "ATM Finder Pakistan",
    "ATM near me",
    "ATM with cash Pakistan",
    "nearest ATM Karachi Lahore Islamabad",
    "HBL ATM cash status",
    "Meezan Bank ATM near me",
    "Biometric ATM Pakistan",
    "JazzCash agent locator",
    "Easypaisa cash point",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://atmfinder.varbox.dev",
    siteName: "ATM Finder Pakistan",
    title: "ATM Finder Pakistan | Find Working ATMs & Cash Availability",
    description:
      "Locate working ATMs, verify recent community cash availability, and find 24/7 biometric cash points across 20+ Pakistani banks.",
    images: [
      {
        url: "/images/brand/app_logo.png",
        width: 512,
        height: 512,
        alt: "ATM Finder Pakistan App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATM Finder Pakistan | Find Working ATMs & Cash Availability",
    description:
      "Locate working ATMs and check community cash availability across Pakistan in real-time.",
    images: ["/images/brand/app_logo.png"],
  },
  icons: {
    icon: "/images/brand/app_logo.png",
    apple: "/images/brand/app_logo.png",
  },
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=dev.varbox.atmfinder";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${urdu.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-ink-950 pb-24 sm:pb-0">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <footer className="site-footer mt-2 border-t border-canvas-border bg-white">
          <div className="container-wide py-12 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="space-y-5 lg:col-span-5">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 overflow-hidden rounded-xl bg-ink-950 p-0.5">
                    <Image
                      src="/images/brand/app_logo.png"
                      alt="ATM Finder"
                      width={40}
                      height={40}
                      className="h-full w-full rounded-[9px] object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold leading-none text-ink-950">
                      ATM Finder<span className="text-brand-500">.</span>
                    </div>
                    <div className="mt-1 text-[11px] font-medium text-ink-400">
                      Pakistan cash radar
                    </div>
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ink-500">
                  Independent ATM &amp; cash finder for Pakistan. Locate working
                  machines, check community status, and navigate in one tap.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950">
                    Product
                  </h4>
                  <ul className="space-y-2.5 text-sm text-ink-500">
                    <li>
                      <Link
                        href="/#features"
                        className="transition hover:text-brand-600"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#banks"
                        className="transition hover:text-brand-600"
                      >
                        Supported Banks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#radar"
                        className="transition hover:text-brand-600"
                      >
                        Radar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#faq"
                        className="transition hover:text-brand-600"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950">
                    Legal
                  </h4>
                  <ul className="space-y-2.5 text-sm text-ink-500">
                    <li>
                      <Link
                        href="/privacy"
                        className="transition hover:text-brand-600"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="transition hover:text-brand-600"
                      >
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/delete-account"
                        className="transition hover:text-brand-600"
                      >
                        Delete Account
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 space-y-3 sm:col-span-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-950">
                    Support
                  </h4>
                  <ul className="space-y-2.5 text-sm text-ink-500">
                    <li>
                      <Link
                        href="/support"
                        className="transition hover:text-brand-600"
                      >
                        Help &amp; Support
                      </Link>
                    </li>
                    <li>
                      <a
                        href="mailto:support@varbox.dev"
                        className="transition hover:text-brand-600"
                      >
                        support@varbox.dev
                      </a>
                    </li>
                    <li className="pt-1">
                      <code className="rounded-md bg-canvas-soft px-2 py-1 font-mono text-[10px] text-ink-500">
                        dev.varbox.atmfinder
                      </code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-canvas-border pt-6 text-xs text-ink-400 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 ATM Finder Pakistan. Built by VarBox.</p>
              <p className="max-w-lg leading-relaxed sm:text-right">
                Independent directory — not affiliated with banks, 1LINK, SBP,
                or Google. Trademarks belong to their owners.
              </p>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-3 left-3 right-3 z-40 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/95 px-4 py-3 shadow-lift backdrop-blur-md sm:hidden">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-ink-900">
              <Image
                src="/images/brand/app_logo.png"
                alt="ATM Finder"
                width={36}
                height={36}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">ATM Finder PK</div>
              <div className="text-[10px] font-medium text-cash-500">
                Free on Google Play
              </div>
            </div>
          </div>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent cta-shine px-4 py-2 text-xs shadow-none"
          >
            <span>Download</span>
          </a>
        </div>
      </body>
    </html>
  );
}
