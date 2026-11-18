"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ShieldAlert, Sparkles, TrendingDown } from "lucide-react";

export default function InteractiveFeeCalculator() {
  const [withdrawals, setWithdrawals] = useState<number>(4);
  const feePerTransaction = 23.44;

  const monthlyCost = Math.round(withdrawals * feePerTransaction);
  const yearlyCost = Math.round(monthlyCost * 12);

  return (
    <div className="rounded-3xl border border-brand-200/80 bg-gradient-to-br from-brand-50/70 via-white to-canvas-soft p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
        <Calculator className="h-4 w-4" />
        <span>Interactive 1-Link Fee Calculator</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink-950 tracking-tight">
        Calculate Your Annual 1-Link Fee Loss
      </h3>
      <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">
        State Bank of Pakistan (SBP) sets the off-us inter-bank ATM withdrawal fee at{" "}
        <strong className="text-ink-950">Rs. 23.44</strong> per transaction. See what you lose by
        using other banks&apos; machines.
      </p>

      {/* Slider Control */}
      <div className="mt-6 rounded-2xl bg-white border border-canvas-border p-5 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <label htmlFor="withdrawal-slider" className="text-sm font-bold text-ink-900">
            Off-us ATM withdrawals per month:
          </label>
          <span className="flex items-center justify-center rounded-xl bg-brand-500 px-3.5 py-1 text-base font-extrabold text-white shadow-xs">
            {withdrawals} {withdrawals === 1 ? "time" : "times"}
          </span>
        </div>

        <input
          id="withdrawal-slider"
          type="range"
          min="1"
          max="20"
          value={withdrawals}
          onChange={(e) => setWithdrawals(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-canvas-muted accent-brand-500 focus:outline-none"
        />

        <div className="flex justify-between text-[11px] font-medium text-ink-400 mt-2">
          <span>1 time / mo</span>
          <span>10 times / mo</span>
          <span>20 times / mo</span>
        </div>
      </div>

      {/* Calculation Display */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-canvas-border bg-white p-5">
          <span className="text-xs font-semibold text-ink-400 uppercase tracking-wider">
            Monthly Fee Deducted
          </span>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-ink-950">
            Rs. {monthlyCost.toLocaleString()}
          </div>
          <span className="text-[11px] text-ink-400">({withdrawals} × Rs. 23.44)</span>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50/60 p-5">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-wider flex items-center gap-1">
            <TrendingDown className="h-3.5 w-3.5" />
            Annual Money Wasted
          </span>
          <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-red-600">
            Rs. {yearlyCost.toLocaleString()}
          </div>
          <span className="text-[11px] text-red-500 font-medium">Lost to inter-bank charges</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-brand-200/60 text-xs text-ink-600">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cash-500 animate-pulse" />
          <span>
            <strong>Zero Fee Solution:</strong> Filter for your own bank on ATM Finder to save{" "}
            <strong>Rs. {yearlyCost.toLocaleString()}</strong> every year.
          </span>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=dev.varbox.atmfinder"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-brand-600 hover:text-brand-700 underline flex-shrink-0"
        >
          Download Free App &rarr;
        </a>
      </div>
    </div>
  );
}
