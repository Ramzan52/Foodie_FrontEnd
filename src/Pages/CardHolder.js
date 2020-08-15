/** @format */

import React from "react";
import { Card, Button } from "react-bootstrap";
import Bucket from "./Bucket";
import ModalCust from  "./ModalCust"

import {addToBucket} from '../actions/bucketActions'
export default ({ menue,handleShow,dispatch }) => {
 

  let {name, price, description, rating, _id } = menue;

  
  return (
    <div className="m-4">
      <Card bg="Secondary" border="dark" style={{ width: "18rem" }}>
       
        <Card.Body>
          <Card.Title className="text-center"><h3>{name}</h3></Card.Title>
          <Card.Text>
            <h6>Description:</h6>{description}
            <h6>Rating:</h6>  {rating}
            <h4>Price:{price}</h4>
          
          </Card.Text>

          <Button
            variant="outline-dark" size="lg" block
            onClick={() => {
              handleShow();
           dispatch(addToBucket(menue));
          
            }}
          >
            Add to Bucket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
