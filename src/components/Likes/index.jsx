import React from "react";
import QuoteItem from "../QuoteItem";
import "./styles.css";

export default function Likes({ setLoggedIn, setEmail }) {
  return (
    <main>
      <h1>Frases curtidas</h1>
      <QuoteItem quote="Frase motivacional aoskaspok" />
    </main>
  );
}
