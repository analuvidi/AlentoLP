import React from "react";
import { hours, navigation } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-row">
          <nav aria-label="Rodapé">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
            <a href="#agendar">Agendar</a>
          </nav>
          <p>{hours}</p>
          <p className="footer-note">
            Alento é uma marca fictícia, criada como projeto de portfólio por
            Ana Luiza Vidigal. Preços, horários e depoimentos são ilustrativos.
            Fotos do Unsplash.
          </p>
        </div>
        <Logo className="footer-logo" />
      </div>
    </footer>
  );
}
