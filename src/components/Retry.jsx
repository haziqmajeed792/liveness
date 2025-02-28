import React from "react";
import "../Style/style.css"; // Import the CSS file

export default function Retry({ setWidget }) {
  return (
    <div className="retry-container">
      <div className="retry-card">
        <div className="retry-icon">✖</div>
        <h1>Authentication Failed</h1>
        <p>Something went wrong. Please try again.</p>
        <button onClick={() => setWidget("selphi")}>Retry</button>
      </div>
    </div>
  );
}
