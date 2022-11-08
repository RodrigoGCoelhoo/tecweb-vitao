import React from "react";
import "./styles.css";

export default function Login({ setLoggedIn, setEmail }) {
  return (
    <main>
      <h1>Qual seu e-mail?</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <button className="access" onClick={() => setLoggedIn(true)}>
        ACESSAR
      </button>
    </main>
  );
}
