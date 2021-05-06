import React, { Component } from "react";
import _ from "lodash";
import Header from "./A_Header/A_Header";
import Clients from "./A_Clients/clients";
import Screen from "./A_Screen/screen";
import Product from "./A_Products/react_Products.js";
import Solutions from "./A_Solutions/solutions";
import Process from "./A_Process/process";
import Company from "./A_Company/Company";
import Cashmission from "./A_Cashmission/cashmission";
import Textimonials from "./A_Textimonials/textimonials";
import Allclinets from "./A_AllClients/allclients";
import Contact from "./A_Contact/contact&career";
import Footer from "./A_Footer/footer";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      mainView: "ImageData",
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const params = _.split(_.split(url, "?")[1], "&");

    let splitedParams = {};
    for (var i = 0; i < params.length; ++i) {
      var p = params[i].split("=", 2);
      if (p.length == 1) splitedParams[p[0]] = "";
      else splitedParams[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }

    const { mode } = splitedParams;
    console.log(mode);
    this.setState({
      mainView: mode,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { mainView } = this.state;

    if (prevState.mainView !== mainView) {
      this.container.scrollIntoView(true);
    }
  }

  handleClick = (view) => {
    // this.setState({
    //   mainView: view,
    // });
  };

  render() {
    const { mainView } = this.state;
    console.log(mainView);
    return (
      <div className="Home">
        <Header />
        <Screen />
        <Clients />
        <div ref={(node) => (this.container = node)}>
          <Product focused={mainView} handleClick={this.handleClick} />
        </div>
        <Solutions />
        <Process />
        <Company />
        <Cashmission />
        <Textimonials />
        <Allclinets />
        <Contact />
        <Footer handleClick={this.handleClick} />
      </div>
    );
  }
}
export default Home;
