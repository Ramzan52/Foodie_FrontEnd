import React,{useState, useEffect} from "react";
import CardHolder from "./CardHolder"
import  Footer from "../Pages/Footer";
import ModalCust from './ModalCust';
import { connect } from "react-redux";
import N from "./N";
const   Snacks = ({menue,dispatch}) => {
  const [show, setShow] = useState(false);
  const [menu, setmenu] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div>
      <N/>
       <ModalCust show={show} handleClose={handleClose} handleShow={handleShow}/>
      <h1 className="header">Snacks</h1>
      <div className="d-flex d.column flex-wrap">
     {menue.map((single) => {
        return <CardHolder dispatch={dispatch} menue={single} handleShow={handleShow} />;
      })} 
      
      </div>
      <Footer/>
    </div>
  );
};
const mapStoreToState = (state) => {
  return {
    menue: state.dish,
  };
};

export default connect(mapStoreToState)(Snacks);
