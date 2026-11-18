"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Copy, Check } from "lucide-react";

interface Helpline {
  bank: string;
  number: string;
  dialNumber: string;
  notes: string;
  logo: string;
}

const HELPLINES: Helpline[] = [
  {
    bank: "HBL (Habib Bank)",
    number: "021-111-111-425",
    dialNumber: "021111111425",
    notes: "24/7 ATM card block & dispute desk",
    logo: "/images/banks/bank_hbl.jpg",
  },
  {
    bank: "Meezan Bank",
    number: "021-111-331-336",
    dialNumber: "021111331336",
    notes: "Immediate biometric & card block",
    logo: "/images/banks/bank_meezan.jpg",
  },
  {
    bank: "UBL (United Bank)",
    number: "021-111-825-888",
    dialNumber: "021111825888",
    notes: "24/7 ATM transaction support",
    logo: "/images/banks/bank_ubl.jpg",
  },
  {
    bank: "MCB Bank",
    number: "021-111-000-622",
    dialNumber: "021111000622",
    notes: "Instant debit card deactivation",
    logo: "/images/banks/bank_mcb.jpg",
  },
  {
    bank: "Bank Alfalah",
    number: "021-111-225-111",
    dialNumber: "021111225111",
    notes: "24/7 customer service & ATM help",
    logo: "/images/banks/bank_alfalah.jpg",
  },
  {
    bank: "Askari Bank",
    number: "051-111-000-787",
    dialNumber: "051111000787",
    notes: "Emergency card stoppage helpline",
    logo: "/images/banks/bank_askari.jpg",
  },
];

export default function InteractiveHelplineList() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => {
      setCopiedNumber(null);
    }, 2000);
  };

  return (
    <div className="rounded-3xl border border-canvas-border bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-ink-950">
            Emergency Bank Helplines (24/7 ATM Dispute)
          </h3>
          <p className="text-xs sm:text-sm text-ink-500 mt-1">
            Tap the call button directly or copy the number to block your card immediately.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {HELPLINES.map((h) => {
          const isCopied = copiedNumber === h.number;
          return (
            <div
              key={h.bank}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-canvas-border bg-canvas-soft/80 p-4 transition hover:border-brand-300 hover:bg-white hover:shadow-xs"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-canvas-border bg-white shadow-2xs">
                  <Image
                    src={h.logo}
                    alt={h.bank}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm text-ink-950 truncate">{h.bank}</div>
                  {/* Clean human font — NOT vibe/terminal monospace */}
                  <div className="font-sans text-[15px] font-extrabold text-ink-900 tracking-normal mt-0.5">
                    {h.number}
                  </div>
                  <div className="text-[11px] text-ink-500 mt-0.5 truncate">{h.notes}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(h.number)}
                  title="Copy helpline number"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-canvas-border bg-white text-ink-600 transition hover:border-brand-400 hover:text-brand-600 focus:outline-none"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-cash-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>

                {/* Brand CTA color — NOT plain black */}
                <a
                  href={`tel:${h.dialNumber}`}
                  className="flex items-center gap-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
