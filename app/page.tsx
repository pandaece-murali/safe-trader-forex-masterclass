"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsSection from "./components/TestimonialsSection";
import Reveal from "./components/Reveal";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Monitor,
  Globe,
  ChartNoAxesCombined,
  BookOpen,
  ShieldCheck,
  Target,
  TrendingUp,
  ArrowLeftRight,
  CheckCircle2,
  Menu,
  X,
  GraduationCap,
  Wallet,
  ChartCandlestick,
  ChevronDown,
  AlertTriangle,
  Maximize2,
  Play,
} from "lucide-react";

// ==========================================
// 2. What You'll Learn
// ==========================================
const learnModules = [
  {
    number: "01",
    title: "Understanding the Forex Market",
    description:
      "Learn how the foreign exchange market works and why currency prices fluctuate.",
    icon: ChartNoAxesCombined,
    details: [
      "Global currency flow, trading sessions (London, New York, Tokyo)",
      "Major vs. minor currency pairs & market participants",
      "Key economic factors that drive Forex price fluctuations",
    ],
  },
  {
    number: "02",
    title: "Currency Pairs & Price Movements",
    description:
      "Understand currency pairs, pips, spreads, and the basics of reading price changes.",
    icon: ArrowLeftRight,
    details: [
      "Base vs. quote currency mechanics",
      "Calculating pips, lot sizes, and spread costs accurately",
      "Reading candlestick charts and tracking price action momentum",
    ],
  },
  {
    number: "03",
    title: "Technical Analysis & Price Action",
    description:
      "Explore charts, support and resistance, trends, and market structure to understand price behaviour.",
    icon: TrendingUp,
    details: [
      "Key support and resistance zones identification",
      "Trend lines, break-and-retest market structures",
      "Reliable candlestick patterns for confirming momentum",
    ],
  },
  {
    number: "04",
    title: "Identifying Potential Trade Setups",
    description:
      "Learn how traders analyse charts and evaluate potential trading opportunities using defined criteria.",
    icon: Target,
    details: [
      "High-probability setup identification checklist",
      "Confluence of price levels and technical confirmation",
      "Filtering false breakouts from genuine market movement",
    ],
  },
  {
    number: "05",
    title: "Entry, Exit & Stop-Loss",
    description:
      "Understand how entry levels, exit plans, and stop-loss orders fit into a trading strategy.",
    icon: ChartCandlestick,
    details: [
      "Strategic entry timing with clear invalidation points",
      "Systematic stop-loss placement to protect capital",
      "Setting realistic risk-to-reward exit targets",
    ],
  },
  {
    number: "06",
    title: "Risk & Money Management",
    description:
      "Learn about position sizing, risk exposure, and why capital protection matters in trading.",
    icon: ShieldCheck,
    details: [
      "The 1%–2% rule for trade risk management",
      "Position sizing based on stop-loss distance",
      "Protecting your trading capital across market conditions",
    ],
  },
];

// ==========================================
// 3. Why Attend This Masterclass?
// ==========================================
const benefits = [
  {
    title: "Learn the Basics",
    description:
      "Build a foundation in currency markets and commonly used Forex terminology.",
    icon: BookOpen,
    details: [
      "Clear, beginner-friendly explanations with zero jargon",
      "Complete foundation covering markets, pips, pairs, and spreads",
      "Structured learning path designed by Safe Trader Academy",
    ],
  },
  {
    title: "Understand Chart Behaviour",
    description:
      "Explore how traders use technical analysis to interpret market movements.",
    icon: ChartNoAxesCombined,
    details: [
      "Live chart breakdown of major pairs like EUR/USD and GBP/JPY",
      "Spotting institutional support and resistance zones",
      "Understanding market cycles and price action trends",
    ],
  },
  {
    title: "Develop a Trading Process",
    description:
      "Learn why trading rules, planned entries, and defined exits matter.",
    icon: CheckCircle2,
    details: [
      "Disciplined rule-based approach to eliminate emotional trading",
      "Step-by-step checklist before taking any position",
      "Building a consistent trading plan you can review and refine",
    ],
  },
  {
    title: "Understand Risk Before Execution",
    description:
      "Discover how position sizing and stop-loss placement can help manage potential losses.",
    icon: ShieldCheck,
    details: [
      "Prioritizing risk management before focusing on profit",
      "Practical formulas for calculating exact position sizes",
      "Mitigating downside exposure through calculated stop-losses",
    ],
  },
  {
    title: "Affordable Learning Opportunity",
    description:
      "Get access to the live educational session for a one-time registration fee of ₹99.",
    icon: Wallet,
    details: [
      "Full live interactive masterclass access for just ₹99",
      "Dedicated live Q&A session with professional trading mentors",
      "Invaluable practical insights to start your trading journey safely",
    ],
  },
];

// ==========================================
// 4. Who Should Attend?
// ==========================================
const audiences = [
  {
    title: "Beginners Exploring Forex",
    description:
      "Understand the basics of currency markets and how Forex trading works.",
    icon: GraduationCap,
    details: [
      "No prior financial or trading background required",
      "Understand currency pairs, leverage, and trading sessions",
      "Learn the safe, risk-managed way to explore currency markets",
    ],
  },
  {
    title: "Aspiring Traders",
    description:
      "Learn about technical analysis, potential trade setups, and trading plans.",
    icon: ChartNoAxesCombined,
    details: [
      "Transition from guesswork to systematic analysis",
      "Master support/resistance, candlestick structure, and entry criteria",
      "Learn how to manage trades from open to close",
    ],
  },
  {
    title: "Equity & Derivatives Traders",
    description:
      "Explore how currency markets differ from other financial markets.",
    icon: TrendingUp,
    details: [
      "Understand high liquidity and 24-hour Forex market dynamics",
      "Compare currency price behavior to equities and indices",
      "Diversify your market analysis skill set across asset classes",
    ],
  },
  {
    title: "Traders Improving Their Fundamentals",
    description:
      "Revisit price action, entry and exit planning, and risk management concepts.",
    icon: Target,
    details: [
      "Overcome common mistakes like overleveraging and chasing trades",
      "Refine your risk-to-reward ratios and exit discipline",
      "Reinforce sound psychological principles for long-term consistency",
    ],
  },
];

// ==========================================
// 6. Frequently Asked Questions
// ==========================================
const faqs = [
  {
    question: "Is this Forex webinar free?",
    answer: "No. The live masterclass has a registration fee of ₹99.",
  },
  {
    question: "Is this webinar suitable for beginners?",
    answer:
      "Yes. The session is designed to explain Forex concepts from the fundamentals.",
  },
  {
    question: "What will I learn during the session?",
    answer:
      "The masterclass covers currency market basics, technical analysis, price action, and risk management principles.",
  },
  {
    question: "How will the webinar be conducted?",
    answer:
      "The webinar will be conducted live online. The joining link will be shared according to the registration instructions.",
  },
  {
    question: "Do I need prior trading experience?",
    answer:
      "No prior trading experience is required to learn the fundamentals. Some concepts may require further practice after the session.",
  },
  {
    question: "Will I receive guaranteed trading profits?",
    answer:
      "No. Trading involves financial risk, and no strategy or educational session can guarantee profits or prevent losses.",
  },
  {
    question: "Will I receive a recording?",
    answer:
      "Recording availability has not been confirmed. Please check the registration details or contact the academy.",
  },
  {
    question: "How can I register?",
    answer:
      "Complete the registration form and pay the ₹99 fee using the available payment method. Follow the instructions to receive your webinar access details.",
  },
];

const WEBINAR_DATE = "[Insert Webinar Date]";
const WEBINAR_TIME = "[Insert Time]";
const WEBINAR_LANGUAGE = "[Insert Language]";

// Replace with actual registration or payment URL
const REGISTRATION_URL = "#register";

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </div>
      <h2>
        {title}
        {highlight && <span className="text-orange"> {highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function RegisterButton({
  children = "REGISTER NOW FOR ₹99",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={REGISTRATION_URL} className={`register-button ${className}`}>
      {children}
      <ArrowRight size={19} strokeWidth={2.5} />
    </a>
  );
}

type ZoomCardData = {
  category: string;
  number?: string;
  title: string;
  description: string;
  details?: string[];
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoomedCard, setZoomedCard] = useState<ZoomCardData | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // 07 Sticky registration CTA visibility listener (hides near page bottom so it never covers the footer)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollY + windowHeight >= fullHeight - 280;
      setShowStickyCta(scrollY > 420 && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close zoomed modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedCard(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand"
            aria-label="The Safe Trader Academy home"
            onClick={closeMenu}
          >
            <Image
              src="/safe-trader-logo.png"
              alt="The Safe Trader — an academy for stock market"
              width={190}
              height={100}
              priority
              className="site-logo"
            />
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#learn" onClick={closeMenu}>
              What You&apos;ll Learn
            </a>
            <a href="#video-preview" onClick={closeMenu}>
              Video Preview
            </a>
            <a href="#why-attend" onClick={closeMenu}>
              Why Attend
            </a>
            <a href="#audience" onClick={closeMenu}>
              Who Should Attend
            </a>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#faqs" onClick={closeMenu}>
              FAQs
            </a>
            <RegisterButton className="header-cta">Register Now</RegisterButton>
          </nav>
        </div>
      </header>

      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="live-dot" />
              LIVE FOREX TRADING MASTERCLASS
            </div>

            {/* 01 Text reveal: Hero headline enters line by line */}
            <h1>
              <span className="hero-line-wrap">
                <motion.span
                  className="hero-line"
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                  }}
                >
                  Understand Forex.
                </motion.span>
              </span>
              <span className="hero-line-wrap">
                <motion.span
                  className="hero-line"
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.25,
                  }}
                >
                  Read the Charts.
                </motion.span>
              </span>
              <span className="hero-line-wrap">
                <motion.span
                  className="hero-line text-orange"
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4,
                  }}
                >
                  Build Your Trading Strategy.
                </motion.span>
              </span>
            </h1>

            <p className="hero-description">
              Learn how currency markets work, understand price action, and
              explore technical analysis and risk management in this live Forex
              trading masterclass.
            </p>

            <p className="hero-subdescription">
              Designed for beginners and aspiring traders who want to understand
              the fundamentals of Forex trading through a structured learning
              approach.
            </p>

            {/* LIVE WEBINAR ACCESS BADGE */}
            <div className="hero-price-badge">
              <span className="hero-price-dot" />
              LIVE WEBINAR ACCESS — JUST ₹99
            </div>

            <div className="event-details">
              <div className="event-item">
                <CalendarDays />
                <div>
                  <span>Date</span>
                  <strong>{WEBINAR_DATE}</strong>
                </div>
              </div>
              <div className="event-item">
                <Clock3 />
                <div>
                  <span>Time</span>
                  <strong>{WEBINAR_TIME}</strong>
                </div>
              </div>
              <div className="event-item">
                <Monitor />
                <div>
                  <span>Mode</span>
                  <strong>Live Online Session</strong>
                </div>
              </div>
              <div className="event-item">
                <Globe />
                <div>
                  <span>Language</span>
                  <strong>{WEBINAR_LANGUAGE}</strong>
                </div>
              </div>
            </div>

            <div className="hero-action">
              <div className="hero-actions-row">
                <RegisterButton />
                <a href="#video-preview" className="hero-watch-button">
                  <Play size={16} fill="var(--orange)" color="var(--orange)" />
                  Watch Video
                </a>
              </div>
              <p className="microcopy">
                Learn the process. Understand the risks. Trade with a plan.
              </p>
            </div>
          </div>

          <div className="hero-visual" style={{ width: "100%", maxWidth: 410, margin: "0 auto" }}>
            {/* 04 Floating market watch kept ABOVE the image so image is never hidden */}
            <Reveal
              as="div"
              className="market-watch-top-bar"
              direction="up"
              delay={0.1}
              style={{ width: "100%", maxWidth: 410 }}
            >
              <div className="market-watch-bar-inner">
                <div className="market-watch-bar-header">
                  <span className="market-watch-title">
                    <span className="market-watch-pulse" />
                    MARKET WATCH
                  </span>
                  <span className="market-live">
                    <i /> LIVE
                  </span>
                </div>

                <div className="market-watch-pairs">
                  <div className="currency-pill">
                    <span className="pair-name">EUR/USD</span>
                    <span className="pair-tag">FX</span>
                  </div>
                  <div className="currency-pill">
                    <span className="pair-name">GBP/JPY</span>
                    <span className="pair-tag">FX</span>
                  </div>
                  <div className="currency-pill">
                    <span className="pair-name">USD/INR</span>
                    <span className="pair-tag">FX</span>
                  </div>
                </div>

                <div className="mini-chart mini-chart-inline" aria-hidden="true">
                  {[28, 43, 34, 55, 47, 67, 53, 76, 64, 84, 70, 94].map(
                    (height, index) => (
                      <span
                        key={index}
                        className={index % 3 === 0 ? "candle down" : "candle"}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </Reveal>

            {/* Hero image - 100% visible and unobstructed */}
            <Reveal
              as="div"
              className="hero-image-wrap"
              zoom={true}
              initialScale={0.92}
              direction="zoom"
              delay={0.2}
              style={{
                width: "100%",
                maxWidth: 410,
                aspectRatio: "682 / 1024",
                margin: "0 auto",
              }}
            >
              <img
                src="/hero-mentor.jpg"
                alt="The Safe Trader Academy - Live Forex Trading Masterclass with Expert Mentor"
                className="hero-person-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHAT YOU'LL LEARN
          ======================================================== */}
      <section className="section learn-section" id="learn">
        <div className="container">
          <SectionHeading
            eyebrow="What You'll Learn"
            title="Explore the Fundamentals of"
            highlight="Forex Trading"
          />

          <div className="learning-layout">
            <div className="learning-grid">
              {/* 02 Slide-in on scroll & 03 Staggered reveal & 05 Click-to-zoom */}
              {learnModules.map((module, index) => {
                const Icon = module.icon;

                return (
                  <Reveal
                    key={module.number}
                    as="article"
                    className="learning-card zoomable-card"
                    staggerIndex={index}
                    alternateSide={true}
                    onClick={() =>
                      setZoomedCard({
                        category: "What You'll Learn",
                        number: module.number,
                        title: module.title,
                        description: module.description,
                        details: module.details,
                      })
                    }
                  >
                    <div className="learning-card-top">
                      <span className="module-number">{module.number}</span>
                      <Icon className="module-icon" size={31} />
                    </div>
                    <h3>
                      {module.number}. {module.title}
                    </h3>
                    <p>{module.description}</p>

                  </Reveal>
                );
              })}
            </div>

            <Reveal as="aside" className="chart-promo" direction="right" delay={0.2}>
              <div className="chart-promo-top">
                <span className="chart-label">TRADING EDUCATION</span>
                <ChartCandlestick size={28} />
              </div>
              <div className="chart-promo-display">
                <div className="chart-axis">
                  <span>Market structure</span>
                  <span>Price action</span>
                  <span>Trend analysis</span>
                </div>

                {/* 06 SVG chart drawing: animated line drawing on scroll */}
                <svg
                  className="chart-line"
                  viewBox="0 0 280 145"
                  role="img"
                  aria-label="Illustrative market chart"
                >
                  <defs>
                    <pattern
                      id="chart-grid"
                      width="28"
                      height="29"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 28 0 L 0 0 0 29"
                        fill="none"
                        stroke="#DCE7F3"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="280" height="145" fill="url(#chart-grid)" />
                  <motion.path
                    d="M 4 112 L 25 96 L 43 108 L 62 75 L 80 88 L 100 62 L 118 81 L 138 47 L 157 64 L 177 30 L 196 52 L 215 26 L 237 42 L 256 13 L 276 21"
                    fill="none"
                    stroke="#1683D8"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.25,
                    }}
                  />
                  <motion.polygon
                    points="4,112 25,96 43,108 62,75 80,88 100,62 118,81 138,47 157,64 177,30 196,52 215,26 237,42 256,13 276,21 276,145 4,145"
                    fill="rgba(22,131,216,0.12)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </svg>
              </div>
              <p>
                Explore how traders study charts, identify patterns, and plan
                their approach.
              </p>
              <RegisterButton className="chart-promo-button">
                BOOK MY SEAT FOR ₹99
              </RegisterButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          VIDEO PREVIEW: THE SAFE TRADER ACADEMY OFFICIAL VIDEO
          ======================================================== */}
      <section className="section video-section" id="video-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Masterclass Preview"
            title="Watch: Learn Forex Trading From Scratch with"
            highlight="The Safe Trader Academy"
            description="Get a preview of how our mentors guide you through global currency market dynamics, chart structures, and disciplined risk management."
          />

          <Reveal
            as="div"
            className="video-showcase-card"
            zoom={true}
            initialScale={0.92}
          >
            <div className="video-player-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/yeo6f_nzcFI?rel=0&modestbranding=1"
                title="The Safe Trader Academy - Learn Forex Trading from Scratch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="video-iframe"
                loading="lazy"
              />
            </div>
            <div className="video-card-footer">
              <div className="video-meta-info">
                <span className="video-badge">OFFICIAL YOUTUBE PREVIEW</span>
                <h3>Learn Forex Trading from Scratch – Master the Global Currency Markets!</h3>
                <p>The Safe Trader Academy • ISO 9001:2015 Certified Trading Institute</p>
              </div>
              <RegisterButton className="video-register-btn">
                JOIN LIVE MASTERCLASS FOR ₹99
              </RegisterButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          3. WHY ATTEND THIS MASTERCLASS?
          ======================================================== */}
      <section className="section benefits-section" id="why-attend">
        <div className="container">
          <SectionHeading
            eyebrow="Why Attend This Masterclass?"
            title="Start Learning Forex With a"
            highlight="Structured Approach"
            description="Forex trading involves more than watching charts and predicting price movements. Understanding the market, following a defined process, and managing risk are essential parts of trading education."
          />

          <div className="benefits-grid">
            {/* 02 Slide-in on scroll & 03 Staggered reveal & 05 Click-to-zoom */}
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  as="article"
                  className="benefit-item zoomable-card"
                  staggerIndex={index}
                  alternateSide={true}
                  onClick={() =>
                    setZoomedCard({
                      category: "Why Attend",
                      title: benefit.title,
                      description: benefit.description,
                      details: benefit.details,
                    })
                  }
                >
                  <div className="benefit-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>

                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHO SHOULD ATTEND?
          ======================================================== */}
      <section className="section audience-section" id="audience">
        <div className="container">
          <SectionHeading
            eyebrow="Who Should Attend?"
            title="Is This Forex Masterclass"
            highlight="Right for You?"
          />

          <div className="audience-grid">
            {/* 02 Slide-in on scroll & 03 Staggered reveal & 05 Click-to-zoom */}
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <Reveal
                  key={audience.title}
                  as="article"
                  className="audience-card zoomable-card"
                  staggerIndex={index}
                  alternateSide={true}
                  onClick={() =>
                    setZoomedCard({
                      category: "Who Should Attend",
                      title: audience.title,
                      description: audience.description,
                      details: audience.details,
                    })
                  }
                >
                  <div className="audience-icon">
                    <Icon size={30} />
                  </div>
                  <div>
                    <h3>{audience.title}</h3>
                    <p>{audience.description}</p>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. TESTIMONIAL (BOX SCROLLING CAROUSEL WITH 01, 02, 03)
          ======================================================== */}
      <TestimonialsSection />

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="section faq-section" id="faqs">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Frequently Asked"
            highlight="Questions"
          />

          <div className="faq-grid">
            <div className="faq-column">
              {faqs
                .map((faq, index) => ({ faq, index }))
                .filter(({ index }) => index % 2 === 0)
                .map(({ faq, index }) => {
                  const isOpen = openFaq === index;

                  return (
                    <Reveal
                      key={faq.question}
                      as="article"
                      className={`faq-item ${isOpen ? "faq-open" : ""}`}
                      direction="left"
                      staggerIndex={index / 2}
                      style={{ order: index }}
                    >
                      <button
                        className="faq-question"
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={19} className="faq-chevron" />
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </Reveal>
                  );
                })}
            </div>

            <div className="faq-column">
              {faqs
                .map((faq, index) => ({ faq, index }))
                .filter(({ index }) => index % 2 !== 0)
                .map(({ faq, index }) => {
                  const isOpen = openFaq === index;

                  return (
                    <Reveal
                      key={faq.question}
                      as="article"
                      className={`faq-item ${isOpen ? "faq-open" : ""}`}
                      direction="right"
                      staggerIndex={(index - 1) / 2}
                      style={{ order: index }}
                    >
                      <button
                        className="faq-question"
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={19} className="faq-chevron" />
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </Reveal>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FINAL CTA
          ======================================================== */}
      <section className="final-cta" id="register">
        <div className="container final-cta-inner">
          <Reveal as="div" className="final-cta-copy" direction="left">
            <div className="final-cta-title-row">
              <span className="final-cta-accent" />
              <h2>Take Your First Step Toward Understanding Forex Trading</h2>
            </div>
            <p>
              Learn the fundamentals of currency markets, chart analysis, and
              risk management in a live educational masterclass by The Safe
              Trader Academy.
            </p>
            <div className="final-cta-badge-row">
              <span className="final-cta-live-badge">
                LIVE FOREX TRADING MASTERCLASS
              </span>
            </div>
            <div className="final-event-details">
              <span>
                <CalendarDays size={18} /> [Insert Date]
              </span>
              <span>
                <Clock3 size={18} /> [Insert Time]
              </span>
              <span>
                <Monitor size={18} /> Live Online
              </span>
              <span>
                <Wallet size={18} /> Registration: ₹99
              </span>
            </div>
          </Reveal>
          <Reveal as="div" className="final-cta-action" direction="right">
            <RegisterButton>RESERVE MY SEAT — ₹99</RegisterButton>
            <p>Build your knowledge before making trading decisions.</p>
          </Reveal>
        </div>
      </section>

      {/* RISK DISCLAIMER */}
      <footer className="risk-footer">
        <div className="container risk-footer-inner">
          <div className="risk-title">
            <AlertTriangle size={24} />
            <strong>Risk Disclaimer</strong>
          </div>
          <p>
            This masterclass is for educational purposes only and does not
            constitute investment advice or a recommendation to trade any
            financial instrument. Trading involves risk of loss, and no returns
            are guaranteed. Indian residents should verify that any proposed
            foreign exchange transaction and trading platform comply with
            applicable RBI and FEMA requirements before participating.
          </p>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 The Safe Trader Academy</span>
          <span>Learn · Practice · Grow</span>
        </div>
      </footer>

      {/* ========================================================
          05. CLICK-TO-ZOOM MODAL WITH BLURRED BACKGROUND
          ======================================================== */}
      <AnimatePresence>
        {zoomedCard && (
          <motion.div
            className="card-zoom-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setZoomedCard(null)}
          >
            <motion.div
              className="card-zoom-modal"
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="card-zoom-close"
                type="button"
                onClick={() => setZoomedCard(null)}
                aria-label="Close zoomed view"
              >
                <X size={20} />
              </button>

              <span className="card-zoom-badge">{zoomedCard.category}</span>
              <h3>
                {zoomedCard.number ? `${zoomedCard.number}. ` : ""}
                {zoomedCard.title}
              </h3>
              <p className="card-zoom-desc">{zoomedCard.description}</p>

              {zoomedCard.details && zoomedCard.details.length > 0 && (
                <div className="card-zoom-highlights">
                  <h4>What You&apos;ll Discover:</h4>
                  <ul>
                    {zoomedCard.details.map((point, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-orange" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card-zoom-footer">
                <RegisterButton className="card-zoom-btn">
                  RESERVE SPOT FOR ₹99
                </RegisterButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          07. STICKY REGISTRATION CTA (ACCESSIBLE ₹99 ACTION)
          ======================================================== */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.aside
            className="sticky-cta-bar"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Sticky registration bar"
          >
            <div className="container sticky-cta-inner">
              <div className="sticky-cta-info">
                <span className="sticky-cta-live-badge">
                  <span className="sticky-cta-dot" /> LIVE FOREX WEBINAR
                </span>
                <div className="sticky-cta-meta">
                  <strong>₹99 Access</strong>
                  <span>•</span>
                  <span>{WEBINAR_DATE}</span>
                  <span>•</span>
                  <span>{WEBINAR_TIME}</span>
                  <span>•</span>
                  <span>Live Online</span>
                </div>
              </div>
              <div className="sticky-cta-actions">
                <RegisterButton className="sticky-register-button">
                  REGISTER NOW FOR ₹99
                </RegisterButton>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
}
