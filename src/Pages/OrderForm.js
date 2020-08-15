/** @format */
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
export default function OrderForm(props) {
  let { total } = props;
  const [name, setName] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [email, setemail] = React.useState("");
  let history = useHistory();

  return (
    <div className='container-sm'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Ph_Number</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            onChange={(e) => {
              setnumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Adrress</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="dark"
         
          onClick={(e) => {
            if (total === 0) {
              alert("Bucket is Empty!!!");
            } else {
              axios
                .post("http://localhost:3030/customer", {
                  name,
                  number,
                  address,
                  email,
                })
                .then((res) => {
                  console.log({_id:res.data._id, bucket:props.bucket});
                  axios
                  .post("http://localhost:3030/order", {_id:res.data._id, bucket:props.bucket})
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("not responding");
                  });
                  console.log(res.data);
                  history.push("/dashboard");
                }
                )
                .catch((err) => {
                  console.log(err);
                  alert("SOMETHING WENT WRONG");
                });
            }
           
          }}
        >
          Place Order
        </Button>
      </Form>
    </div>
  );
}
