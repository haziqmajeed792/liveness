import { useState } from 'react'
import SelphiComponent from './components/SelphiComponent'
import SelphIDComponent from './components/SelphIDComponent'
import VideoRecruitmentComponent from './components/VideoRecruitmentComponent';
import Retry from './components/Retry';
import Finish from './components/Finish';
import Template from './Template/Template';

function App() {
  const [widget, setWidget] = useState('selphi');
  const [faceImage, setFaceImage] = useState();
  const [livenessImage, setLivenessImage] = useState();
  const [mrz, setMrz] = useState();
  const [ocr, setOcr] = useState();
  const licenseKey = import.meta.env.VITE_LICENSE_KEY;
//   console.log(licenseKey);


  function handleEmitOperationId(event) {
	const result = event.detail;
	console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitOperationId: ${result}`);
}

  return (
    <main>
        

			<Template>
			<section className="sdk-section">
			<facephi-sdk-provider 
				apiKey={licenseKey} 
				steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
				disabled
				debug={false}
				language="en"
				type="ONBOARDING"
				onemitOperationId={handleEmitOperationId}
			>
				
				{widget === 'selphi' && <SelphiComponent setLivenessImage={setLivenessImage} setWidget={setWidget} />}
				{widget === 'selphid' && <SelphIDComponent setMrz={setMrz} setOcr={setOcr} setFaceImage={setFaceImage} setWidget={setWidget} />}
				{widget === 'videoRecruitment' && <VideoRecruitmentComponent setWidget={setWidget} />}
				{widget === 'retry' && <Retry setWidget={setWidget} />}	
				{widget === 'finish' && <Finish mrz={mrz} ocr={ocr} livenessImage={livenessImage} faceImage={faceImage} setWidget={setWidget}/>}	
				</facephi-sdk-provider> 
			</section>
			</Template>
		</main>
  )
}

export default App
