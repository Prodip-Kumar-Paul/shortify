import { useState } from "react";
import QRCode from "react-qr-code";
import apis from "../helper/Apis";
import { http } from "../helper/Http";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QRGenerator = () => {
   const [url, setUrl] = useState("");
   const [qrData, setQrData] = useState("");

   const isValidUrl = (urlString) => {
      try {
         return Boolean(new URL(urlString));
      } catch (e) {
         return false;
      }
   };

   const submitUrl = async (e) => {
      e.preventDefault();
      if (!url) {
         toast.error("No URL given", {
            position: toast.POSITION.TOP_LEFT,
         });
      } else if (!isValidUrl(url)) {
         toast.error("Invalid URL given", {
            position: toast.POSITION.TOP_LEFT,
         });
      } else {
         let res = await http(`${apis.CREATE_SHORT_URL}`, {
            link: url,
         });
         if (!res.data.status) {
            toast.error(`${res.data.message}`, {
               position: toast.POSITION.TOP_LEFT,
            });
         }
         // console.log(res.data.data?.shortUrl);
         setQrData(res.data.data?.shortUrl);
      }
   };

   const handleChange = (event) => {
      setUrl(event.target.value);
   };

   return (
      <div className="App">
         <ToastContainer />

         {!qrData ? (
            <form onSubmit={submitUrl}>
               <label>Please Enter The URL: </label>
               <input value={url} onChange={handleChange} name="url" />

               <button type="submit">Submit</button>
            </form>
         ) : (
            <div>
               <label>Your QR Code is: </label>
               <QRCode value={qrData} />
            </div>
         )}
      </div>
   );
};

export default QRGenerator;
