import React, { useEffect } from "react";
import "../Style/style.css"; // Import the CSS file

export default function Finish({ setWidget }) {
  const redirectUrl = import.meta.env.VITE_WHATSAPP_REDIRECT

  useEffect(() => {
    if (redirectUrl) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, 3000); // Redirect after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [redirectUrl]);


  return (
    <div className="retry-container">
      <div className="retry-card">
        <div className="success-icon">✔</div>
        <h1>Authentication Completed</h1>
        <p>Redirecting...</p>
        {/* <button onClick={() => setWidget("selphi")}>Finish</button> */}
      </div>
    </div>
  );
}
