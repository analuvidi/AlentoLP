import React, { useEffect, useRef, useState } from "react";
import { navigation } from "../data";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className={`site-header ${scrolled || open ? "has-line" : ""}`}
    >
      <div className="wrap header-row">
        <a className="header-logo" href="#inicio" aria-label="Alento, início">
          <Logo />
        </a>
        <nav
          id="navegacao"
          aria-label="Principal"
          className={`nav ${open ? "is-open" : ""}`}
        >
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="cta cta-small"
          href="#agendar"
          onClick={() => setOpen(false)}
        >
          Agendar
        </a>
        <button
          ref={toggle}
          type="button"
          className="nav-toggle"
          aria-controls="navegacao"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
    </header>
  );
}
