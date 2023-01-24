import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./routes/routes.js";
import "./App.css";
import GeneralNavbar from "./component/navbar/NavBar.js";
import Layout from "./component/layout/Layout";
import Footer from "./component/footer/Footer.js";

function App() {
   return (
      <BrowserRouter>
         <Suspense fallback={<div>Loading...</div>}>
            <GeneralNavbar />
            <Layout>
               <AllRoutes />
            </Layout>
            <Footer />
         </Suspense>
      </BrowserRouter>
   );
}

export default App;
