"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { LogoMark } from "./graphics";
import { useRequestAccess } from "./RequestAccess";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const openRequest = useRequestAccess();

  // Escape closes the phone menu and puts focus back on the menu button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <LogoMark className="logo-mark" />
          <span>
            {site.nameFirst} <span className="logo-accent">{site.nameAccent}</span>
          </span>
        </a>

        <button
          ref={toggle}
          type="button"
          className="icon-btn menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav id="site-nav" aria-label="Main" className={`site-nav${open ? " open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-primary"
            aria-haspopup="dialog"
            onClick={() => {
              setOpen(false);
              openRequest();
            }}
          >
            Start a project <ArrowRight aria-hidden />
          </button>
        </nav>
      </div>
    </header>
  );
}
