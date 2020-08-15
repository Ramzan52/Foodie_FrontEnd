import React from "react";
const Customer = ({ customer}) => {
  return (
    <div >
    <table class="table  table-dark table-bordered   ">
      <thead>
        <tr>
          <th style={{ width: "25%" }} scope="col">
            Name
          </th>
          <th style={{ width: "25%" }} scope="col">
            Ph_Number
          </th>
          <th style={{ width: "25%" }} scope="col">
            Address
          </th>
        
        </tr>
      </thead>
    </table>
    <table class="table table-hover   table-striped table-bordered ">
          <th style={{ width: "25%" }}>{customer.name}</th>{" "}
          
          <th className="Q" style={{ width: "25%" }}>
          {customer.number}
          </th>
          <th style={{ width: "25%" }}>{customer.address}</th>
        </table>
    
   
   
  </div> 
  )
};
export default Customer;