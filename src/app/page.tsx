"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Banknote,
  ShieldCheck,
  Navigation,
  Clock,
  Fingerprint,
  ChevronDown,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=dev.varbox.atmfinder";

const BANK_LIST = [
  { name: "HBL", fullName: "Habib Bank Limited", logo: "/images/banks/bank_hbl.jpg" },
  { name: "Meezan Bank", fullName: "Meezan Bank", logo: "/images/banks/bank_meezan.jpg" },
  { name: "UBL", fullName: "United Bank Limited", logo: "/images/banks/bank_ubl.jpg" },
  { name: "MCB", fullName: "MCB Bank Limited", logo: "/images/banks/bank_mcb.jpg" },
  { name: "Bank Alfalah", fullName: "Bank Alfalah", logo: "/images/banks/bank_alfalah.jpg" },
  { name: "Allied Bank", fullName: "Allied Bank Limited", logo: "/images/banks/bank_allied.jpg" },
  { name: "Askari Bank", fullName: "Askari Bank", logo: "/images/banks/bank_askari.jpg" },
  { name: "Faysal Bank", fullName: "Faysal Bank", logo: "/images/banks/bank_faisal.jpg" },
  { name: "Bank of Punjab", fullName: "The Bank of Punjab (BOP)", logo: "/images/banks/bank_bop.jpg" },
  { name: "National Bank", fullName: "National Bank of Pakistan (NBP)", logo: "/images/banks/bank_nbp.jpg" },
  { name: "Bank AL Habib", fullName: "Bank AL Habib", logo: "/images/banks/bank_alhabib.jpg" },
  { name: "JS Bank", fullName: "JS Bank Limited", logo: "/images/banks/bank_js.jpg" },
  { name: "Habib Metro", fullName: "Habib Metropolitan Bank", logo: "/images/banks/bank_habibmetro.jpg" },
  { name: "Sindh Bank", fullName: "Sindh Bank", logo: "/images/banks/bank_sindhbank.jpg" },
  { name: "Soneri Bank", fullName: "Soneri Bank", logo: "/images/banks/bank_soneri.png" },
  { name: "Easypaisa", fullName: "Easypaisa Cash Points", logo: "/images/banks/bank_easypaisa.jpg" },
  { name: "JazzCash", fullName: "JazzCash Agent Points", logo: "/images/banks/bank_jazzcash.webp" },
  { name: "Dubai Islamic", fullName: "Dubai Islamic Bank (DIB)", logo: "/images/banks/bank_dib.png" },
  { name: "Al Baraka", fullName: "Al Baraka Bank", logo: "/images/banks/bank_albaraka.jpg" },
  { name: "Bank of Khyber", fullName: "The Bank of Khyber (BOK)", logo: "/images/banks/bank_bok.png" },
  { name: "ZTBL", fullName: "Zarai Taraqiati Bank Limited", logo: "/images/banks/bank_ztbl.png" },
  { name: "FWBL", fullName: "First Women Bank", logo: "/images/banks/bank_fwbl.jpg" },
];

const FEATURES = [
  {
    title: "Nearby ATMs",
    description:
      "Map every branch and cash point around you in seconds. Filter by your bank and skip unnecessary 1LINK fees.",
    icon: MapPin,
    tone: "bg-pastel-sand",
  },
  {
    title: "Cash Status",
    description:
      "See which machines still have cash with community-verified badges — before you burn fuel on an empty trip.",
    icon: Banknote,
    tone: "bg-pastel-mist",
  },
  {
    title: "Trusted Reports",
    description:
      "One-tap updates from people on the ground. Fresh timestamps you can trust, not stale map pins.",
    icon: ShieldCheck,
    tone: "bg-pastel-peach",
  },
];

const FAQ_ITEMS = [
  {
    q: "How does ATM Finder know if an ATM has cash?",
    a: "Crowdsourced community reporting. After a withdrawal, users submit a quick update. Every status includes a fresh timestamp so you know how recent the data is.",
  },
  {
    q: "Is ATM Finder affiliated with any bank or 1LINK?",
    a: "No. ATM Finder Pakistan is an independent utility. We are not owned, operated, or endorsed by 1LINK, the State Bank of Pakistan, or any commercial bank.",
  },
  {
    q: "Is the app completely free?",
    a: "Yes. Free to download on Google Play with no paid tiers or hidden fees.",
  },
  {
    q: "Does the app need GPS access?",
    a: "Yes — only to show ATMs near you and calculate distance. Location is never sold or used for profiling.",
  },
  {
    q: "Can I use the app in Urdu?",
    a: "Yes. Full bilingual support — switch between English and Urdu anytime in Profile.",
  },
  {
    q: "Which banks are supported?",
    a: "23+ networks including HBL, Meezan, UBL, MCB, Alfalah, Allied, JazzCash, Easypaisa, and more.",
  },
];

function PlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.613V3.387c0-.6.23-1.168.609-1.573z"
        fill="#00E676"
      />
      <path
        d="M17.186 8.609L13.793 12l3.393 3.391 3.826-2.186c1.095-.626 1.095-1.644 0-2.27L17.186 8.61z"
        fill="#FFD600"
      />
      <path
        d="M3.609 1.814c.394-.42 1-.58 1.636-.217l11.94 6.822-3.392 3.391-10.184-10z"
        fill="#00B0FF"
      />
      <path
        d="M13.793 12l3.393 3.391-11.94 6.822c-.637.364-1.242.203-1.637-.217L13.793 12z"
        fill="#FF3D00"
      />
    </svg>
  );
}

function PhoneMock({
  src,
  alt,
  className = "",
  size = "md",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md";
  priority?: boolean;
}) {
  return (
    <div
      className={`screen-shot ${size === "sm" ? "screen-shot-sm" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={2340}
        sizes="(max-width: 768px) 220px, 260px"
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

/** 3D animated orbital map of bank coverage */
function CoverageOrbit({ banks }: { banks: typeof BANK_LIST }) {
  const rings = [
    {
      size: "36%",
      duration: "52s",
      reverse: false,
      items: banks.slice(0, 4),
    },
    {
      size: "52%",
      duration: "68s",
      reverse: true,
      items: banks.slice(4, 9),
    },
    {
      size: "68%",
      duration: "84s",
      reverse: false,
      items: banks.slice(9, 15),
    },
    {
      size: "84%",
      duration: "100s",
      reverse: true,
      items: banks.slice(15),
    },
  ];

  return (
    <div
      className="coverage-orbit"
      aria-label="Banks and wallets covered by ATM Finder"
    >
      <div className="coverage-stage">
        <div className="coverage-glow" aria-hidden />

        {rings.map((ring) => (
          <div
            key={`ring-${ring.size}`}
            className="coverage-ring"
            style={{ "--size": ring.size } as React.CSSProperties}
            aria-hidden
          />
        ))}

        {rings.map((ring) => (
          <div
            key={`spin-${ring.size}`}
            className={`coverage-ring-spin ${ring.reverse ? "reverse" : ""}`}
            style={
              {
                "--size": ring.size,
                "--duration": ring.duration,
              } as React.CSSProperties
            }
          >
            {ring.items.map((bank, i) => {
              const angle = (360 / ring.items.length) * i;
              return (
                <div
                  key={bank.name}
                  className="coverage-node"
                  style={
                    {
                      "--angle": `${angle}deg`,
                      "--duration": ring.duration,
                    } as React.CSSProperties
                  }
                >
                  <div className="coverage-badge" title={bank.fullName}>
                    <Image
                      src={bank.logo}
                      alt={bank.name}
                      width={56}
                      height={56}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="coverage-hub">
        <Image
          src="/images/brand/app_logo.png"
          alt="ATM Finder"
          width={56}
          height={56}
          className="h-11 w-11 rounded-[12px] object-cover sm:h-12 sm:w-12 sm:rounded-[14px]"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "ur">("en");
  const [previewRadius, setPreviewRadius] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* ── Hero: dark warm → coral (~62vh), orange logo readable, wave rises L→R ── */}
      <section className="hero-banner">
        {/* Optional photo: place file at public/images/brand/hero-bg.jpg */}
        <div className="hero-banner-media" aria-hidden />
        <div className="hero-banner-shade" aria-hidden />

        <div className="container-wide relative z-10 grid items-end gap-6 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-2 lg:pb-24 lg:pt-32">
          <div className="reveal max-w-xl space-y-6 pb-4 text-white lg:pb-8">
            <h1 className="text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.25rem]">
              Find working ATMs before you drive.
            </h1>

            <p className="max-w-md text-[15px] leading-relaxed text-white/80 sm:text-base">
              Locate cash machines across 23+ Pakistani banks, check recent
              community status, and navigate in one tap — free on Android.
            </p>

            <div className="hero-cta-pill">
              <span className="min-w-0 flex-1 truncate text-sm text-ink-500">
                Free on Google Play · Android 7.0+
              </span>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-[2]">Get the App</span>
              </a>
            </div>

            <a
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              Explore features
              <span aria-hidden className="text-white/60">
                →
              </span>
            </a>
          </div>

          <div className="reveal reveal-delay-2 relative z-20 mx-auto mb-6 flex w-full max-w-[190px] justify-center sm:mb-8 sm:max-w-[210px] lg:mb-4 lg:max-w-[240px] lg:translate-y-2">
            <div className="w-full animate-float">
              <PhoneMock
                src="/images/app-screens/dashboard.png"
                alt="ATM Finder dashboard"
                priority
              />
            </div>
          </div>
        </div>

        {/* Wave ascends left → top-right (white rises on the right) */}
        <div className="hero-wave" aria-hidden>
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,118 C180,130 360,140 540,110 C780,70 960,28 1170,18 C1290,12 1380,22 1440,28 L1440,160 L0,160 Z"
            />
          </svg>
        </div>
      </section>

      {/* ── Honest trust strip ── */}
      <section className="container-wide py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-8 border-y border-canvas-border py-8 sm:grid-cols-4 sm:gap-4 sm:py-10">
          {[
            { value: "23+", label: "Banks & wallets" },
            { value: "50+", label: "Cities covered" },
            { value: "Community", label: "Cash status reports" },
            { value: "Free", label: "On Google Play" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="container-wide pb-16 sm:pb-20">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
          <h2 className="display-title">
            Find cash without the{" "}
            <span className="text-brand-500">guesswork.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            Nearby machines, community cash status, and trusted reports — before
            you leave home.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`${feature.tone} flex flex-col rounded-[1.85rem] p-7 sm:p-8`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
                  <Icon className="h-5 w-5 text-ink-950" strokeWidth={2.25} />
                </div>
                <h3 className="mb-2 text-lg font-extrabold tracking-tight text-ink-950">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-700">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Cash radar details ── */}
      <section
        id="radar"
        className="border-t border-canvas-border bg-white py-16 sm:py-20"
      >
        <div className="container-wide max-w-3xl">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className="section-label mb-2">Cash intelligence</p>
            <h2 className="display-title">
              Check the machine before you drive.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
              Lobby hours, biometric support, and how recently cash was
              confirmed — details maps never show.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Navigation,
                title: "1-tap Maps",
                body: "Open navigation with exact coordinates.",
              },
              {
                icon: Clock,
                title: "24/7 lobby status",
                body: "Know if it stays open past closing time.",
              },
              {
                icon: Fingerprint,
                title: "Biometric ATMs",
                body: "Find thumb-scan cashouts without your card.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="rounded-2xl border border-canvas-border bg-canvas-soft/50 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
                    <Icon className="h-4 w-4 text-ink-950" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-sm font-bold text-ink-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── All-in-one fan showcase (3 phones) ── */}
      <section className="fan-showcase pt-14 sm:pt-16">
        <div className="container-wide relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="display-title text-ink-950">
            All-in-one cash finder for Pakistan
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-500 sm:text-base">
            Track nearby ATMs, check community cash status, and navigate in one
            tap.
          </p>
        </div>

        <div className="relative mt-6 sm:mt-8">
          <div className="fan-arc" aria-hidden />

          <div className="fan-phones">
            <div className="fan-phone fan-phone-left">
              <PhoneMock
                src="/images/app-screens/mapscreen-single-branch.png"
                alt="Map with ATM pin"
                size="sm"
              />
            </div>
            <div className="fan-phone fan-phone-center">
              <PhoneMock
                src="/images/app-screens/dashboard.png"
                alt="ATM Finder dashboard"
              />
            </div>
            <div className="fan-phone fan-phone-right">
              <PhoneMock
                src="/images/app-screens/branch-detail.png"
                alt="Branch cash status"
                size="sm"
              />
            </div>
          </div>

          <div className="fan-bar">
            {[
              "Nearby ATMs",
              "Cash Status",
              "1-tap Maps",
              "Urdu Mode",
              "23+ Banks",
            ].map((label, i, arr) => (
              <React.Fragment key={label}>
                <span>{label}</span>
                {i < arr.length - 1 && <span className="dot" aria-hidden />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage orbital ── */}
      <section
        id="banks"
        className="coverage-section overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-14"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label mb-2">Supported networks</p>
            <h2 className="display-title">
              Banks &amp; wallets with ATM Finder
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-500 sm:text-base">
              One independent radar across 23+ Pakistani banks and branchless
              cash networks.
            </p>
          </div>

          <CoverageOrbit banks={BANK_LIST} />

          <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-ink-400">
            Bank trademarks and logos belong to their respective institutions.
            Listing does not imply partnership or endorsement.
          </p>
        </div>
      </section>

      {/* ── Search cities ── */}
      <section className="border-t border-canvas-border bg-white py-16 sm:py-20">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <p className="section-label mb-2">Instant lookup</p>
          <h2 className="display-title">
            Search by bank, area, or branch road.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-500 sm:text-base">
            DHA Phase 5, Blue Area, Gulberg — instant suggestions with live
            distance, wherever you are in Pakistan.
          </p>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-ink-500">
            Available across{" "}
            {[
              "Karachi",
              "Lahore",
              "Islamabad",
              "Rawalpindi",
              "Faisalabad",
              "Multan",
              "Peshawar",
              "Quetta",
            ].join(" · ")}
            , and more.
          </p>
        </div>
      </section>

      {/* ── Language ── */}
      <section id="urdu" className="bg-canvas-soft py-16 sm:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <p className="section-label">Pakistan-first</p>
            <h2 className="display-title">
              {selectedLanguage === "en" ? (
                <>
                  Designed in Pakistan,{" "}
                  <span className="text-brand-500">for Pakistan.</span>
                </>
              ) : (
                <span className="font-urdu leading-relaxed">
                  پاکستان کے عوام کے لیے، اردو زبان میں۔
                </span>
              )}
            </h2>
            <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
              {selectedLanguage === "en" ? (
                "Switch between English and Urdu. Set your search radius from 1–20 km to save battery and data."
              ) : (
                <span className="font-urdu text-lg leading-loose text-ink-700">
                  قریبی اے ٹی ایم اور کیش کی دستیابی باآسانی معلوم کریں۔ ایک کلک
                  سے اردو منتخب کریں۔
                </span>
              )}
            </p>

            <div className="mx-auto max-w-sm space-y-4 rounded-2xl border border-canvas-border bg-white p-5 text-left shadow-soft">
              <div className="text-xs font-bold uppercase tracking-wider text-ink-500">
                Language preview
              </div>
              <div className="inline-flex rounded-full border border-canvas-border bg-canvas-soft p-1">
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("en")}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                    selectedLanguage === "en"
                      ? "bg-ink-950 text-white"
                      : "text-ink-500 hover:text-ink-950"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("ur")}
                  className={`rounded-full px-5 py-2 text-xs font-bold font-urdu transition ${
                    selectedLanguage === "ur"
                      ? "bg-ink-950 text-white"
                      : "text-ink-500 hover:text-ink-950"
                  }`}
                >
                  اردو
                </button>
              </div>

              <div className="pt-1">
                <div className="mb-3 flex items-center justify-between text-xs font-bold text-ink-700">
                  <span>Search radius</span>
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 font-mono text-brand-700">
                    {previewRadius} km
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={previewRadius}
                  onChange={(e) => setPreviewRadius(Number(e.target.value))}
                  className="range-accent w-full"
                  aria-label="Search radius in kilometers"
                />
                <div className="mt-2 flex justify-between text-[11px] font-medium text-ink-400">
                  <span>1 km</span>
                  <span>10 km</span>
                  <span>20 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <div className="mb-8 text-center">
            <p className="section-label mb-2">Transparency</p>
            <h2 className="display-title">Frequently asked questions</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const open = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-canvas-border bg-white transition hover:border-ink-900/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-ink-950 transition hover:text-brand-600 sm:text-base"
                    aria-expanded={open}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="border-t border-canvas-border px-5 pb-5 pt-3 text-sm leading-relaxed text-ink-500">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="container-wide pb-10 sm:pb-12">
        <div className="final-cta relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <div className="final-cta-glow final-cta-glow-a" aria-hidden />
          <div className="final-cta-glow final-cta-glow-b" aria-hidden />
          <div className="final-cta-grid" aria-hidden />

          <div className="relative z-10 grid items-center gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-14 lg:py-10">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                Free on Google Play
              </p>
              <h2 className="text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.55rem]">
                Stop driving to empty machines.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                Download ATM Finder Pakistan and find working cash points before
                you leave — no account required, free forever.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light cta-shine px-7 py-3.5 text-sm shadow-xl shadow-ink-950/20"
                >
                  <PlayIcon className="h-5 w-5" />
                  <span>Download on Google Play</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {[
                  "Android 7.0+",
                  "Under 15 MB",
                  "No account needed",
                  "23+ banks",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="final-cta-phones" aria-hidden>
              <div className="final-cta-phone final-cta-phone-back">
                <PhoneMock
                  src="/images/app-screens/mapscreen-single-branch.png"
                  alt=""
                  size="sm"
                />
              </div>
              <div className="final-cta-phone final-cta-phone-front">
                <PhoneMock
                  src="/images/app-screens/dashboard.png"
                  alt=""
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
