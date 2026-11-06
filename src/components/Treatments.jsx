import React, { useState } from "react";
import { treatments } from "../data";

export default function Treatments({ onPick }) {
  const [active, setActive] = useState(treatments[0].id);

  return (
    <section
      className="treatments"
      id="tratamentos"
      aria-labelledby="treatments-title"
    >
      <div className="wrap grid">
        <div className="treatments-preview" aria-hidden="true">
          {treatments.map((group) => (
            <img
              key={group.id}
              className={group.id === active ? "is-active" : ""}
              src={group.image}
              alt=""
              width={group.width}
              height={group.height}
              loading="lazy"
            />
          ))}
        </div>

        <div className="treatments-list">
          <h2 id="treatments-title">Tratamentos</h2>
          <p className="treatments-lead">
            Preço fechado, sem taxa de sala. Todos incluem chá na chegada e
            vinte minutos de descanso no final.
          </p>

          {treatments.map((group) => (
            <div
              className="treatment-group"
              key={group.id}
              onMouseEnter={() => setActive(group.id)}
              onFocus={() => setActive(group.id)}
            >
              <img
                className="treatment-group-photo"
                src={group.image}
                alt={group.alt}
                width={group.width}
                height={group.height}
                loading="lazy"
              />
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li className="treatment" key={item.id}>
                    <div className="treatment-name">
                      <strong>{item.name}</strong>
                      <span>{item.note}</span>
                    </div>
                    <span className="treatment-meta">{item.minutes} min</span>
                    <span className="treatment-meta">R$ {item.price}</span>
                    <a
                      className="treatment-book"
                      href="#agendar"
                      aria-label={`Reservar ${item.name}`}
                      onClick={() => onPick(item.id)}
                    >
                      Reservar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
