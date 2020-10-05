import React, { Component } from "react";
import "./clients.css";
import client_LG from "./img/lg.png";
import clinet_NAVER from "./img/naver.png";
import clinet_LOTTE from "./img/lotte.png";
import clinet_SK from "./img/sk.png";
import clinet_KAIST from "./img/kaist.png";
import clinet_NIA from "./img/nia.png";

class Clients extends Component {
  render() {
    return (
      <div className="Clients_cover">
        <div className="Clients_main_page">
          <div className="Client">
            <img src={client_LG} alt="LG"></img>
          </div>
          <div className="Client">
            <img src={clinet_NAVER} alt="NAVER"></img>
          </div>
          <div className="Client">
            <img src={clinet_LOTTE} alt="LOTTE"></img>
          </div>
          <div className="Client">
            <img src={clinet_SK} alt="SK"></img>
          </div>
          <div className="Client">
            <img src={clinet_KAIST} alt="KAIST"></img>
          </div>
          <div className="Client">
            <img src={clinet_NIA} alt="NIA"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
