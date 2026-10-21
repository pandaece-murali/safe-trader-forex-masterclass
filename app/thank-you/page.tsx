"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Monitor,
  Globe,
  ArrowLeft,
  MessageCircle,
  Mail,
  ShieldCheck,
  AlertTriangle,
  Download,
  BookOpen,
  Laptop,
  Check,
  Sparkles,
} from "lucide-react";

const WEBINAR_DATE = "[Insert Webinar Date]";
const WEBINAR_TIME = "[Insert Time]";
const WEBINAR_LANGUAGE = "[Insert Language]";

export default function ThankYouPage() {
  // Google Calendar URL generator
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Live Forex Trading Masterclass - The Safe Trader Academy"
  )}&details=${encodeURIComponent(
    "Live Forex Trading Masterclass with The Safe Trader Academy.\nFee: ₹99 Paid.\nUnderstand Forex, read charts, and build your trading strategy."
  )}&location=${encodeURIComponent("Live Online Session (Link via Email/WhatsApp)")}`;

  return (
    <div className="thank-you-shell">
      {/* HEADER */}
      <header className="thank-you-header">
        <div className="container thank-you-header-inner">
          <Link href="/" className="brand" aria-label="The Safe Trader Academy home">
            <Image
              src="/safe-trader-logo.png"
              alt="The Safe Trader — an academy for stock market"
              width={180}
              height={90}
              priority
              className="site-logo"
            />
          </Link>
          <Link href="/" className="back-home-btn">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* HERO CONFIRMATION */}
      <section className="thank-you-hero">
        <div className="container thank-you-container">
          <motion.div
            className="success-pill"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="success-pulse-dot" />
            <span>PAYMENT CONFIRMED • ₹99</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            You&apos;re Officially Registered! 🎉
          </motion.h1>

          <motion.p
            className="thank-you-lead"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Thank you for enrolling in the <strong>Live Forex Trading Masterclass</strong> with
            The Safe Trader Academy. Your seat has been reserved. Please review your pass and follow the 3 quick steps below.
          </motion.p>

          {/* DIGITAL WEBINAR PASS / TICKET */}
          <motion.div
            className="webinar-pass-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pass-card-header">
              <div className="pass-header-left">
                <span className="pass-badge">
                  <Sparkles size={13} /> OFFICIAL MASTERCLASS PASS
                </span>
                <h2>Understand Forex. Read the Charts. Build Your Strategy.</h2>
              </div>
              <div className="pass-status-badge">
                <CheckCircle2 size={16} />
                <span>CONFIRMED</span>
              </div>
            </div>

            <div className="pass-grid">
              <div className="pass-item">
                <Calendar className="pass-icon" size={20} />
                <div>
                  <small>Webinar Date</small>
                  <strong>{WEBINAR_DATE}</strong>
                </div>
              </div>
              <div className="pass-item">
                <Clock className="pass-icon" size={20} />
                <div>
                  <small>Session Time</small>
                  <strong>{WEBINAR_TIME}</strong>
                </div>
              </div>
              <div className="pass-item">
                <Monitor className="pass-icon" size={20} />
                <div>
                  <small>Session Mode</small>
                  <strong>Live Online Session</strong>
                </div>
              </div>
              <div className="pass-item">
                <Globe className="pass-icon" size={20} />
                <div>
                  <small>Language</small>
                  <strong>{WEBINAR_LANGUAGE}</strong>
                </div>
              </div>
            </div>

            <div className="pass-action-bar">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="calendar-btn"
              >
                <Calendar size={18} />
                <span>Add to Google Calendar</span>
              </a>
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>
          </motion.div>

          {/* 3 IMMEDIATE ACTION STEPS */}
          <div className="next-steps-section">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              IMPORTANT NEXT STEPS
            </div>
            <h2>What to Do Next</h2>
            <p className="next-steps-sub">
              Complete these 3 simple steps so you don&apos;t miss any webinar updates, links, or bonuses:
            </p>

            <div className="steps-cards-grid">
              <motion.div
                className="step-card"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <div className="step-number">01</div>
                <div className="step-icon-wrap">
                  <MessageCircle size={24} />
                </div>
                <h3>Join WhatsApp VIP Group</h3>
                <p>
                  The live webinar Zoom link and pre-session updates will be sent directly to the group 30 minutes before we go live.
                </p>
                <a
                  href="https://chat.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="step-action-link"
                >
                  Join WhatsApp Community →
                </a>
              </motion.div>

              <motion.div
                className="step-card"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div className="step-number">02</div>
                <div className="step-icon-wrap">
                  <Mail size={24} />
                </div>
                <h3>Check Your Email Inbox</h3>
                <p>
                  A confirmation email with your transaction receipt of ₹99 and calendar invite has been sent. Check your Spam folder if needed.
                </p>
                <span className="step-note">
                  <Check size={14} /> Receipt Dispatched
                </span>
              </motion.div>

              <motion.div
                className="step-card"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <div className="step-number">03</div>
                <div className="step-icon-wrap">
                  <Laptop size={24} />
                </div>
                <h3>Prepare Your Workspace</h3>
                <p>
                  We recommend attending from a laptop or desktop computer with a notebook and pen to study live chart breakdowns comfortably.
                </p>
                <span className="step-note">
                  <Check size={14} /> Ready for Chart Study
                </span>
              </motion.div>
            </div>
          </div>

          {/* PRE-SESSION VIDEO PREVIEW */}
          <div className="prep-video-section">
            <div className="section-eyebrow">
              <span className="eyebrow-line" />
              MENTOR VIDEO PREVIEW
            </div>
            <h2>Watch Before The Session</h2>
            <p className="prep-video-sub">
              Watch this quick overview from The Safe Trader Academy to get a head start on currency market fundamentals:
            </p>

            <div className="prep-video-card">
              <div className="prep-video-wrapper">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/yeo6f_nzcFI?rel=0&modestbranding=1"
                  title="The Safe Trader Academy - Learn Forex Trading from Scratch"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="prep-video-iframe"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* NEED HELP / SUPPORT BOX */}
          <div className="support-box">
            <div className="support-left">
              <ShieldCheck size={28} className="support-icon" />
              <div>
                <strong>Need Assistance or Have Questions?</strong>
                <p>Our student support team is available to assist you with registration or access issues.</p>
              </div>
            </div>
            <div className="support-right">
              <a href="mailto:support@thesafetrader.in" className="support-email-btn">
                <Mail size={16} />
                <span>support@thesafetrader.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="risk-footer thank-you-footer">
        <div className="container risk-footer-inner">
          <div className="risk-title">
            <AlertTriangle size={24} />
            <strong>Risk Disclaimer</strong>
          </div>
          <p>
            This masterclass is for educational purposes only and does not constitute investment advice or a recommendation to trade any financial instrument. Trading involves risk of loss, and no returns are guaranteed. Indian residents should verify that any proposed foreign exchange transaction and trading platform comply with applicable RBI and FEMA requirements before participating.
          </p>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 The Safe Trader Academy</span>
          <span>Learn · Practice · Grow</span>
        </div>
      </footer>
    </div>
  );
}
