/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UpdateOrder() {
  return (
    <div>
      
   

        <Form>
        <Form.Group >
    <Form.Label>Enter ID of order you want to update:</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <h1 style={{textAlign:"center"}}>Updated Info</h1>
  <Form.Group >
    <Form.Label>Status of Order</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  
  <Button variant="success" type="submit">
 Update
  </Button>
</Form>
        
    </div>
  );
}
