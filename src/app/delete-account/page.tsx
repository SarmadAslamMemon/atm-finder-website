"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, CheckCircle2 } from "lucide-react";

export default function DeleteAccountPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("no_longer_needed");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed || !email) return;

    // Direct mailto fallback trigger
    const subject = encodeURIComponent("Account Deletion Request - ATM Finder");
    const body = encodeURIComponent(
      `Please permanently delete my account and associated data.\n\nRegistered Email: ${email}\nReason: ${reason}\nConfirmed: Yes`
    );
    window.location.href = `mailto:privacy@varbox.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-3">
        Account &amp; Data Deletion
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 pb-6 mb-8 border-b border-canvas-border">
        <span>
          <strong>App Package:</strong> <code className="bg-canvas-card px-1.5 py-0.5 rounded border border-canvas-border">dev.varbox.atmfinder</code>
        </span>
        <span>•</span>
        <span>
          <strong>Compliance:</strong> Google Play User Data &amp; Deletion Policy
        </span>
      </div>

      <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed mb-8">
        In accordance with Google Play Developer policies, users of ATM Finder Pakistan who
        registered an optional account for cloud bookmark synchronization can request the permanent
        deletion of their account and associated personal data.
      </p>

      <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient mb-8">
        <h2 className="text-lg font-bold text-charcoal-900 mb-4 flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-red-600" />
          <span>What Happens When You Request Deletion?</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
          <div>
            <h3 className="font-semibold text-charcoal-900 mb-1">Data Permanently Deleted:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Account Profile:</strong> Your registered name, email address, password hash,
                and session tokens.
              </li>
              <li>
                <strong>Cloud Bookmarks:</strong> All saved ATM locations, favorites, and custom search
                radius settings.
              </li>
              <li>
                <strong>User ID Links:</strong> Any internal database links connecting your personal
                identity to historical community reports.
              </li>
            </ul>
          </div>

          <div className="border-t border-canvas-border/50 pt-3">
            <h3 className="font-semibold text-charcoal-900 mb-1">Data Retained:</h3>
            <p className="text-charcoal-500">
              Historical community cash reports (e.g., &ldquo;Cash available at Mall Road&rdquo;) are
              retained purely in an aggregated, anonymous format without any personal identifier,
              preserving directory accuracy for local users.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#FAF7F2] border border-canvas-border rounded-2xl p-5">
          <h3 className="font-bold text-charcoal-900 text-sm mb-2">Method 1: Direct In-App Deletion</h3>
          <ol className="list-decimal pl-4 text-xs text-charcoal-600 space-y-1.5 leading-relaxed">
            <li>Open <strong>ATM Finder Pakistan</strong> on your Android phone.</li>
            <li>Tap the <strong>Profile</strong> tab in the bottom bar.</li>
            <li>Select <strong>Account Settings</strong> → <strong>Delete Account</strong>.</li>
            <li>Confirm your action to instantly wipe your cloud profile.</li>
          </ol>
        </div>

        <div className="bg-[#FAF7F2] border border-canvas-border rounded-2xl p-5">
          <h3 className="font-bold text-charcoal-900 text-sm mb-2">Method 2: Web Deletion Request</h3>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            If you have uninstalled the app or cannot access your phone, submit the web request form
            below or email{" "}
            <a href="mailto:privacy@varbox.dev" className="text-brand-600 font-semibold underline">
              privacy@varbox.dev
            </a>
            .
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="bg-cash-50 border border-cash-200 rounded-2xl p-6 text-charcoal-900">
          <div className="flex items-center gap-2 font-bold mb-2 text-cash-700">
            <CheckCircle2 className="w-5 h-5 text-cash-600" />
            <span>Deletion Request Initiated</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-2">
            Your email client should have opened to send the deletion request for <strong>{email}</strong>.
            If it did not open automatically, please send an email directly to{" "}
            <a href="mailto:privacy@varbox.dev" className="underline font-semibold text-brand-600">
              privacy@varbox.dev
            </a>
            .
          </p>
          <p className="text-xs text-charcoal-500">
            All records will be permanently purged within 7 business days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-canvas-card border border-canvas-border rounded-3xl p-6 sm:p-8 shadow-card-ambient space-y-5"
        >
          <h2 className="text-base font-bold text-charcoal-900">Web Deletion Request Form</h2>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-charcoal-700 mb-1">
              Registered Account Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. yourname@example.com"
              required
              className="w-full px-4 py-2.5 text-sm bg-[#F9F6F0] border border-canvas-border rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 text-charcoal-900"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-xs font-semibold text-charcoal-700 mb-1">
              Reason for Deletion (Optional)
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F9F6F0] border border-canvas-border rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 text-charcoal-900"
            >
              <option value="no_longer_needed">No longer need the app</option>
              <option value="privacy_preference">Privacy preference</option>
              <option value="switching_accounts">Switching email accounts</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-2.5 text-xs text-charcoal-600 cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                required
                className="mt-0.5 rounded border-canvas-border text-brand-600 focus:ring-brand-500"
              />
              <span>
                I confirm that I want to permanently delete my account, cloud bookmarks, and
                preferences. I understand this action cannot be undone.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!confirmed || !email}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-sm"
          >
            <Trash2 className="w-4 h-4" />
            <span>Submit Account Deletion Request</span>
          </button>
        </form>
      )}

      <div className="mt-8 text-xs text-charcoal-400 text-center leading-relaxed">
        <strong>Processing Timeline:</strong> In-app deletion is instant. Web requests are verified
        and purged from our production databases within 7 business days.
      </div>
    </div>
  );
}
