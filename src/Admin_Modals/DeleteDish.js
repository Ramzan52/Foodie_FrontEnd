/** @format */
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
export default function DeleteDish() {
  const [name, setName] = React.useState("");
  let history=useHistory();
  return (
    <div>
      
   

        <Form>
  <Form.Group >
    <Form.Label> Enter name of dish you want to delete:</Form.Label>
    <Form.Control type="text" placeholder="" onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}/>
  </Form.Group>

  <Button variant="danger" type="submit" onClick = { (e)=> {
axios({
  method: 'delete',
  url: "http://localhost:3030/dish" ,
 
  data: {
    name // This is the body part
  }
});
  } } >
    Delete
  </Button>
</Form>
        
    </div>
  );
}
