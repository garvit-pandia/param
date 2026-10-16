"use client";

import { useEffect, useState } from "react";
import { RequestButton } from "./RequestAccess";

// A bar pinned to the bottom of phone screens once the hero has scrolled away,
// so the two main actions are always one tap from anywhere on the page.
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // `inert` keeps the hidden bar out of the tab order and away from screen readers.
  return (
    <div className={`mobile-cta${show ? " show" : ""}`} inert={!show}>
      <a href="#services" className="btn btn-ghost">
        Our services
      </a>
      <RequestButton className="btn btn-primary">Start a project</RequestButton>
    </div>
  );
}
