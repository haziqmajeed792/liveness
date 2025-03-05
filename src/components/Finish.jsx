import React, { useEffect, useState } from "react";
import "../Style/style.css";
import {sendStatusUpdate, authenticateFacial} from '../utility/helper'

export default function Finish({ mrz, ocr, livenessImage, faceImage, setWidget }) {
  const [Authentication, setAuthentication] = useState(false)
  const redirectUrl = import.meta.env.VITE_WHATSAPP_REDIRECT
  const resdirectTime = import.meta.env.VITE_WHATSAPP_REDIRECT_TIME;


  useEffect(()=>{
    authenticateFacial(faceImage, livenessImage).then((result)=>{
      if (result){
        sendStatusUpdate(mrz, ocr).then((result2)=>{
          console.log(result2)
          if (result2) {
            setAuthentication(true)
          } else {
            setWidget("retry")
          }
        })
      } else {
        setWidget("retry")
      }

    })
  },[])


  useEffect(() => {

    if (redirectUrl && Authentication) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, resdirectTime);

      return () => clearTimeout(timer);
    }
  }, [redirectUrl, Authentication]);




  return (
    <div className="retry-container">
      <div className="retry-card">
      {Authentication ? (
                <div className="success-icon">✔</div>
            ) : (
                <div className="loading-spinner"></div>
            )}
        <h1>{Authentication ? "Authentication Completed" : "Authenticating..."}</h1>
        {Authentication ? <p>Redirecting...</p> : <></>}
        {/* <button onClick={() => setWidget("selphi")}>Finish</button> */}
      </div>
    </div>
  );
}
