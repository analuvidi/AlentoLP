import React from "react";
import { asset } from "../data";

export default function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="wrap grid">
        <h2 id="intro-title" className="intro-statement">
          Ninguém descansa com pressa. Por isso os horários do Alento têm folga
          antes e depois, as salas são só quatro e ninguém vai te oferecer um
          pacote no meio da massagem.
        </h2>
        <figure className="intro-photo">
          <img
            src={asset("media/patio.webp")}
            alt="Pátio interno com plantas altas, um banco de madeira e um espelho de água"
            width="1100"
            height="1375"
            loading="lazy"
          />
        </figure>
        <div className="intro-note">
          <p>
            Você chega, toma um chá e conta como está. O resto a gente ajusta na
            hora: pressão, temperatura, conversa ou silêncio.
          </p>
          <a className="text-link" href="#tratamentos">
            Ver tratamentos e preços
          </a>
        </div>
      </div>
    </section>
  );
}
