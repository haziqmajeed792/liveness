// eslint-disable-next-line react/prop-types
export default function SelphiComponent({ setLivenessImage, setWidget }) {

	function handleExtractionFinish(event) {
		console.log("event",event)

		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		if (resultMessage=="OK"){
			let livenessImage = event.detail.detail?.extractionData?.bestImage?.data
			setLivenessImage(livenessImage)
			setWidget('selphid');
		} else {
			setWidget('retry');
		}
		
	}	

	return (
		<facephi-selphi-widget
			initialTip={true}
			initialTipHeight={200}
			initialTipWidth={200}
			language="en"
			stabilizationStage={true}
			cameraSelection={true}
			previewCapture={true}
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
