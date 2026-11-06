import React from "react";
import { voices } from "../data";

export default function Voices() {
  return (
    <section className="voices" aria-label="Depoimentos">
      <div className="wrap grid">
        {voices.map((voice) => (
          <figure className="voice" key={voice.id}>
            <blockquote>“{voice.text}”</blockquote>
            <figcaption>
              {voice.author}, {voice.detail}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
