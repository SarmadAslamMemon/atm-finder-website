"use client";

import { useState } from "react";
import { PhoneCall, Copy, Check, ShieldAlert } from "lucide-react";

interface Helpline {
  bank: string;
  number: string;
  dialNumber: string;
  notes: string;
}

const HELPLINES: Helpline[] = [
  {
    bank: "HBL (Habib Bank)",
    number: "021-111-111-425",
    dialNumber: "021111111425",
    notes: "24/7 ATM card block & dispute desk",
  },
  {
    bank: "Meezan Bank",
    number: "021-111-331-336",
    dialNumber: "021111331336",
    notes: "Immediate biometric & card block",
  },
  {
    bank: "UBL (United Bank)",
    number: "021-111-825-888",
    dialNumber: "021111825888",
    notes: "24/7 ATM transaction support",
  },
  {
    bank: "MCB Bank",
    number: "021-111-000-622",
    dialNumber: "021111000622",
    notes: "Instant debit card deactivation",
  },
  {
    bank: "Bank Alfalah",
    number: "021-111-225-111",
    dialNumber: "021111225111",
    notes: "24/7 customer service & ATM help",
  },
  {
    bank: "Askari Bank",
    number: "051-111-000-787",
    dialNumber: "051111000787",
    notes: "Emergency card stoppage helpline",
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
            Tap to call directly or copy number to block your card immediately.
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
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm text-ink-950 truncate">{h.bank}</div>
                <div className="text-xs font-mono font-semibold text-brand-600 mt-0.5">
                  {h.number}
                </div>
                <div className="text-[11px] text-ink-400 mt-0.5">{h.notes}</div>
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

                <a
                  href={`tel:${h.dialNumber}`}
                  className="flex items-center gap-1.5 rounded-xl bg-ink-950 px-3 py-2 text-xs font-bold text-white transition hover:bg-brand-600"
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
