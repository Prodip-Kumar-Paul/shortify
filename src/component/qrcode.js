import axios from "axios";
import { useState } from "react";
import QRCode from "react-qr-code";

const qrcodecomponent = () => {
    const [url, setUrl] = useState("");
    const [qrData, setQrData] = useState("");
    const submitUrl = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (!url) {
            return;
        } else {
            let res = await axios.post("https://smiling-tick-pocketbook.cyclic.app/api/v1/url/createShortUrl", {
                link: url
            });
            // console.log(res);
            // if (!res) {
            //   console.log("something going wrong");
            // }
            if (res.status) {
                console.log(res.data.data.shortUrl);
                setQrData(res.data.data.shortUrl);
                console.log(qrData);
            }
        }

    }
    const handleChange = (event) => {
        console.log(event.target.value);
        setUrl(event.target.value);
    }
    return (
        <div className="App">
            {!qrData ? <form onSubmit={submitUrl} >
                <label>Please Enter The URL: </label>
                <input value={url} onChange={handleChange} name="url" />

                <button type="submit">Submit</button>
            </form> :
                <div>
                    <label>Your QR Code is: </label>
                    <QRCode value={qrData} />
                </div>
            }
        </div>
    );
}

export default qrcodecomponent;
