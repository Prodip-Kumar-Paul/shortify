import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { httpGet } from "../helper/Http";
import apis from "../helper/Apis";

const UrlPage = () => {
   let { urlCode } = useParams();

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
   }, [urlCode]);

   //  const notify = () => {

   //  };

   return (
      <div>
         <ToastContainer />
         <h1>value = {urlCode}</h1>;
      </div>
   );
};

export default UrlPage;
