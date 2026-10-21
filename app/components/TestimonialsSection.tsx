"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface TestimonialItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "review-1",
    initials: "AB",
    name: "Alekhya Balabhadra",
    role: "Student review",
    quote:
      "I highly recommend The Safe Trader Academy to anyone who wants to learn trading. The mentors and staff are extremely patient, supportive, and dedicated. No matter how many times you ask, they explain clearly until you understand. The live trading sessions and real-time guidance make learning truly practical.",
    stars: 5,
  },
  {
    id: "review-2",
    initials: "VA",
    name: "Varshni Arun",
    role: "Student review",
    quote:
      "Joining The Safe Trader Academy has been one of the best decisions in my trading journey. The training is practical, well-structured, and helps build real confidence and discipline. Special appreciation to Mallinath Sir for his exceptional price action and technical analysis knowledge.",
    stars: 5,
  },
  {
    id: "review-3",
    initials: "DS",
    name: "Dinesh Sharma",
    role: "Student review",
    quote:
      "I did not have any knowledge about financial markets and was getting scared, but The Safe Trader Academy simplified every trading concept from scratch and gave me the best trading strategy for Forex trading. Highly recommended for beginners.",
    stars: 5,
  },
  {
    id: "review-4",
    initials: "SM",
    name: "Sai Mudiraj",
    role: "Student review",
    quote:
      "It is a great learning place for beginners in trading. Sir and staff are very friendly. After the course you can see a noticeable difference in your chart reading. I came to learn the fundamentals and fell in love with Forex market trading.",
    stars: 5,
  },
  {
    id: "review-5",
    initials: "RN",
    name: "Rekha N",
    role: "Student review",
    quote:
      "They explain concepts in a simple and clear manner, so even someone new to trading can understand easily. The strategies, daily guidance, and support helped me learn the basics with discipline and trade with confidence.",
    stars: 5,
  },
  {
    id: "review-6",
    initials: "UJ",
    name: "Uday Jass",
    role: "Student review",
    quote:
      "My experience with The Safe Trader Academy was very good. The teaching is highly informative, clear, and taught with a lot of patience. One of the best parts is that you can revisit and learn the lessons until you fully understand the concepts.",
    stars: 5,
  },
  {
    id: "review-7",
    initials: "RS",
    name: "Rajiya Shaik",
    role: "Student review",
    quote:
      "The concepts are taught very clearly right from the fundamentals with a strong focus on hands-on chart practice. I recommend The Safe Trader Academy to everyone who wants to become a disciplined and safe trader.",
    stars: 5,
  },
];

// Duplicate items for infinite seamless continuous marquee
const MARQUEE_ITEMS = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Top Header (Exact Match to PandaeCe Reference) */}
        <div className="panda-section-top">
          <div className="panda-heading-left">
            <div className="panda-eyebrow">
              <span className="panda-eyebrow-line" /> WORD FROM THE FIELD
            </div>
            <h2 className="panda-section-heading">What Our Students Say</h2>
          </div>
          <p className="panda-section-aside">
            Real experiences. Trusted mentors.
            <br />
            Meaningful trading results.
          </p>
        </div>

        {/* Continuous Marquee Scrolling Strip */}
        <div
          className="panda-testimonial-marquee"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className={`panda-testimonial-track ${isPaused ? "is-paused" : ""}`}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {MARQUEE_ITEMS.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="panda-testimonial-card"
              >
                {/* Review Header: Avatar, Name & Info, Google G Mark */}
                <div className="panda-review-header">
                  <div className="panda-reviewer-left">
                    <div className="panda-reviewer-avatar" aria-hidden="true">
                      {item.initials}
                    </div>
                    <div className="panda-reviewer-info">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <span className="panda-google-mark" aria-label="Google Review">
                    G
                  </span>
                </div>

                {/* Rating Stars */}
                <div
                  className="panda-review-stars"
                  aria-label={`${item.stars} out of 5 stars`}
                >
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} className="panda-star">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="panda-quote">“{item.quote}”</blockquote>

                {/* Card Footer: Green Dot + Client feedback */}
                <div className="panda-review-footer">
                  <span className="panda-source-dot" aria-hidden="true" />
                  <span>Student feedback</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="testimonial-cta-wrap">
          <a href="#register" className="register-button testimonial-cta-btn">
            JOIN THE LIVE FOREX MASTERCLASS — ₹99
            <ArrowRight size={19} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
