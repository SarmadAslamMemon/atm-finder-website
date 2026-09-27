import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the ATM Finder Pakistan Android application (dev.varbox.atmfinder). Transparent explanation of location handling, guest mode, and data security.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mb-3">
        Privacy Policy
      </h1>

      <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-500 pb-6 mb-8 border-b border-canvas-border">
        <span>
          <strong>Effective Date:</strong> September 27, 2026
        </span>
        <span>•</span>
        <span>
          <strong>App Package:</strong> <code className="bg-canvas-card px-1.5 py-0.5 rounded border border-canvas-border">dev.varbox.atmfinder</code>
        </span>
        <span>•</span>
        <span>
          <strong>Contact:</strong> privacy@varbox.dev
        </span>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-charcoal-700 leading-relaxed">
        <p>
          ATM Finder Pakistan (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides
          this Privacy Policy to inform you of our policies and procedures regarding the collection,
          use, and disclosure of information we receive from users of our Android mobile
          application (the &ldquo;App&rdquo;) and website (the &ldquo;Site&rdquo;).
        </p>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            1. Information We Collect and How We Use It
          </h2>

          <div className="space-y-4">
            <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
              <h3 className="font-bold text-charcoal-900 text-base mb-2">
                A. Location Information (Precise &amp; Approximate GPS)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
                The core purpose of ATM Finder Pakistan is to help you locate nearby ATMs and bank
                branches. When you open the App and search for nearby cash points, we request access
                to your device&apos;s location (<code>ACCESS_FINE_LOCATION</code> and{" "}
                <code>ACCESS_COARSE_LOCATION</code>).
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1.5">
                <li>
                  <strong>Transmission:</strong> Your latitude and longitude coordinates are sent
                  securely over encrypted HTTPS to our backend server (
                  <code>/api/v1/locations/nearby</code>) to perform a spatial search within your
                  selected radius (1 to 20 km).
                </li>
                <li>
                  <strong>No Continuous Tracking:</strong> We do NOT run continuous background
                  location tracking when the app is closed, and we do NOT record your travel trails
                  or route history.
                </li>
                <li>
                  <strong>No Sale of Location Data:</strong> We never sell, monetize, or license your
                  location coordinates to advertising networks, data brokers, or analytics
                  aggregators.
                </li>
              </ul>
            </div>

            <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
              <h3 className="font-bold text-charcoal-900 text-base mb-2">
                B. Optional Account Data &amp; Guest Mode
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                You can use all primary features of ATM Finder Pakistan in <strong>Guest Mode</strong>{" "}
                without creating an account or providing your name or email. If you choose to create an
                account to synchronize your bookmarked locations across devices, we collect your
                name, email address, and a cryptographically hashed password (salted bcrypt). We
                never store plaintext passwords.
              </p>
            </div>

            <div className="bg-canvas-card border border-canvas-border rounded-2xl p-6 shadow-card-ambient">
              <h3 className="font-bold text-charcoal-900 text-base mb-2">
                C. Community Status Reports
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Users can submit voluntary status reports regarding ATM cash availability (e.g.,
                &ldquo;Cash Available&rdquo;, &ldquo;Low Cash&rdquo;, &ldquo;No Cash&rdquo;,
                &ldquo;Offline&rdquo;) and optional notes. Status reports are associated with the
                selected location and timestamp. They are aggregated anonymously to help other
                cardholders in your area.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            2. Third-Party Services and SDKs
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            The App integrates with select third-party SDKs to provide map visualization and app
            delivery services:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1.5">
            <li>
              <strong>Google Play Services &amp; Google Maps SDK:</strong> Used to display
              interactive maps and render ATM markers. Google&apos;s handling of map telemetry is
              governed by the Google Privacy Policy.
            </li>
            <li>
              <strong>Google Play Core (In-App Review):</strong> Used to request in-app ratings
              without passing personal information outside Google Play.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            3. Data Retention and Security
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            We implement industry-standard HTTPS (TLS encryption) for all data transmitted between
            the App and our backend servers. Location queries used for nearby discovery are processed
            ephemerally in memory to return results and are not stored in persistent user movement
            logs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            4. Account and Data Deletion Rights
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-3 leading-relaxed">
            Under Google Play Developer Policy and global privacy standards, you have the right to
            request the deletion of your account and any associated personal data at any time:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-charcoal-600 space-y-1.5 mb-3">
            <li>
              <strong>In-App:</strong> Open the App → Navigate to <code>Profile</code> →{" "}
              <code>Account</code> → <code>Delete Account</code>.
            </li>
            <li>
              <strong>Web Portal:</strong> Submit a deletion request through our web form at{" "}
              <Link href="/delete-account" className="text-brand-600 font-semibold underline">
                https://atmfinder.varbox.dev/delete-account
              </Link>
              .
            </li>
            <li>
              <strong>Email:</strong> Send a request to{" "}
              <a href="mailto:privacy@varbox.dev" className="text-brand-600 underline">
                privacy@varbox.dev
              </a>{" "}
              with the subject &ldquo;Data Deletion Request&rdquo;.
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Upon verification, all account credentials and bookmarked locations will be permanently
            deleted from our servers within 7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. Children&apos;s Privacy</h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            The App is intended for general audiences and cardholders seeking banking services. We do
            not knowingly collect personal identifiable information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-charcoal-900 mb-3">
            6. Independent Directory Notice
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            ATM Finder Pakistan is an independent utility. It is not affiliated with, sponsored, or
            endorsed by Habib Bank Limited (HBL), United Bank Limited (UBL), MCB Bank, Meezan Bank,
            1LINK, JazzCash, Easypaisa, or Google LLC.
          </p>
        </section>

        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 text-charcoal-900">
          <div className="flex items-center gap-2 font-bold mb-2">
            <Mail className="w-5 h-5 text-brand-600" />
            <span>Contact Information</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed mb-1">
            If you have any questions or concerns regarding this Privacy Policy, please contact us:
          </p>
          <p className="text-xs sm:text-sm font-semibold">
            Privacy Team: <a href="mailto:privacy@varbox.dev" className="text-brand-600 underline">privacy@varbox.dev</a>
          </p>
          <p className="text-xs sm:text-sm font-semibold">
            Support Team: <a href="mailto:support@varbox.dev" className="text-brand-600 underline">support@varbox.dev</a>
          </p>
        </div>
      </div>
    </div>
  );
}
