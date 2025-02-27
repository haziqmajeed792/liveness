// eslint-disable-next-line react/prop-types
import axios from "axios";
import { useState } from "react";

export default function SelphIDComponent({ setWidget }) {

	const [data, setData] = useState()
	const [ocr, setOcr] = useState()
	
	function handleExtractionFinish(event) {
		console.log("event", event)
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log("resultMessage", event.detail.detail?.result?.extractionData)
		console.log("resultMessage", event.detail.detail?.result?.extractionData)
		console.log("resultMessage", event.detail.detail?.result?.extractionRaw?.mrz)
		console.log("resultMessage", event.detail.detail?.result?.extractionRaw?.ocr)
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		// setWidget('finish');
		// sendStatusUpdate(event.detail.detail?.result?.extractionRaw?.mrz, event.detail.detail?.result?.extractionRaw?.ocr)
		setData(event.detail.detail?.result?.extractionRaw?.mrz)
		setOcr(event.detail.detail?.result?.extractionRaw?.ocr)
	}
	

	async function sendStatusUpdate(mrz, ocr) {
		try {

			const response = await axios.post("https://f6ba-88-235-21-119.ngrok-free.app/status_update", {
				Status: true,
				Data: {},
				Type: "KYC",
			}, {
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
		<>
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
		<div>
			<div>
			{data}
			</div>
			<div>
			{ocr}
			</div>
		</div>
		</>
	);
}
