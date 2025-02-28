import React, { useEffect } from "react";
import "../Style/style.css";

export default function Finish({ setWidget }) {
  const redirectUrl = import.meta.env.VITE_WHATSAPP_REDIRECT
  const resdirectTime = import.meta.env.VITE_WHATSAPP_REDIRECT_TIME;
  useEffect(() => {
    if (redirectUrl) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, resdirectTime);

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
