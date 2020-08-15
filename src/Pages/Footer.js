import React from "react";
import {
  Button,

  NavDropdown,

  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../stylesheet/MainPage.css";

const Footer = () => {
  return (
    <div className=" footer  d=flex">
      
      <footer id="fifth" className="page-footer font-small unique-color-dark">
  <div style={{backgroundColor: 'black'}}>
    <div className="container">
      {/* Grid row*/}
      <div className="row py-4 d-flex align-items-center">
        {/* Grid column */}
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6  className="mb-0 head">FOODIE!</h6>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-6 col-lg-7 text-center text-md-right">
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
  </div>
  {/* Footer Links */}
  <div className="container text-center text-md-left mt-5">
    {/* Grid row */}
    <div className="row mt-3">
      {/* Grid column */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        {/* Content */}
        <h6 className="text-uppercase font-weight-bold">Info</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>Foodie is an Pakistani fast food restaurant chain headquartered in Lahore, Kentucky, that specializes in fried chicken. It is the lahore's second-largest restaurant chain after McDonald's, with 2,62 locations  in city as of December 2018. The chain is a subsidiary of Yum!.</p>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* Links */}
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
        <Link to="/about"> About Us</Link>
        </p>
        <Link to="/help">Help</Link>
        <p />
      </div>
      {/* Grid column */}
      {/* Grid column */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        {/* Links */}
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
        <p>
          <i className="fas fa-home mr-3" /> Lahorek, NY 10012, pakistan</p>
        <p>
          <i className="fas fa-envelope mr-3" /> info@example.com</p>
        <p>
          <i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3" /> + 01 234 567 89</p>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
  {/* Copyright */}
  <div className="footer-copyright text-center py-3"><h4>© 2020 Copyright:</h4>
  
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  );
};
export default Footer;
