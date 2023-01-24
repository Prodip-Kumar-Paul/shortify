import { Navbar, Container } from "react-bootstrap";
import classes from "./navbar.module.css";

const GeneralNavbar = () => {
   return (
      <Navbar bg="light" expand="lg" className={classes.navbar}>
         <Container>
            <Navbar.Brand href="/" className={classes.heading}>
               <h1>Shortify</h1>
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
};

export default GeneralNavbar;