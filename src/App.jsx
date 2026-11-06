import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Treatments from "./components/Treatments";
import Breath from "./components/Breath";
import Visit from "./components/Visit";
import Voices from "./components/Voices";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  // Escolher "Reservar" em um tratamento já deixa o formulário preenchido.
  const [picked, setPicked] = useState("");

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Intro />
        <Treatments onPick={setPicked} />
        <Breath />
        <Visit />
        <Voices />
        <Faq />
        <Booking picked={picked} />
      </main>
      <Footer />
    </>
  );
}
