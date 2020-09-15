import React, { Component } from "react";
import "./screen.css";
import Products from "./our_products";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="title">
          <div className="logoimg"></div>
          <div className="titletext">
            <div className="titleproduct">
              <Link className="link" to="/product">
                PRODUCT
              </Link>
            </div>
            <div className="titlesolutions">SOLUTIONS </div>
            <div className="titlecompany">COMPANY</div>
            <div className="titlecontact">CONTACT</div>
          </div>
        </div>
        <div className="screenmaintext">
          THE FINEST
          <br /> AI Data PLATFORM
        </div>
        <div className="screensubtext">
          Diverse and High Quality Data fitted just for your project
        </div>
        <button className="startbutton">
          <div className="startbuttontext">GET STARTED</div>
        </button>
        <button className="logobutton">
          <div className="logobuttonimg"></div>
        </button>
        <Switch>
          <Route path="/product" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default Screen;
