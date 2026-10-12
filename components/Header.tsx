"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { LogoMark } from "./graphics";
import { useRequestAccess } from "./RequestAccess";

export function Header() {
  const [open, setOpen] = useState(false);
  const openRequest = useRequestAccess();
  const request = (topic?: string) => {
    setOpen(false);
    openRequest(topic);
  };

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <LogoMark className="logo-mark" />
          <span>
            {site.nameFirst.toUpperCase()}
            <span className="logo-accent">{site.nameAccent.toUpperCase()}</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>

        <nav id="site-nav" className={`site-nav${open ? " open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" className="btn" onClick={() => request("A project quote")}>
                Get a Quote
              </button>
            </li>
            <li>
              <button type="button" className="btn" onClick={() => request()}>
                Request Access
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
