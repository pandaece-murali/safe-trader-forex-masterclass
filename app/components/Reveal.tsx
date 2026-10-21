"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom" | "none";
  as?: "div" | "article" | "aside" | "section" | "li";
  staggerIndex?: number;
  staggerStep?: number;
  alternateSide?: boolean;
  zoom?: boolean;
  initialScale?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  id?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  as = "div",
  staggerIndex,
  staggerStep = 0.08,
  alternateSide = false,
  zoom = true,
  initialScale = 0.9,
  style,
  onClick,
  id,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  // If alternateSide is enabled, alternate left and right entrances
  let effectiveDirection = direction;
  if (alternateSide && staggerIndex !== undefined) {
    effectiveDirection = staggerIndex % 2 === 0 ? "left" : "right";
  }

  const computedDelay =
    staggerIndex !== undefined ? delay + staggerIndex * staggerStep : delay;

  const offsets = {
    up: { x: 0, y: 30 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    zoom: { x: 0, y: 0 },
    none: { x: 0, y: 0 },
  };

  const Component = (motion as any)[as] || motion.div;

  const isZooming = zoom || effectiveDirection === "zoom";

  return (
    <Component
      id={id}
      className={className}
      style={style}
      onClick={onClick}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: isZooming ? initialScale : 1,
              ...offsets[effectiveDirection],
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : computedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
