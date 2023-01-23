import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import UrlPage from "../pages/UrlPage";
import NotFound from "../component/404";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/forU/:urlCode" element={<UrlPage />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;
