import { BrowserRouter, Routes, Route } from "react-router-dom";

//import NotFound from "../pages/404";

const AllRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/forU?urlCode=" element={<Home />} />
                {/* <Route path="/404" element={<NotFound />} /> */}
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default AllRoutes;