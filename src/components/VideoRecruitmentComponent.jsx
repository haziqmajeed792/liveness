// eslint-disable-next-line react/prop-types
export default function VideoRecruitmentComponent({ setWidget }) {

	// function handleExtractionFinish(event) {
	// 	console.log("event",event)
	// 	const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
	// 	console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
	// 	setWidget('selphid');
	// }	

	return (
		<facephi-video-recruitment-widget
        full-screen="true"
        language="en"
        ></facephi-video-recruitment-widget>
	);
}
