/** @format */

import React,{useState, useEffect} from "react";
// import { Card, Button, Navbar, Container, NavbarBrand } from "react-bootstrap";
import Car from "./Car";
import N from "./N";
import CardHolder from "./CardHolder";
import Footer from "./Footer";
import ModalCust from './ModalCust'
import { connect } from "react-redux";

const MainPage = ({menue,dispatch}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [menu, setmenu] = useState([]);

  return (
    <div>
      <N/>
      <ModalCust show={show} handleClose={handleClose} handleShow={handleShow}/>
      <Car />
      <div className="d-flex d.column flex-wrap">
        {menue.map((single) => {
          return <CardHolder dispatch={dispatch} menue={single} handleShow={handleShow}/>;
        })}
      </div>
      <Footer />
    </div>
  );
};
const mapStoreToState = (state) => {
  return {
    menue: state.dish,
  };
};

export default connect(mapStoreToState)(MainPage);