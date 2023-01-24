import { useState } from "react";
import QRCode from "react-qr-code";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import apis from "../../helper/Apis";
import classes from "./qrcode.module.css";
import { http } from "../../helper/Http";

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
            position: toast.POSITION.TOP_RIGHT,
         });
      } else if (!isValidUrl(url)) {
         toast.error("Invalid URL given", {
            position: toast.POSITION.TOP_RIGHT,
         });
      } else {
         let res = await http(`${apis.CREATE_SHORT_URL}`, {
            link: url,
         });
         if (!res.data.status) {
            toast.error(`${res.data.message}`, {
               position: toast.POSITION.TOP_RIGHT,
            });
         }
         setQrData(res.data.data?.shortUrl);
      }
   };

   const handleChange = (event) => {
      setUrl(event.target.value);
   };

   return (
      <div className={classes.form_container}>
         <ToastContainer />

         {!qrData ? (
            <Form className={classes.form_heading}>
               <h3>Type URL OR Paste URL: </h3>
               <Form.Control
                  type="textarea"
                  placeholder="Long URL"
                  onChange={handleChange}
                  className={classes.inputarea}
                  size="lg"
               />

               <div className={classes.btn}>
                  <Button onClick={submitUrl}>Shorten URL</Button>
               </div>
            </Form>
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
