/** @format */

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function DeleteOrder() {
  return (
    <div>
      
   

        <Form>
  <Form.Group >
    <Form.Label> Enter the ID of  the order that you want to delete:</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>

  <Button variant="danger" type="submit">
    Delete
  </Button>
</Form>
        
    </div>
  );
}
