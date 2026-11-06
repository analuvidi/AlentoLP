import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/spectral/200.css";
import "@fontsource/spectral/300.css";
import "@fontsource-variable/hanken-grotesk";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
