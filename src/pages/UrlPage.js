import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { httpGet } from "../helper/Http";
import apis from "../helper/Apis";

const UrlPage = () => {
   let { urlCode } = useParams();
   let [url, setUrl] = useState("");

   const fetchDetails = useCallback(async () => {
      try {
         let res = await httpGet(`${apis.GET_SHORT_URL}?urlCode=${urlCode}`);
         console.log(res.data.data.longUrl);
         if (!res.status) {
            toast.error("Some error occured !", {
               position: toast.POSITION.TOP_LEFT,
            });
         }
         toast.success("Actual URL fetched successfully !", {
            position: toast.POSITION.TOP_CENTER,
         });

         window.location.replace(`${res.data.data.longUrl}`);
         setUrl(res.data.data.longUrl);
      } catch (err) {
         console.log(err);
      }
   }, [urlCode]);

   /**
    * @description: This is the initial effect to fetch the short url details
    */

   useEffect(() => {
      console.log(urlCode);
      fetchDetails().catch((err) => {
         console.log(err);
      });
      // console.log(res);
   }, [urlCode, fetchDetails]);

   return (
      <div>
         <ToastContainer />
         <div className="text-center">
            <h1>Hold On, You will be Redirected soon :)</h1>
            <h3>OR click the link below</h3>
            <Link to={url}>Go to actual site !</Link>
         </div>
      </div>
   );
};

export default UrlPage;
