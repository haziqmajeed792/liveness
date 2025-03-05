import axios from "axios";
const whatsappApiUrl = import.meta.env.VITE_WHATSAPP_API_URL;

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

        if (response.status === 200 && response.data) {
            console.log(response);
            return true;
        } else {
            console.error("Status Update Failed", response.data);
            return false;
        }
    } catch (error) {
        console.error("Error during Status Update:", error.message || error);
        return false;
    }
}


async function authenticateFacial(token1, token2) {
    try {
        const response = await axios.post(`${whatsappApiUrl}/authenticateFacial`, {
            token1: token1,
            token2: token2,
            method: 1,
        }, 
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200 && response.data.serviceResultLog == "Positive") {
            console.log(response);
            return true;
        } else {
            console.error("Authentication failed:", response.data);
            return false;
        }
    } catch (error) {
        console.error("Error during authentication:", error.message || error);
        return false;
    }
}



export {sendStatusUpdate, authenticateFacial}