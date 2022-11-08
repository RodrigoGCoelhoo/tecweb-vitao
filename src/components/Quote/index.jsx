import React from "react";
import "./styles.css";

import Like from "../../assets/like.png";

export default function Quote({ setPage }) {
  return (
    <main>
      <h1>FRASE MOTIVACIONAL</h1>
      <h3>Gostou? Então deixe seu like!</h3>
      <button className="like" onClick={() => setPage("likes")}>
        <img src={Like} alt="like" />
      </button>
    </main>
  );
}
