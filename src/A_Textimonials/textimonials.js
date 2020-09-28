import React, { useState, useEffect } from "react";
import "./textimonials.css";
import Leftside from "./img/leftside.png";
import Rightside from "./img/rightside.png";
import LG_CNS from "../Textimonials/LG_CNS";
import LOTTE from "../Textimonials/LOTTE";
import OMNIOUS from "../Textimonials/OMNIOUS";
import COGNITIVE from "../Textimonials/Cognitive";
import WIDEBRAIN from "../Textimonials/WideBrain";

function Textimonials() {
  const [MainViewlist, setMainViewlist] = useState(0);

  useEffect(() => {
    setTimeout(rightClick, 3000);
    console.log(MainViewlist);
  });

  const leftClick = () => {
    setMainViewlist(MainViewlist <= 0 ? 4 : MainViewlist - 1);
  };
  const rightClick = () => {
    setMainViewlist(MainViewlist >= 4 ? 0 : MainViewlist + 1);
  };
  const TextimonialsChange = () => {
    switch (MainViewlist) {
      case 0:
        return <LG_CNS />;
      case 1:
        return <LOTTE />;
      case 2:
        return <OMNIOUS />;
      case 3:
        return <COGNITIVE />;
      case 4:
        return <WIDEBRAIN />;
      default:
        return <LG_CNS />;
    }
  };
  return (
    <div className="Textimonials_cover">
      <div className="Textimonials_box">
        <p className="Textimonials_title">TEXTIMONIAL</p>
        <div onClick={leftClick} className="leftside">
          <img src={Leftside} alt="img"></img>
        </div>
        <div onClick={rightClick} className="rightside">
          <img src={Rightside} alt="img"></img>
        </div>
        <div className="Textimonials_change">
          <TextimonialsChange />
        </div>
      </div>
    </div>
  );
}

export default Textimonials;
