import Spinner from "react-bootstrap/Spinner";

const loading = () => {
   return (
      <Spinner animation="border" role="status" className="text-center">
         <span className="visually-hidden">Loading...</span>
      </Spinner>
   );
};

export default loading;
