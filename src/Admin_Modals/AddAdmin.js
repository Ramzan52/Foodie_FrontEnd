/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddAdmin() {
  return (
    <div>
      
   

        <Form>
  <Form.Group >
    <Form.Label>Name of Admin</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Phone NO of Admin</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>CNIC of Admin</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Password for Admin</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  
  <Button variant="warning" type="submit">
    ADD
  </Button>
</Form>
        
    </div>
  );
}
