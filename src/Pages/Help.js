import React from "react";
import  Footer from "./Footer";
import N from "./N";
export default () => {
  return (
    <div>
      <N/>
      <h1 className="header">Need Help !!!!!!!!!! </h1>
      <h6 class="text-uppercase font-weight-bold">
        <i class="fas fa-envelope mr-3"></i> Contact
      </h6>

      <p>
        <i class="fas fa-envelope mr-3"></i> Foodie@example.com
      </p>
      <p>
        <i class="fas fa-phone mr-3"></i> + 01 234 567 88
      </p>
      <p>
        <i class="fas fa-print mr-3"></i> + 01 234 567 89
      </p>
      <Footer/>
    </div>
  );
};
