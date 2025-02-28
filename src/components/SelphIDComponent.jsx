// eslint-disable-next-line react/prop-types
import axios from "axios";
import React, { useEffect } from "react";

export default function SelphIDComponent({ setWidget }) {
	const whatsappApiUrl = import.meta.env.VITE_WHATSAPP_API_URL;

	async function handleExtractionFinish(event) {
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		if (resultMessage == "OK") {
			await sendStatusUpdate(event.detail.detail?.result?.extractionRaw?.mrz, event.detail.detail?.result?.extractionRaw?.ocr)
			setWidget('finish');
		}
		else {
			setWidget('retry')
		}
	}
	
// 	useEffect(()=>{
// 		sendStatusUpdate("tesr","test")
//    },[])
	async function sendStatusUpdate(mrz, ocr) {
		try {
			const data = JSON.stringify({
				mrz: mrz,
				ocr: ocr
			});
			const response = await axios.post(`${whatsappApiUrl}/status_update`, {
				status: true,
				data: data,
				type: "KYC",
			}, 
			{
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			console.log("Response:", response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	}


	return (
		<facephi-selphid-widget
			language="en"
			previewCapture={true}
			cameraSelection={true}
			country="AE"
			documentType="ResidentID"
			anonymizationMode="FullResult"
			debugMode={true}
			cameraId=""
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
