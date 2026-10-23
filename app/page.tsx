"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./components/Reveal";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Monitor,
  Globe,
  ChartNoAxesCombined,
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
  Play,
  Lock,
  Star,
  Quote,
} from "lucide-react";

// ==========================================
// 1. Data: What You'll Learn (01 - 06)
// ==========================================
const learnModules = [
  {
    number: "01",
    title: "Understanding the Forex Market",
    description:
      "Learn how the foreign exchange market works and why currency prices fluctuate.",
    icon: ChartNoAxesCombined,
    details: [
      "How the global foreign exchange market operates",
      "Why currency prices fluctuate across trading sessions",
      "Key participants and how they influence market movement",
    ],
  },
  {
    number: "02",
    title: "Currency Pairs & Price Movements",
    description:
      "Understand currency pairs, pips, spreads, and the basics of reading price changes.",
    icon: ArrowLeftRight,
    details: [
      "Base vs. quote currency and how pairs are priced",
      "Understanding pips, spreads, and price increments",
      "Reading price changes on basic chart formats",
    ],
  },
  {
    number: "03",
    title: "Technical Analysis & Price Action",
    description:
      "Explore charts, support and resistance, trends, and market structure to understand price behaviour.",
    icon: TrendingUp,
    details: [
      "Support and resistance zones and their role in price movement",
      "Identifying trend direction and market structure",
      "Using candlestick formations to read price behaviour",
    ],
  },
  {
    number: "04",
    title: "Identifying Potential Trade Setups",
    description:
      "Learn how traders analyse charts and evaluate potential trading opportunities using defined criteria.",
    icon: Target,
    details: [
      "What constitutes a potential trade setup on a chart",
      "How traders use technical criteria to evaluate opportunities",
      "The importance of confluence and setup confirmation",
    ],
  },
  {
    number: "05",
    title: "Entry, Exit & Stop-Loss",
    description:
      "Understand how entry levels, exit plans, and stop-loss orders fit into a trading strategy.",
    icon: ChartCandlestick,
    details: [
      "How entry levels are identified within a trading plan",
      "The role of stop-loss orders in limiting potential losses",
      "Setting exit targets based on a defined risk-to-reward ratio",
    ],
  },
  {
    number: "06",
    title: "Risk & Money Management",
    description:
      "Learn about position sizing, risk exposure, and why capital protection matters in trading.",
    icon: ShieldCheck,
    details: [
      "Why capital protection is the foundation of trading discipline",
      "Position sizing and calculating risk exposure before a trade",
      "How consistent risk management supports long-term learning",
    ],
  },
];

// ==========================================
// 2. Data: Why Attend This Masterclass? (5 Points)
// ==========================================
const whyAttendPoints = [
  {
    title: "Learn the Basics",
    description:
      "Build a foundation in currency markets and commonly used Forex terminology.",
    icon: Globe,
  },
  {
    title: "Understand Chart Behaviour",
    description:
      "Explore how traders use technical analysis to interpret market movements.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Develop a Trading Process",
    description:
      "Learn why trading rules, planned entries, and defined exits matter.",
    icon: Target,
  },
  {
    title: "Understand Risk Before Execution",
    description:
      "Discover how position sizing and stop-loss placement can help manage potential losses.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Learning Opportunity",
    description:
      "Get access to the live educational session for a one-time registration fee of ₹99.",
    icon: Wallet,
  },
];

// ==========================================
// 3. Data: Who Should Attend? (4 Groups)
// ==========================================
const audiences = [
  {
    title: "Beginners Exploring Forex",
    description:
      "Understand the basics of currency markets and how Forex trading works.",
    icon: GraduationCap,
    details: [
      "No prior trading or financial knowledge required",
      "Learn currency pairs, pips, and market terminology from scratch",
      "Understand how the Forex market operates globally",
    ],
  },
  {
    title: "Aspiring Traders",
    description:
      "Learn about technical analysis, potential trade setups, and trading plans.",
    icon: ChartNoAxesCombined,
    details: [
      "Explore chart reading and technical analysis fundamentals",
      "Understand how potential trade setups are evaluated",
      "Learn why a trading plan matters before entering a position",
    ],
  },
  {
    title: "Equity & Derivatives Traders",
    description:
      "Explore how currency markets differ from other financial markets.",
    icon: TrendingUp,
    details: [
      "Understand the unique liquidity and hours of Forex markets",
      "Compare currency price action to equities and futures",
      "Expand your technical trading skills to global currencies",
    ],
  },
  {
    title: "Traders Improving Their Fundamentals",
    description:
      "Revisit price action, entry and exit planning, and risk management concepts.",
    icon: Target,
    details: [
      "Revisit support, resistance, and market structure discipline",
      "Strengthen your entry, exit, and stop-loss planning process",
      "Refine capital protection and risk management rules",
    ],
  },
];

// ==========================================
// 4. Data: Testimonials (3 Verified Reviews)
// ==========================================

const testimonials = [
  {
    name: "Dinesh Sharma",
    role: "Learner at The Safe Trader Academy",
    initials: "DS",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "I started with very little knowledge of the financial markets, but the academy helped simplify trading concepts from the basics. The teaching approach made it easier to understand Forex trading and build a stronger foundation.",
  },
  {
    name: "Varshni Arun",
    role: "Learner at The Safe Trader Academy",
    initials: "VA",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "The training is practical and well-structured. The sessions helped me develop a better understanding of price action, market structure, and risk management. The learning experience has been valuable for my trading journey.",
  },
  {
    name: "Uday Jass",
    role: "Learner at The Safe Trader Academy",
    initials: "UJ",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "The teaching is informative, clear, and delivered with patience. Being able to revisit lessons until the concepts are understood is especially helpful. The modern classrooms and large display screen also make market analysis easier to follow.",
  },
  {
    name: "Channabasappa Hugge",
    role: "Learner at The Safe Trader Academy",
    initials: "CH",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "The academy provides a supportive learning environment for beginners. The instructors explain market concepts carefully, emphasise capital protection, and help students work through their doubts. The teaching approach encourages disciplined learning.",
  },
  {
    name: "Rekha N",
    role: "Learner at The Safe Trader Academy",
    initials: "RN",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "My experience with the academy has been positive, especially as a beginner. The concepts are explained in a simple and practical manner, and the support team has been helpful in addressing my questions throughout the learning process.",
  },
  {
    name: "Sai Mudiraj",
    role: "Learner at The Safe Trader Academy",
    initials: "SM",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "The academy is a good learning environment for beginners interested in the stock market and Forex. The instructors and staff are friendly and helpful, and the sessions made exploring different financial markets an engaging experience.",
  },
  {
    name: "Abhishek Kumar",
    role: "Learner at The Safe Trader Academy",
    initials: "AK",
    stars: 5,
    tag: "Student Feedback",
    quote:
      "The academy offers a beginner-friendly approach to trading education. Concepts are explained clearly, the mentors are approachable, and the practical learning style helps students build a better understanding of market fundamentals.",
  },
];

// ==========================================
// 5. Data: Frequently Asked Questions (8 FAQs)
// ==========================================
const faqs = [
  {
    question: "Is this Forex webinar free?",
    answer: "No. The live masterclass has a registration fee of ₹99.",
  },
  {
    question: "Is this webinar suitable for beginners?",
    answer:
      "Yes. The session is intended for beginners and aspiring traders who want to understand Forex fundamentals and technical analysis.",
  },
  {
    question: "What will I learn during the session?",
    answer:
      "You'll explore Forex market basics, currency pairs, price action, technical analysis, potential trade setups, entry and exit planning, and risk management.",
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

const WEBINAR_DATE = "01-Nov-2026";
const WEBINAR_TIME = "7.00 PM";
const WEBINAR_MODE = "Live Online Session";
const WEBINAR_LANGUAGE = "English, Telugu";
const REGISTRATION_URL = "#register";

type ZoomCardData = {
  category: string;
  number?: string;
  title: string;
  description: string;
  details?: string[];
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoomedCard, setZoomedCard] = useState<ZoomCardData | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Live countdown timer state

  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Webinar: November 1, 2026, at 7:00 PM IST
    const targetDate = new Date("2026-11-01T19:00:00+05:30").getTime();

    const updateTimer = () => {
      const distance = targetDate - Date.now();

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);


  // Sticky bottom bar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollY + windowHeight >= fullHeight - 240;
      setShowStickyCta(scrollY > 380 && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close zoomed modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedCard(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      {/* ========================================================
          TOP URGENCY BANNER (LOGO PALETTE)
          ======================================================== */}
      <div className="ck-urgency-banner">
        <span className="ck-urgency-badge">
          <span className="pulse-dot" /> LIVE EVENT
        </span>
        <span>
          LIVE WEBINAR ACCESS — JUST ₹99 • LIMITED SEATS AVAILABLE!
        </span>
      </div>

      {/* ========================================================
          HEADER (DARK NAVY MATCHING HERO, LOGO ON WHITE BADGE)
          ======================================================== */}
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
              alt="The Safe Trader Academy"
              width={185}
              height={95}
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
            <a href="#why-attend" onClick={closeMenu}>
              Why Attend?
            </a>
            <a href="#who-should-attend" onClick={closeMenu}>
              Who Should Attend?
            </a>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonial
            </a>
            <a href="#faqs" onClick={closeMenu}>
              FAQ
            </a>
            <a
              href={REGISTRATION_URL}
              className="register-button header-cta"
              onClick={closeMenu}
            >
              Register Now @ ₹99
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </nav>
        </div>
      </header>

      {/* ========================================================
          1. HERO SECTION (CHARTKINGZ LAYOUT • SAFE TRADER LOGO COLOURS)
          ======================================================== */}
      <section className="ck-hero-banner" id="home">
        <div className="container">
          <div className="ck-hero-header-wrap">
            {/* Top Eyebrow Accent (Orange Logo Accent) */}
            <Reveal as="div" direction="up" delay={0.1}>
              <div className="ck-hero-eyebrow-accent">
                LIVE FOREX TRADING MASTERCLASS
              </div>
            </Reveal>

            {/* Display Headline with Underlined Brand & Accent Words */}
            <Reveal as="div" direction="up" delay={0.15}>
              <h1 className="ck-hero-headline">
                <span className="ck-headline-underlined">
                  Understand <span className="ck-text-orange">Forex</span>
                </span>
                . Read the Charts. Build Your Trading Strategy.
              </h1>
            </Reveal>

            {/* Subtitle Paragraphs */}
            <Reveal as="div" direction="up" delay={0.2}>
              <p className="ck-hero-desc-primary">
                Learn how currency markets work, understand price action, and explore technical analysis and risk management in this live Forex trading masterclass.
              </p>
              <p className="ck-hero-desc-secondary">
                Designed for beginners and aspiring traders who want to understand the fundamentals of Forex trading through a structured learning approach.
              </p>
            </Reveal>
          </div>


          {/* Two-column hero grid */}
          <div className="ck-hero-grid" id="workshop-details">

            {/* Left column: Video + Highlights */}
            <div className="ck-hero-left-col">
              <Reveal
                as="div"
                className="ck-hero-video-box"
                direction="left"
                delay={0.25}
              >
                {!isPlayingVideo ? (
                  <div
                    className="ck-video-poster-wrap"
                    onClick={() => setIsPlayingVideo(true)}
                    role="button"
                    aria-label="Play Masterclass Video Preview"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsPlayingVideo(true);
                      }
                    }}
                  >
                    <Image
                      src="/hero-video-poster.png"
                      alt="Live Forex Trading Masterclass Video Preview"
                      fill
                      className="ck-video-poster-img"
                      priority
                    />

                    <div className="ck-video-play-btn-glow">
                      <div className="ck-video-play-circle">
                        <Play
                          size={28}
                          fill="#ff6500"
                          color="#ff6500"
                          style={{ marginLeft: 4 }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/yeo6f_nzcFI?autoplay=1&rel=0&modestbranding=1"
                    title="The Safe Trader Academy - Learn Forex Trading from Scratch"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </Reveal>

              {/* Highlights directly below the video */}
              <div className="ck-video-highlights">
                <div className="ck-video-highlight-item">
                  <span className="ck-highlight-check">✓</span>
                  <div>
                    <strong>Learn Forex Basics</strong>
                    <p>Understand currency pairs and market movements.</p>
                  </div>
                </div>

                <div className="ck-video-highlight-item">
                  <span className="ck-highlight-check">✓</span>
                  <div>
                    <strong>Read Price Charts</strong>
                    <p>Explore technical analysis and price action.</p>
                  </div>
                </div>

                <div className="ck-video-highlight-item">
                  <span className="ck-highlight-check">✓</span>
                  <div>
                    <strong>Understand Risk</strong>
                    <p>Learn about stop-loss and capital protection.</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Column: Workshop Details Box Area */}
            <Reveal
              as="div"
              className="ck-hero-right-col"
              direction="right"
              delay={0.25}
            >
              <h3 className="ck-step-headline">
                Take your initial step toward becoming a{" "}
                <span className="ck-text-orange">Forex Trading expert</span>.
              </h3>

              <div className="ck-workshop-label">Workshop Details</div>

              <div className="ck-workshop-dark-box">
                <div className="ck-workshop-dark-grid">
                  <div className="ck-dark-item">
                    <div className="ck-icon-circle">
                      <CalendarDays size={20} />
                    </div>
                    <div className="ck-dark-text">
                      <small>Date:</small>
                      <strong>{WEBINAR_DATE}</strong>
                    </div>
                  </div>

                  <div className="ck-dark-item">
                    <div className="ck-icon-circle">
                      <Clock3 size={20} />
                    </div>
                    <div className="ck-dark-text">
                      <small>Time:</small>
                      <strong>{WEBINAR_TIME}</strong>
                    </div>
                  </div>

                  <div className="ck-dark-item">
                    <div className="ck-icon-circle">
                      <Monitor size={20} />
                    </div>
                    <div className="ck-dark-text">
                      <small>Workshop:</small>
                      <strong>{WEBINAR_MODE}</strong>
                    </div>
                  </div>

                  <div className="ck-dark-item">
                    <div className="ck-icon-circle">
                      <Globe size={20} />
                    </div>
                    <div className="ck-dark-text">
                      <small>Language:</small>
                      <strong>{WEBINAR_LANGUAGE}</strong>
                    </div>
                  </div>
                </div>

                {/* Price Row */}
                <div className="ck-dark-price-row">
                  <span className="ck-dark-price-label">LIVE WEBINAR ACCESS</span>
                  <span className="ck-dark-price-val">JUST ₹99</span>
                </div>

                {/* Giant Registration CTA Button */}
                <a
                  href={REGISTRATION_URL}
                  className="ck-btn-register ck-btn-hero-dark"
                >
                  <span>REGISTER NOW FOR ₹99</span>
                  <ArrowRight size={20} strokeWidth={2.5} />
                </a>

                <p className="ck-dark-trust-note">
                  <Lock size={13} className="ck-text-orange" />
                  <span>Learn the process. Understand the risks. Trade with a plan.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHAT YOU'LL LEARN (6 MODULES + CTA: BOOK MY SEAT FOR ₹99)
          ======================================================== */}
      <section className="section" id="learn" style={{ background: "#ffffff", padding: "64px 0" }}>
        <div className="container">
          <div className="ck-curriculum-container">
            <div className="ck-curriculum-header">
              <div className="section-eyebrow" style={{ justifyContent: "center" }}>
                <span className="eyebrow-line" />
                WHAT YOU&apos;LL LEARN
              </div>
              <h2>
                Explore the <span className="text-accent">Fundamentals of Forex Trading</span>
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 660, margin: "10px auto 0" }}>
                Master the essential core concepts of Forex markets through a structured, step-by-step curriculum.
              </p>
            </div>

            <div className="ck-curriculum-grid">
              {learnModules.map((mod, index) => {
                const Icon = mod.icon;
                return (
                  <Reveal
                    key={mod.number}
                    as="div"
                    className="ck-curriculum-card zoomable-card"
                    staggerIndex={index}
                    onClick={() =>
                      setZoomedCard({
                        category: "Module Syllabus",
                        number: mod.number,
                        title: mod.title,
                        description: mod.description,
                        details: mod.details,
                      })
                    }
                  >
                    <div className="ck-curriculum-icon">
                      <Icon size={24} />
                    </div>
                    <div className="ck-curriculum-content">
                      <h4>
                        {mod.number}. {mod.title}
                      </h4>
                      <p>{mod.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* CTA BOOK MY SEAT FOR ₹99 */}
            <div style={{ textAlign: "center", marginTop: 42 }}>
              <a href={REGISTRATION_URL} className="register-button" style={{ minHeight: 52, padding: "14px 36px", fontSize: 15 }}>
                <span>BOOK MY SEAT FOR ₹99</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHY ATTEND THIS MASTERCLASS? (5 STRUCTURED POINTS)
          ======================================================== */}
      <section className="section" id="why-attend" style={{ background: "#f8fbff", padding: "64px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading text-center" style={{ maxWidth: 780, margin: "0 auto 42px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-line" />
              WHY ATTEND THIS MASTERCLASS?
            </div>
            <h2>
              Start Learning Forex With a <span className="text-accent">Structured Approach</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.8 }}>
              Forex trading involves more than watching charts and predicting price movements. Understanding the market, following a defined process, and managing risk are essential parts of trading education.
            </p>
          </div>

          <div className="ck-why-attend-grid-5">
            {whyAttendPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  as="div"
                  className="ck-card-lift"
                  staggerIndex={index}
                >
                  <div className="ck-card-lift-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              );
            })}
          </div>

          <a href={REGISTRATION_URL} className="ck-midpage-cta-button">
            Register Now @ ₹99
            <ArrowRight size={19} strokeWidth={2.5} />
          </a>

        </div>
      </section>

      {/* ========================================================
          4. WHO SHOULD ATTEND? (4 AUDIENCE CARDS)
          ======================================================== */}
      <section className="section" id="who-should-attend" style={{ background: "#ffffff", padding: "64px 0" }}>
        <div className="container">
          <div className="section-heading text-center" style={{ maxWidth: 760, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-line" />
              WHO SHOULD ATTEND?
            </div>
            <h2>
              Is This Forex Masterclass <span className="text-accent">Right for You?</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              Whether you are exploring currency markets for the first time or looking to refine your disciplined trading process, this live session is crafted for you.
            </p>
          </div>

          <div className="ck-highlights-grid">
            {audiences.map((aud, index) => {
              const Icon = aud.icon;
              return (
                <Reveal
                  key={aud.title}
                  as="div"
                  className="ck-card-lift zoomable-card"
                  staggerIndex={index}
                  onClick={() =>
                    setZoomedCard({
                      category: "Who Should Attend",
                      title: aud.title,
                      description: aud.description,
                      details: aud.details,
                    })
                  }
                >
                  <div className="ck-card-lift-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{aud.title}</h3>
                  <p>{aud.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. TESTIMONIAL (3 GENUINE REVIEWS + CTA: JOIN MASTERCLASS)
          ======================================================== */}
      <section className="section" id="testimonials" style={{ background: "#f8fbff", padding: "64px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-heading text-center" style={{ maxWidth: 760, margin: "0 auto 44px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-line" />
              TESTIMONIAL
            </div>
            <h2>
              Learning That Builds a <span className="text-accent">Stronger Trading Foundation</span>
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              Hear from learners about their experience with The Safe Trader Academy, their understanding of trading concepts, and their learning journey.
            </p>
          </div>

          {/* 3 Student Testimonial Cards */}
          <div className="ck-testimonials-3-grid">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                as="div"
                className="ck-testimonial-card-item"
                staggerIndex={index}
              >
                <div className="ck-testimonial-card-top">
                  <span className="ck-testimonial-tag">{item.tag}</span>
                  <div className="ck-stars-row">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} size={15} fill="#ff6500" color="#ff6500" />
                    ))}
                  </div>
                </div>

                <div className="ck-testimonial-quote">
                  <Quote size={20} className="ck-quote-icon" />
                  <p>“{item.quote}”</p>
                </div>

                <div className="ck-testimonial-author">
                  <div className="ck-author-avatar">{item.initials}</div>
                  <div className="ck-author-info">
                    <strong>— {item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA: JOIN THE LIVE FOREX MASTERCLASS — ₹99 */}
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={REGISTRATION_URL} className="register-button" style={{ minHeight: 52, padding: "14px 36px", fontSize: 15 }}>
              <span>JOIN THE LIVE FOREX MASTERCLASS — ₹99</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          YOUTUBE COMMUNITY SHOWCASE (EXACT CHARTKINGZ STYLE)
          ======================================================== */}
      <section className="ck-youtube-section" id="community">
        <div className="container">
          <Reveal as="div" direction="up">
            <h2 className="ck-yt-heading">
              Join The Safe Trader Academy India&apos;s Most Loved and{" "}
              <span className="ck-text-orange">Highly Rated</span>
              <br />
              <span className="ck-text-orange">Forex Trading Academy</span>
            </h2>
          </Reveal>

          <div className="ck-yt-center-row">
            {/* Left: 60K+ Subscribers with Doodle Arrow */}
            <Reveal as="div" className="ck-yt-stats-left" direction="left" delay={0.15}>
              <span className="ck-yt-sub-count">60K+</span>
              <span className="ck-yt-sub-label">Subscribers</span>
              <svg
                className="ck-yt-doodle-arrow"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 15 C 30 45, 65 50, 85 25"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <path
                  d="M85 25 L 75 22 M85 25 L 82 35"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </Reveal>

            {/* Center: Realistic YouTube Channel Mock Card */}
            <Reveal as="div" className="ck-yt-card" direction="up" delay={0.2}>
              {/* YouTube Search Bar Header */}
              <div className="ck-yt-card-topbar">
                <div className="ck-yt-brand">
                  <div className="ck-yt-play-mini">
                    <Play size={8} fill="#ffffff" color="#ffffff" />
                  </div>
                  <span>YouTube</span>
                  <small>IN</small>
                </div>
                <div className="ck-yt-search-pill">
                  <span>Search</span>
                </div>
                <div className="ck-yt-signin-btn">Sign in</div>
              </div>

              {/* Channel Banner */}
              <a
                href="https://www.youtube.com/@thesafetraderacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="ck-yt-banner-wrap"
                style={{ display: "block" }}
                aria-label="Open The Safe Trader Academy YouTube channel"
              >
                <Image
                  src="/youtube-banner.jpg"
                  alt="The Safe Trader Academy YouTube Channel Banner"
                  fill
                  className="ck-yt-banner-img"
                  priority
                />
              </a>

              {/* Channel Profile Info Row */}
              <div className="ck-yt-profile-body">
                <a
                  href="https://www.youtube.com/@thesafetraderacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ck-yt-avatar-wrap"
                  aria-label="The Safe Trader Academy YouTube channel"
                >
                  <Image
                    src="/safe-trader-logo.png"
                    alt="The Safe Trader Academy"
                    width={72}
                    height={72}
                    className="ck-yt-avatar-img"
                  />
                </a>

                <div className="ck-yt-meta">
                  <h3>
                    <a
                      href="https://www.youtube.com/@thesafetraderacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      The Safe Trader Academy
                    </a>
                  </h3>
                  <p className="ck-yt-handle">
                    @thesafetraderacademy • 60K+ subscribers • 500+ videos
                  </p>
                  <p className="ck-yt-desc">
                    The Safe Trader Academy is a premier institution dedicated to disciplined Forex education, chart reading, and risk management.
                  </p>
                  <a
                    href="https://www.youtube.com/@thesafetraderacademy?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ck-yt-subscribe-btn"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right: 3D Glossy YouTube Shield Badge */}
            <Reveal as="div" className="ck-yt-badge-right" direction="right" delay={0.25}>
              <a
                href="https://www.youtube.com/@thesafetraderacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit The Safe Trader Academy on YouTube"
              >
                <Image
                  src="/youtube-3d-badge.png"
                  alt="The Safe Trader Academy Official YouTube"
                  width={140}
                  height={140}
                  className="ck-yt-3d-icon"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          COMMUNITY SEMINAR TRUST SECTION (EXACT CHARTKINGZ STYLE)
          ======================================================== */}
      <section className="ck-crowd-trust-section" aria-label="Community of traders">
        <div className="ck-crowd-overlay" />
        <div className="container ck-crowd-content">
          <Reveal as="div" direction="up">
            <span className="ck-crowd-eyebrow">From Learning to Earning</span>
            <h2 className="ck-crowd-title">
              <span className="ck-text-orange">35,000+</span> Traders Trust The Safe Trader Academy!
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ======================================================== */}
      <section className="section" id="faqs" style={{ background: "#ffffff", padding: "64px 0" }}>
        <div className="container">
          <div className="section-heading text-center" style={{ maxWidth: 760, margin: "0 auto 40px" }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-line" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2>
              Common Questions <span className="text-accent">Answered</span>
            </h2>
          </div>

          <div className="faq-grid">
            <div className="faq-column">
              {faqs
                .map((faq, index) => ({ faq, index }))
                .filter(({ index }) => index % 2 === 0)
                .map(({ faq, index }) => {
                  const isOpen = openFaq === index;
                  return (
                    <article
                      key={faq.question}
                      className={`faq-item ${isOpen ? "faq-open" : ""}`}
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
                    </article>
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
                    <article
                      key={faq.question}
                      className={`faq-item ${isOpen ? "faq-open" : ""}`}
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
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FINAL CTA (RESERVE MY SEAT — ₹99 + RISK DISCLAIMER)
          ======================================================== */}
      <section className="final-cta" id="register">
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
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
                <CalendarDays size={18} /> {WEBINAR_DATE}
              </span>
              <span>
                <Clock3 size={18} /> {WEBINAR_TIME}
              </span>
              <span>
                <Monitor size={18} /> {WEBINAR_MODE}
              </span>
              <span>
                <Wallet size={18} /> Registration: ₹99
              </span>
            </div>
          </div>

          <div className="final-cta-action">
            <a href={REGISTRATION_URL} className="ck-btn-register">
              <span>RESERVE MY SEAT — ₹99</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </a>
            <p>Build your knowledge before making trading decisions.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          RISK DISCLAIMER & FOOTER
          ======================================================== */}
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
          <span>© 2026 The Safe Trader Academy. All Rights Reserved.</span>
          <span>Learn · Practice · Trade Safely</span>
        </div>
      </footer>

      {/* ========================================================
          CLICK-TO-ZOOM MODAL WITH BLURRED BACKDROP
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
                aria-label="Close modal"
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
                <a
                  href={REGISTRATION_URL}
                  className="ck-btn-register"
                  onClick={() => setZoomedCard(null)}
                >
                  <span>RESERVE SPOT FOR ₹99</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          FLOATING STICKY COUNTDOWN BOTTOM BAR
          ======================================================== */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.aside
            className="ck-sticky-countdown-bar"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Webinar countdown registration bar"
          >
            <div className="container ck-sticky-inner">
              <div className="ck-countdown-wrap">
                <span className="ck-countdown-label">
                  Webinar Starts In:
                </span>
                <div className="ck-countdown-digits">
                  <div className="ck-countdown-unit">
                    <strong>{timeLeft.days}</strong>
                    <small>Days</small>
                  </div>
                  <span className="ck-countdown-colon">:</span>
                  <div className="ck-countdown-unit">
                    <strong>{timeLeft.hours}</strong>
                    <small>Hours</small>
                  </div>
                  <span className="ck-countdown-colon">:</span>
                  <div className="ck-countdown-unit">
                    <strong>{timeLeft.minutes}</strong>
                    <small>Mins</small>
                  </div>
                  <span className="ck-countdown-colon">:</span>
                  <div className="ck-countdown-unit">
                    <strong>{timeLeft.seconds}</strong>
                    <small>Secs</small>
                  </div>
                </div>
              </div>

              <a href={REGISTRATION_URL} className="ck-sticky-cta-btn">
                <span>Register Now @ ₹99/-</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
}
