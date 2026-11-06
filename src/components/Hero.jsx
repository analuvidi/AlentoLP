import React, { useEffect, useRef } from "react";
import { asset, hours } from "../data";

// A foto começa como um círculo e se abre com a rolagem, como quem enche o
// pulmão. Com movimento reduzido, ela fica parada no estado inicial.
export default function Hero() {
  const stage = useRef(null);

  useEffect(() => {
    const element = stage.current;
    const section = element.parentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const paint = () => {
      frame = 0;
      const range = section.offsetHeight - element.offsetHeight;
      const raw =
        reduced.matches || range <= 0
          ? 0
          : Math.min(1, Math.max(0, window.scrollY / range));
      const eased = raw * raw * (3 - 2 * raw);
      element.style.setProperty("--open", eased.toFixed(4));
      element.classList.toggle("is-opening", raw > 0);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    reduced.addEventListener("change", request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduced.removeEventListener("change", request);
    };
  }, []);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-stage" ref={stage}>
        <div className="wrap hero-copy">
          <h1 id="hero-title">
            Respire fundo.
            <br />A gente cuida
            <br />
            do resto.
          </h1>
          <p>
            Massagens, cuidados com a pele e banhos de imersão, com tempo de
            sobra antes e depois.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#agendar">
              Agendar um horário
            </a>
            <span>{hours}</span>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src={asset("media/banho.webp")}
            srcSet={`${asset("media/banho-1200.webp")} 1200w, ${asset("media/banho.webp")} 2200w`}
            sizes="100vw"
            alt="Banheira clara em um banheiro de paredes de cimento queimado, com luz natural e uma palmeira ao fundo"
            width="2200"
            height="1466"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
