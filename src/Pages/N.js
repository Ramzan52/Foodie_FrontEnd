/** @format */

import React, { useState } from "react";
import {
  Button,
  Form,
  NavDropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">FOODIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>

            <NavDropdown title="Deals" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Nav.Link href="#link">
                  <Link to="/EveryDay"> EveryDay Deals</Link>
                </Nav.Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Nav.Link href="#link">
                  <Link to="/NightDeals"> MidNight Deals</Link>
                </Nav.Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                <Nav.Link href="#link">
                  <Link to="/snacks"> Snacks</Link>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">
              <Link to="/bucket">Bucket</Link>
            </Nav.Link>

            <Nav.Link href="#link">
              <Link to="/about">About</Link>
            </Nav.Link>

            <Nav.Link href="#link">
              <Link to="/help">Help</Link>
            </Nav.Link>

            
              <Button  variant="outline-success"  onClick={handleShow}>
                Sign In
              </Button>
          
            <LoginForm show={show} handleClose={handleClose} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
