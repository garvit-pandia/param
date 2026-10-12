"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  /** rise: slides up. left / right: slides in from that side. fade: fades in. */
  variant?: "rise" | "left" | "right" | "fade";
  /** Wait this many milliseconds before animating, to stagger a row of items. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

// Animates its children into place the first time they scroll into view.
export function Reveal({ variant = "rise", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant}${shown ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
