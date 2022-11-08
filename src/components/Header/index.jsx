import React from "react";
import "./styles.css";
import Logo from "../../assets/logo.png";

export default function Header({ loggedIn, email, setPage }) {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <h1>A sua motivação diária</h1>

      {loggedIn && (
        <div className="user-info">
          <h4>{email}</h4>
          <button className="likes" onClick={() => setPage("likes")}>
            CURTIDAS
          </button>
        </div>
      )}
    </header>
  );
}
