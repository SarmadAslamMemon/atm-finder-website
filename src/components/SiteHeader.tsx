"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=dev.varbox.atmfinder";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#banks", label: "Banks" },
  { href: "/#radar", label: "Radar" },
  { href: "/#urdu", label: "Language" },
  { href: "/#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const onHero = pathname === "/";

  return (
    <header
      className={
        onHero
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-canvas-border/70 bg-white/90 backdrop-blur-xl"
      }
    >
      <div className="container-wide relative flex h-[4.75rem] items-center justify-between">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {/* Logo keeps its orange — readable on dark warm hero */}
          <div className="relative h-10 w-10 overflow-hidden rounded-[12px] shadow-soft">
            <Image
              src="/images/brand/app_logo.png"
              alt="ATM Finder"
              width={40}
              height={40}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className={`text-[17px] font-extrabold tracking-tight ${
              onHero ? "text-white" : "text-ink-950"
            }`}
          >
            ATM Finder
            <span className={onHero ? "text-white/90" : "text-brand-500"}>.</span>
          </span>
        </Link>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[13px] font-medium md:flex ${
            onHero ? "text-white/85" : "text-ink-500"
          }`}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                onHero
                  ? "transition-colors hover:text-white"
                  : "transition-colors hover:text-ink-950"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={
            onHero
              ? "btn-light cta-shine relative z-10"
              : "btn-primary cta-shine relative z-10 px-4 py-2.5 text-xs sm:px-5 sm:text-sm"
          }
        >
          <span>Download Now</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white">
            ↓
          </span>
        </a>
      </div>
    </header>
  );
}
