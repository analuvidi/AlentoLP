import React from "react";
import { logo } from "./logoPaths";

export default function Logo({ className = "" }) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox={logo.viewBox}
      role="img"
      aria-label="Alento"
    >
      <path fill="currentColor" d={logo.letters} />
      <path className="logo-crescent" fillRule="evenodd" d={logo.crescent} />
    </svg>
  );
}
