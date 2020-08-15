import React from "react";
import Customer from "./Customer";
import axios from "axios";
import { Link } from "react-router-dom";


const ViewCustomer = () => {
  const [customer, setCustomer] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3030/customer")
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
        
      <h1>Customers</h1>
          {customer.map((customer, index) => (
            <Customer key={index} customer={customer} />
          ))}
    </div>
  );
};
export default ViewCustomer;

  


