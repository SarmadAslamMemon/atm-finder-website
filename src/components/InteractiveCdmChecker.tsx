"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, XCircle, Building2, Banknote } from "lucide-react";

interface BankCdmInfo {
  name: string;
  logo: string;
  cardless: boolean;
  dailyLimit: string;
  notesPerInsert: string;
  fees: string;
  notes: string;
}

const BANKS: BankCdmInfo[] = [
  {
    name: "Meezan Bank",
    logo: "/images/banks/bank_meezan.jpg",
    cardless: true,
    dailyLimit: "Rs. 250,000 / day",
    notesPerInsert: "Up to 100 notes per drop",
    fees: "Free (Instant Credit)",
    notes: "Largest Islamic CDM network in Pakistan. Requires valid CNIC for cardless deposits.",
  },
  {
    name: "HBL (Habib Bank)",
    logo: "/images/banks/bank_hbl.jpg",
    cardless: true,
    dailyLimit: "Rs. 200,000 / day",
    notesPerInsert: "Up to 200 notes per drop",
    fees: "Free for HBL accounts",
    notes: "Available in major commercial hub branches. Real-time Konnect wallet funding.",
  },
  {
    name: "Bank Alfalah",
    logo: "/images/banks/bank_alfalah.jpg",
    cardless: true,
    dailyLimit: "Rs. 200,000 / day",
    notesPerInsert: "Up to 100 notes per drop",
    fees: "Free",
    notes: "Accepts utility bill deposits, credit card payments, and account deposits.",
  },
  {
    name: "UBL (United Bank)",
    logo: "/images/banks/bank_ubl.jpg",
    cardless: true,
    dailyLimit: "Rs. 250,000 / day",
    notesPerInsert: "Up to 100 notes per drop",
    fees: "Free",
    notes: "Supports Omni and direct UBL account deposits in key city centers.",
  },
];

const NOTES = [
  { val: "Rs. 5,000", accepted: true, status: "Accepted", reason: "Standard high-value deposit note" },
  { val: "Rs. 1,000", accepted: true, status: "Accepted", reason: "Standard deposit note" },
  { val: "Rs. 500", accepted: true, status: "Accepted", reason: "Standard deposit note" },
  { val: "Rs. 100", accepted: false, status: "Rejected", reason: "Too small; causes cassette jams in CDMs" },
  { val: "Rs. 50", accepted: false, status: "Rejected", reason: "Not accepted by Pakistani CDMs" },
  { val: "Rs. 20", accepted: false, status: "Rejected", reason: "Not accepted by Pakistani CDMs" },
  { val: "Rs. 10", accepted: false, status: "Rejected", reason: "Not accepted by Pakistani CDMs" },
];

export default function InteractiveCdmChecker() {
  const [selectedBankIndex, setSelectedBankIndex] = useState<number>(0);
  const selectedBank = BANKS[selectedBankIndex];

  return (
    <div className="space-y-6">
      {/* Bank Selector Card */}
      <div className="rounded-3xl border border-canvas-border bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
          <Building2 className="h-4 w-4" />
          <span>Compare Pakistani Bank CDMs</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-ink-950 tracking-tight">
          Select Your Bank to Check CDM Rules &amp; Limits
        </h3>

        {/* Bank Tabs with Real Logos */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {BANKS.map((bank, idx) => {
            const isSelected = selectedBankIndex === idx;
            return (
              <button
                key={bank.name}
                type="button"
                onClick={() => setSelectedBankIndex(idx)}
                className={`flex items-center gap-2.5 rounded-2xl p-2.5 sm:p-3 text-left transition focus:outline-none ${
                  isSelected
                    ? "border-2 border-brand-500 bg-brand-50/50 shadow-xs"
                    : "border border-canvas-border bg-canvas-soft/80 hover:bg-white hover:border-brand-200"
                }`}
              >
                <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-canvas-border bg-white">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span
                  className={`text-xs sm:text-sm font-bold truncate ${
                    isSelected ? "text-brand-600" : "text-ink-800"
                  }`}
                >
                  {bank.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Bank Details Panel */}
        <div className="mt-5 rounded-2xl border border-canvas-border bg-canvas-soft/80 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-canvas-border pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-canvas-border bg-white shadow-xs">
                <Image
                  src={selectedBank.logo}
                  alt={selectedBank.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-ink-950">
                  {selectedBank.name} Cash Deposit Machine
                </div>
                <div className="text-xs text-ink-500 mt-0.5">{selectedBank.notes}</div>
              </div>
            </div>

            <span className="rounded-full bg-cash-50 border border-cash-200 px-3 py-1 text-xs font-bold text-cash-700">
              Cardless Deposit: Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
            <div className="rounded-xl bg-white border border-canvas-border p-3.5 shadow-2xs">
              <span className="text-ink-400 block font-medium">Daily Deposit Limit</span>
              <strong className="text-sm font-extrabold text-ink-950 mt-0.5 block">
                {selectedBank.dailyLimit}
              </strong>
            </div>

            <div className="rounded-xl bg-white border border-canvas-border p-3.5 shadow-2xs">
              <span className="text-ink-400 block font-medium">Notes Per Single Drop</span>
              <strong className="text-sm font-extrabold text-ink-950 mt-0.5 block">
                {selectedBank.notesPerInsert}
              </strong>
            </div>

            <div className="rounded-xl bg-white border border-canvas-border p-3.5 shadow-2xs">
              <span className="text-ink-400 block font-medium">Deposit Fee</span>
              <strong className="text-sm font-extrabold text-cash-600 mt-0.5 block">
                {selectedBank.fees}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Note Denomination Checker */}
      <div className="rounded-3xl border border-canvas-border bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cash-600 mb-2">
          <Banknote className="h-4 w-4" />
          <span>Interactive Currency Validator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-ink-950 tracking-tight">
          Which Currency Notes Are Accepted by CDMs in Pakistan?
        </h3>
        <p className="mt-1 text-sm text-ink-500">
          Pakistani CDMs strictly filter notes using optical sensors. See which denominations work:
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {NOTES.map((n) => (
            <div
              key={n.val}
              className={`flex items-start justify-between gap-3 rounded-2xl border p-4 transition ${
                n.accepted
                  ? "border-cash-200 bg-cash-50/40 text-ink-900"
                  : "border-red-200 bg-red-50/40 text-ink-900"
              }`}
            >
              <div>
                <div className="text-base font-extrabold">{n.val}</div>
                <div className="text-xs text-ink-500 mt-0.5 leading-snug">{n.reason}</div>
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                  n.accepted ? "bg-cash-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {n.accepted ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Accepted</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-3.5 w-3.5" />
                    <span>Rejected</span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
