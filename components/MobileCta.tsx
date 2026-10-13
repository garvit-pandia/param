"use client";

import { useEffect, useState } from "react";
import { RequestButton } from "./RequestAccess";

// A bar pinned to the bottom of phone screens once the hero has scrolled away,
// so the two main actions are always one tap from anywhere on the page.
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-cta${show ? " show" : ""}`} aria-hidden={!show}>
      <a href="#services" className="btn btn-ghost" tabIndex={show ? 0 : -1}>
        Our Services
      </a>
      <RequestButton className="btn" tabIndex={show ? 0 : -1}>
        Contact Us
      </RequestButton>
    </div>
  );
}
