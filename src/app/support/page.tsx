import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, HelpCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Support & Help Center",
  description:
    "Get support, report incorrect ATM locations, or submit inquiries for ATM Finder Pakistan (dev.varbox.atmfinder).",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-3">
        Support &amp; Help Center
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 pb-6 mb-8 border-b border-canvas-border">
        <span>
          <strong>App:</strong> ATM Finder Pakistan
        </span>
        <span>•</span>
        <span>
          <strong>Package:</strong> <code className="bg-canvas-card px-1.5 py-0.5 rounded border border-canvas-border">dev.varbox.atmfinder</code>
        </span>
        <span>•</span>
        <span>
          <strong>Support Email:</strong> support@varbox.dev
        </span>
      </div>

      <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed mb-8">
        We are dedicated to making ATM discovery across Pakistan as reliable and accurate as
        possible. If you need technical assistance, spot an inaccurate location, or have a
        suggestion, we&apos;re here to help.
      </p>

      <div className="space-y-6 mb-12">
        <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
          <h2 className="text-base font-bold text-charcoal-900 mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-600" />
            <span>1. An ATM location or address is inaccurate</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            If a branch has permanently moved, closed, or the map pin is misaligned, please email us
            at{" "}
            <a
              href="mailto:support@varbox.dev?subject=Incorrect%20ATM%20Location"
              className="text-brand-600 font-semibold underline"
            >
              support@varbox.dev
            </a>{" "}
            with:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1">
            <li>Bank name and branch title</li>
            <li>City and correct street address</li>
            <li>Correct coordinates or Google Maps link (if known)</li>
          </ul>
        </div>

        <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
          <h2 className="text-base font-bold text-charcoal-900 mb-2 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" />
            <span>2. How to report ATM cash status</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            In the Android app, select any ATM card, tap the <strong>Report Status</strong> button, and
            choose one of four statuses: <em>Working (Cash Available)</em>, <em>Low Cash</em>,{" "}
            <em>No Cash</em>, or <em>Offline</em>. Your report immediately updates the community
            timestamp for that machine.
          </p>
        </div>

        <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
          <h2 className="text-base font-bold text-charcoal-900 mb-2 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" />
            <span>3. Location permissions not working</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            If the app says &ldquo;Location unavailable&rdquo;, ensure GPS is enabled in your Android
            phone settings:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1">
            <li>
              Go to phone <code>Settings</code> → <code>Apps</code> → <code>ATM Finder</code> →{" "}
              <code>Permissions</code>.
            </li>
            <li>
              Enable <strong>Location</strong> permission (allow while using the app).
            </li>
          </ul>
        </div>

        <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
          <h2 className="text-base font-bold text-charcoal-900 mb-2 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-600" />
            <span>4. Account &amp; Data Deletion</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            If you created an account for cloud bookmark sync and wish to delete it, visit our{" "}
            <Link href="/delete-account" className="text-brand-600 font-semibold underline">
              Account Deletion Page
            </Link>{" "}
            or email <a href="mailto:privacy@varbox.dev" className="text-brand-600 underline">privacy@varbox.dev</a>.
          </p>
        </div>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 text-charcoal-900">
        <div className="flex items-center gap-2 font-bold mb-2">
          <Mail className="w-5 h-5 text-brand-600" />
          <span>Direct Contact Details</span>
        </div>
        <ul className="text-xs sm:text-sm space-y-1.5 leading-relaxed">
          <li>
            <strong>Technical Support:</strong>{" "}
            <a href="mailto:support@varbox.dev" className="underline font-semibold">
              support@varbox.dev
            </a>
          </li>
          <li>
            <strong>Privacy Inquiries:</strong>{" "}
            <a href="mailto:privacy@varbox.dev" className="underline font-semibold">
              privacy@varbox.dev
            </a>
          </li>
          <li>
            <strong>Response Time:</strong> We typically respond within 24 to 48 business hours.
          </li>
        </ul>
      </div>
    </div>
  );
}
