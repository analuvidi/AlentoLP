import React, { useEffect, useRef, useState } from "react";
import { hours, treatments } from "../data";

const periods = ["Manhã", "Tarde", "Noite", "Tanto faz"];
const empty = { treatment: "", period: "Tanto faz", name: "", phone: "" };

const maskPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  const area = `(${digits.slice(0, 2)}) `;
  const split = digits.length === 11 ? 7 : 6;
  return digits.length <= split
    ? area + digits.slice(2)
    : `${area}${digits.slice(2, split)}-${digits.slice(split)}`;
};

const validators = {
  treatment: (value) => (value ? "" : "Escolha um tratamento."),
  name: (value) =>
    value.trim().length >= 2 ? "" : "Diga como podemos te chamar.",
  phone: (value) =>
    value.replace(/\D/g, "").length >= 10
      ? ""
      : "Confira o telefone, com DDD.",
};

export default function Booking({ picked }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sentTo, setSentTo] = useState("");
  const form = useRef(null);
  const done = useRef(null);

  useEffect(() => {
    if (picked) {
      setValues((current) => ({ ...current, treatment: picked }));
      setErrors((current) => ({ ...current, treatment: "" }));
      setSentTo("");
    }
  }, [picked]);

  useEffect(() => {
    if (sentTo) done.current?.focus();
  }, [sentTo]);

  const change = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validators[field](value),
      }));
    }
  };

  const check = (field) =>
    setErrors((current) => ({
      ...current,
      [field]: validators[field](values[field]),
    }));

  const submit = (event) => {
    event.preventDefault();
    const found = Object.fromEntries(
      Object.entries(validators).map(([field, rule]) => [
        field,
        rule(values[field]),
      ]),
    );
    setErrors(found);
    const first = Object.keys(validators).find((field) => found[field]);
    if (first) {
      form.current?.elements[first]?.focus();
      return;
    }
    setSentTo(values.name.trim().split(" ")[0]);
    setValues(empty);
  };

  const describe = (field) =>
    errors[field]
      ? { "aria-invalid": true, "aria-describedby": `erro-${field}` }
      : {};
  const error = (field) =>
    errors[field] ? (
      <span className="field-error" id={`erro-${field}`}>
        {errors[field]}
      </span>
    ) : null;

  return (
    <section className="booking" id="agendar" aria-labelledby="booking-title">
      <div className="wrap grid">
        <div className="booking-copy">
          <h2 id="booking-title">Escolha um horário com folga.</h2>
          <p>
            Conte o que você quer e em que período. A recepção confirma o dia
            com você.
          </p>
          <dl>
            <div>
              <dt>Horário</dt>
              <dd>{hours}</dd>
            </div>
            <div>
              <dt>Remarcação</dt>
              <dd>Sem custo até 24 horas antes</dd>
            </div>
          </dl>
        </div>

        {sentTo ? (
          <div className="booking-done" role="status">
            <h3 ref={done} tabIndex={-1}>
              Pronto, {sentTo}.
            </h3>
            <p>
              Em um spa de verdade, a recepção te chamaria em até duas horas.
              Como o Alento é um projeto de portfólio, nenhum dado foi enviado.
            </p>
            <button
              type="button"
              className="text-button"
              onClick={() => setSentTo("")}
            >
              Fazer outro pedido
            </button>
          </div>
        ) : (
          <form
            className="booking-form"
            ref={form}
            onSubmit={submit}
            noValidate
          >
            <label className="field">
              <span>Tratamento</span>
              <select
                name="treatment"
                value={values.treatment}
                onChange={(event) => change("treatment", event.target.value)}
                onBlur={() => check("treatment")}
                {...describe("treatment")}
              >
                <option value="">Selecione</option>
                {treatments.map((group) => (
                  <optgroup label={group.name} key={group.id}>
                    {group.items.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}, {item.minutes} min, R$ {item.price}
                      </option>
                    ))}
                  </optgroup>
                ))}
                <option value="ajuda">
                  Ainda não sei, quero ajuda para escolher
                </option>
              </select>
              {error("treatment")}
            </label>

            <fieldset className="field">
              <legend>Melhor período</legend>
              <div className="periods">
                {periods.map((period) => (
                  <label key={period}>
                    <input
                      type="radio"
                      name="period"
                      value={period}
                      checked={values.period === period}
                      onChange={() => change("period", period)}
                    />
                    <span>{period}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="field">
              <span>Nome</span>
              <input
                name="name"
                type="text"
                autoComplete="given-name"
                value={values.name}
                onChange={(event) => change("name", event.target.value)}
                onBlur={() => check("name")}
                {...describe("name")}
              />
              {error("name")}
            </label>

            <label className="field">
              <span>Telefone com DDD</span>
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                value={values.phone}
                onChange={(event) =>
                  change("phone", maskPhone(event.target.value))
                }
                onBlur={() => check("phone")}
                {...describe("phone")}
              />
              {error("phone")}
            </label>

            <div className="booking-submit">
              <button type="submit" className="cta cta-solid">
                Pedir horário
              </button>
              <small>Projeto de portfólio: nenhum dado é enviado.</small>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
