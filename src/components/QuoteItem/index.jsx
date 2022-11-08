import React from "react";
import "./styles.css";

import Delete from "../../assets/delete.png";

export default function QuoteItem({ quote }) {
  return (
    <div className="quote-item">
      <button className="delete-btn">
        <img src={Delete} alt="delete" className="delete-img" />
      </button>
      <span>{quote}</span>
    </div>
  );
}
