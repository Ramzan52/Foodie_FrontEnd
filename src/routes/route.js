/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import AboutPage from "../Pages/AboutPage";
import HelpPage from "../Pages/Help";
import EveryDay from "../Pages/EveryDay";
import NightDeals from "../Pages/NightDeals";
import Snacks from "../Pages/snacks";
import Bucket from "../Pages/Bucket";
import Error from "../Pages/Error";
import N from "../Pages/N";
import AddAdmin from "../Admin_Modals/AddAdmin"
import AddDish from "../Admin_Modals/AddDishForm"
import DeleteDish from "../Admin_Modals/DeleteDish"
import UpdateDish from "../Admin_Modals/UpdateDish"
import ViewDish from "../Admin_Modals/ViewDish"
import ViewCustomer from "../Admin_Modals/ViewCustomer"
import DeleteOrder from "../Admin_Modals/DeleteOrder"
import UpdateOrder from "../Admin_Modals/UpdateOrder"
import DashBoard from "../Pages/DashBoard";
import DeleteCust from "../Admin_Modals/DeleteCust"
export default function CustomeRoute() {
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        localStorage.getItem("foodie_token")? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  return (
    <Router>
     
      

      <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/snacks" component={Snacks} />
          <Route path="/everyday" component={EveryDay} />
          <Route path="/NightDeals" component={NightDeals} />
          <Route path="/bucket" component={Bucket} />
          <Route path="/HELP" component={HelpPage} />
          <Route path="/adddish" component={AddDish} />
          <Route path="/deletedish" component={DeleteDish} />
          <Route path="/updatedish" component={UpdateDish} />
          <Route path="/viewdish" component={ViewDish} />
          <Route path="/deleteorder" component={DeleteOrder} />
          <Route path="/updateorder" component={UpdateOrder} />
          <Route path="/deletecust" component={DeleteCust} />
          <Route path="/viewcust" component={ViewCustomer} />
          <Route path="/addadmin" component={AddAdmin} />
          
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          

          <Route path="*">
            <Error />
          </Route>
   
        </Switch>
      </div>
    </Router>
  );
}
