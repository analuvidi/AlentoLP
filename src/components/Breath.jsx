import React, { useEffect, useState } from "react";

const CYCLES = 6;
const INHALE = 4000;
const EXHALE = 6000;

// Seis ciclos de 4s + 6s dão exatamente um minuto.
export default function Breath() {
  const [state, setState] = useState("idle"); // idle | running | done
  const [phase, setPhase] = useState("in");
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    if (state !== "running") return undefined;
    const delay = phase === "in" ? INHALE : EXHALE;
    const timer = setTimeout(() => {
      if (phase === "in") {
        setPhase("out");
      } else if (cycle >= CYCLES) {
        setState("done");
      } else {
        setCycle(cycle + 1);
        setPhase("in");
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [state, phase, cycle]);

  const start = () => {
    setCycle(1);
    setPhase("in");
    setState("running");
  };

  const running = state === "running";
  const label = !running ? "" : phase === "in" ? "Inspire" : "Solte";
  const discState = running ? `is-${phase}` : state === "done" ? "is-in" : "";

  return (
    <section className="breath" aria-labelledby="breath-title">
      <div className="wrap grid">
        <div className="breath-copy">
          <h2 id="breath-title">
            {state === "done"
              ? "Foi só um minuto."
              : "Um minuto. Agora, se quiser."}
          </h2>
          <p>
            {state === "done"
              ? "Imagine uma hora inteira."
              : "Seis respirações lentas, aqui mesmo nesta página. Quatro segundos para dentro, seis para fora."}
          </p>
          {state === "idle" && (
            <button type="button" className="cta" onClick={start}>
              Começar
            </button>
          )}
          {running && (
            <button
              type="button"
              className="cta"
              onClick={() => setState("idle")}
            >
              Parar
            </button>
          )}
          {state === "done" && (
            <div className="breath-after">
              <a className="cta" href="#agendar">
                Agendar um horário
              </a>
              <button type="button" className="text-button" onClick={start}>
                Repetir
              </button>
            </div>
          )}
        </div>
        <div className="breath-stage">
          <div className={`breath-disc ${discState}`} />
          <p className="breath-label" aria-live="polite">
            {label}
          </p>
          {running && (
            <p className="breath-count">
              {cycle} de {CYCLES}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
