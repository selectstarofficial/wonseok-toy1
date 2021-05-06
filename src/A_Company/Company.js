import React from "react";
import "./Company.css";
import Selectstarvideo from "./video/selectstar.b97543d9.mp4";

const Company = () => {
  return (
    <div className="Company_cover">
      <div id="company" className="Company_main">
        <p className="title">COMPANY</p>
        <p className="main">SELECTSTAR GOT YOUR BACK!</p>
        <p className="sub">
          Obtaining the proper data has always been the top issue for many
          companies using AI.
          <br />
          To solve this problem, Selectstar provides a platform that connects
          your company to the crowd-workers.
        </p>
        <div className="Company_video">
          <video controls autoPlay loop muted>
            <source src={Selectstarvideo} />
          </video>
        </div>
        <div className="Company_video_footer">
          <div className="video_footer_text">
            <p className="text-title">It`s MORE than just a connection</p>
            <p className="text-sub">
              We research crowd-works and your project passionately to
              <br />
              develop cutting-edge technologies for mobile crowd-sourcing.
            </p>
          </div>
          <div className="video_footer_text">
            <p className="text-title">Keep disrupting the world</p>
            <p className="text-sub">
              Just for your project, we are here to maintain the quality,
              <br />
              cost-efficiency, or any other burdens related to the data.
            </p>
          </div>
        </div>
        <div className="Company_footer">
          <div className="Company_footer_container">
            <p className="container-title">2018</p>
            <p className="container-sub">Founded in Nov.2018</p>
          </div>
          <div className="Company_footer_container">
            <p className="container-title">125+</p>
            <p className="container-sub">125 Clients</p>
          </div>
          <div className="Company_footer_container">
            <p className="container-title">14M</p>
            <p className="container-sub">14M Processed Data</p>
          </div>
          <div className="Company_footer_container">
            <p className="container-title">40K+</p>
            <p className="container-sub">
              40K Workers(Kor/Ph)
              <br />
              working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
