/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UpdateDish() {
  return (
    <div>
      
   

        <Form>
        <Form.Group >
    <Form.Label>Enter name of Dish you want to update:</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <h1 style={{textAlign:"center"}}>Updated Info</h1>
  <Form.Group >
    <Form.Label>Name of Dish</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Price of Dish</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Description of Dish</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Rating of Dish</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
  <Form.Label>Page to Display</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Button variant="success" type="submit">
 Update
  </Button>
</Form>
        
    </div>
  );
}
