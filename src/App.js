import React from "react";
import "./App.css";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Screen />
      <Clients />
      <Product />
      <Solutions />
      <Process />
      <Company />
      <Cashmission />
      <Textimonials />
      <Allclinets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
