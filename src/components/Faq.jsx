import React from "react";
import { faqs } from "../data";

export default function Faq() {
  return (
    <section className="faq" id="perguntas" aria-labelledby="faq-title">
      <div className="wrap grid">
        <h2 id="faq-title">Perguntas de quem vem pela primeira vez</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span className="faq-sign" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
