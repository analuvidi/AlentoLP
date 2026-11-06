import React from "react";
import { asset, visit } from "../data";

export default function Visit() {
  const total = visit.reduce((sum, step) => sum + step.minutes, 0);

  return (
    <section className="visit" id="visita" aria-labelledby="visit-title">
      <div className="wrap grid">
        <div className="visit-head">
          <h2 id="visit-title">Uma hora aqui dura uma hora e meia.</h2>
          <p>
            Reservamos {total} minutos para cada tratamento de 60. A diferença é
            o que faz o efeito durar até a hora de dormir.
          </p>
        </div>
        <figure className="visit-photo">
          <img
            src={asset("media/pedras.webp")}
            alt="Pedras quentes alinhadas sobre as costas de uma pessoa deitada"
            width="1600"
            height="680"
            loading="lazy"
          />
        </figure>

        <ol className="visit-steps">
          {visit.map((step) => (
            <li
              key={step.id}
              className={`visit-step is-${step.id}`}
              style={{ "--minutes": step.minutes }}
            >
              <span className="visit-bar" aria-hidden="true" />
              <div className="visit-text">
                <span className="visit-minutes">{step.minutes} min</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
