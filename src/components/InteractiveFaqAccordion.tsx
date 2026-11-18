"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function InteractiveFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-canvas-border bg-canvas-soft/60 overflow-hidden transition"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-ink-950 transition hover:bg-white focus:outline-none"
            >
              <span className="text-sm sm:text-base">{item.q}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-ink-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-brand-600" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-ink-600 leading-relaxed border-t border-canvas-border/50 bg-white">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
