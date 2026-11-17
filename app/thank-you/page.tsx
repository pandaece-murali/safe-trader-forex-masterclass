import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  Monitor,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Registration Confirmed | The Safe Trader Academy",
  description:
    "Thank you for registering for the 2-Day Live Forex Trading Masterclass by The Safe Trader Academy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <header className="thank-you-header">
        <div className="thank-you-header-inner">
          <Link href="/" aria-label="The Safe Trader Academy home">
            <Image
              src="/safe-trader-logo.png"
              alt="The Safe Trader Academy"
              width={160}
              height={80}
              priority
              className="thank-you-logo"
            />
          </Link>
          <Link href="/" className="thank-you-home-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <section className="thank-you-content">
        <div className="thank-you-success-icon" aria-hidden="true">
          <CheckCircle2 size={34} />
        </div>
        <p className="thank-you-eyebrow">PAYMENT SUCCESSFUL</p>
        <h1>Thank you for registering!</h1>
        <p className="thank-you-intro">
          Your payment has been received and your place in the 2-Day Live Forex
          Trading Masterclass (21st &amp; 22nd Nov 2026) is confirmed.
        </p>

        <div className="thank-you-registration-card">
          <div className="thank-you-registration-heading">
            <div>
              <span>Your registration</span>
              <h2>2-Day Live Forex Trading Masterclass</h2>
            </div>
            <span className="thank-you-price">₹99</span>
          </div>
          <div className="thank-you-session-type">
            <Monitor size={18} aria-hidden="true" />
            <span>2-Day Live online session • 21st &amp; 22nd Nov 2026</span>
          </div>
        </div>

        <div className="thank-you-next">
          <h2>What happens next?</h2>
          <ul>
            <li>
              <CheckCircle2 size={19} aria-hidden="true" />
              <span>
                Keep your payment confirmation or receipt for your records.
              </span>
            </li>
            <li>
              <Mail size={19} aria-hidden="true" />
              <span>
                Check the email address and contact details you used when
                registering for session updates and access information.
              </span>
            </li>
            <li>
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                Need help? Contact our support team and include your payment
                reference, if available.
              </span>
            </li>
          </ul>
        </div>

        <a
          href="mailto:support@thesafetrader.in"
          className="thank-you-support-link"
        >
          <Mail size={17} aria-hidden="true" />
          support@thesafetrader.in
        </a>
      </section>

      <footer className="thank-you-footer">
        <p>
          This masterclass is for educational purposes only and does not
          constitute investment advice or a recommendation to trade any
          financial instrument. Trading involves risk of loss, and no returns
          are guaranteed. Indian residents should verify that any proposed
          foreign exchange transaction and trading platform comply with
          applicable RBI and FEMA requirements before participating.
        </p>
        <span>© 2026 The Safe Trader Academy</span>
      </footer>
    </main>
  );
}
