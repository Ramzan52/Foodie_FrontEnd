/** @format */
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
export default function AddDish(props) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [description, setDescription] = React.useState("");
  let history=useHistory();

  return (
    <div>
      
   

      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter Title</Form.Label>
    <Form.Control  type="text" placeholder="Title" onChange={(e) => {
            setName(e.target.value);
          }}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Price</Form.Label>
    <Form.Control type="number" placeholder="Price" onChange={(e) => {
            setPrice(e.target.value);
          }}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Rating</Form.Label>
    <Form.Control type="number" placeholder="Price" onChange={(e) => {
            setRating(e.target.value);
          }}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter Description</Form.Label>
    <Form.Control type="text" placeholder="Price" onChange={(e) => {
            setDescription(e.target.value);
          }}/>
  </Form.Group>
  <Button variant="dark" type="submit" onClick = { (e)=> {
    axios
    .post("http://localhost:3030/dish",{name,price,rating,description})
    .then((res)=>{
      console.log(res.data);
  
    })
    .catch((err) => {
      console.log(err);
      alert("not responding")
    })
  } } >
    Add Dish
  </Button>
</Form>
        
    </div>
  );
}
