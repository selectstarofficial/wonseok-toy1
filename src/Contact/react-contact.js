import React, { Component } from "react";
import "./react-contact.css";
import nocheck from "./img/checkbox.png";
import checked from "./img/checked box img (blue).png";
import ContactVideo from "./video/selectstar.b97543d9.mp4";
import ContactLG from "./img/lglglglgl.png";

class Contactpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false,
      isChecked6: false,
      isChecked7: false,
      isChecked8: false,
      empty1: true,
      empty1: true,
      empty1: true,
      empty1: true,
      empty1: true,
      change1: false,
      change2: false,
      change3: false,
      change4: false,
      change5: false,
      notdatachecking: true,
      nottaskchecking: true,
    };
  }

  componentWillMount() {
    this.setState({
      empty1: false,
      empty2: false,
      empty3: false,
      empty4: false,
      empty5: false,
    });
  }

  changeupdata() {
    if (this.state.change1 == true) {
      this.setState({ empty1: false });
    } else {
      this.setState({ empty1: true });
    }
    if (this.state.change2 == true) {
      this.setState({ empty2: false });
    } else {
      this.setState({ empty2: true });
    }
    if (this.state.change3 == true) {
      this.setState({ empty3: false });
    } else {
      this.setState({ empty3: true });
    }
    if (this.state.change4 == true) {
      this.setState({ empty4: false });
    } else {
      this.setState({ empty4: true });
    }
    if (this.state.change5 == true) {
      this.setState({ empty5: false });
    } else {
      this.setState({ empty5: true });
    }
    return this.isalert();
  }
  isalert() {
    if (
      this.state.change1 &&
      this.state.change2 &&
      this.state.change3 &&
      this.state.change4 &&
      this.state.change5
    ) {
      if (
        this.state.isChecked1 ||
        this.state.isChecked2 ||
        this.state.isChecked3 ||
        this.state.isChecked4 ||
        this.state.isChecked5
      ) {
        this.setState({ notdatachecking: false });
      } else {
        this.setState({ notdatachecking: true });
        return alert("Please check data type!");
      }
      if (
        this.state.isChecked6 ||
        this.state.isChecked7 ||
        this.state.isChecked8
      ) {
        this.setState({ nottaskchecking: false });
      } else {
        this.setState({ nottaskchecking: true });
        return alert("Please check task type!");
      }
      if (this.state.notdatachecking && this.state.nottaskchecking == false) {
        alert("a");
      } else {
        alert("Thank you");
        return window.location.reload(true);
      }
    }
  }
  checkcheck() {
    if (
      this.state.isChecked1 ||
      this.state.isChecked2 ||
      this.state.isChecked3 ||
      this.state.isChecked4 ||
      this.state.isChecked5
    ) {
      this.setState({ notdatachecking: false });
    } else {
      this.setState({ notdatachecking: true });
    }
    if (
      this.state.isChecked6 ||
      this.state.isChecked7 ||
      this.state.isChecked8
    ) {
      this.setState({ nottaskchecking: false });
    } else {
      this.setState({ nottaskchecking: true });
    }
  }

  change(e, number) {
    if (e) {
      this.setState({ [`change${number}`]: true });
    } else {
      this.setState({ [`change${number}`]: false });
    }
  }
  render() {

    return (
      <div id="Contact" className="Contact_cover">
        <div className="Contact_box">
          <p className="cover_title">CONTACT</p>
          <p className="cover_main">
            CONTACT US TO TURN YOUR DREAM INTO
            <br />A REALITY
          </p>
          <p className="cover_sub">
            Our team is happy to answer your questions. Fill out the form and
            well be in touch as soon as possible.
          </p>
          <div className="Contact_main_box">
            <div className="Contact_box_left">
              <div className="Contact_box_checkbox">
                <p className="title">Data Type</p>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked1: !state.isChecked1,
                    }));
                  }}
                >
                  <img src={this.state.isChecked1 ? checked : nocheck} />
                  <p>Image</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked2: !state.isChecked2,
                    }));
                  }}
                >
                  <img src={this.state.isChecked2 ? checked : nocheck} />
                  <p>Video</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked3: !state.isChecked3,
                    }));
                  }}
                >
                  <img src={this.state.isChecked3 ? checked : nocheck} />
                  <p>Audio</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked4: !state.isChecked4,
                    }));
                  }}
                >
                  <img src={this.state.isChecked4 ? checked : nocheck} />
                  <p>Text/Document</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked5: !state.isChecked5,
                    }));
                  }}
                >
                  <img src={this.state.isChecked5 ? checked : nocheck} />
                  <p>Anything You Want</p>
                </div>
              </div>
              <div className="Contact_box_checkbox">
                <p className="title">Task Type</p>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked6: !state.isChecked6,
                    }));
                  }}
                >
                  <img src={this.state.isChecked6 ? checked : nocheck} />
                  <p>Collection</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked7: !state.isChecked7,
                    }));
                  }}
                >
                  <img src={this.state.isChecked7 ? checked : nocheck} />
                  <p>Labeling</p>
                </div>
                <div
                  className="Contact_checkbox"
                  onClick={() => {
                    this.setState((state) => ({
                      isChecked8: !state.isChecked8,
                    }));
                  }}
                >
                  <img src={this.state.isChecked8 ? checked : nocheck} />
                  <p>Etc</p>
                </div>
              </div>
              <div className="Contact_inputes">
                <input
                  onChange={(e) => this.change(e, 1)}
                  className={`Contact_input1 ${
                    this.state.empty1 && "borderred"
                    }`}
                  placeholder="First Name"
                  type="text"
                />
                <input
                  onChange={(e) => this.change(e, 2)}
                  className={`Contact_input2 ${
                    this.state.empty2 && "borderred"
                    }`}
                  placeholder="Last Name"
                  type="text"
                />
                <input
                  onChange={(e) => this.change(e, 3)}
                  className={`Contact_input3 ${
                    this.state.empty3 && "borderred"
                    }`}
                  placeholder="Company"
                  type="text"
                />
                <input
                  onChange={(e) => this.change(e, 4)}
                  className={`Contact_input4 ${
                    this.state.empty4 && "borderred"
                    }`}
                  placeholder="Phone"
                  type="text"
                />
                <input
                  onChange={(e) => this.change(e, 5)}
                  className={`Contact_input5 ${
                    this.state.empty5 && "borderred"
                    }`}
                  placeholder="Work Email"
                  type="text"
                />
                <textarea
                  className="Contact_textarea"
                  placeholder="Tell us a little more about your project! Like a brief overview, expected schedules, sizes, and more!"
                ></textarea>
              </div>
              <div
                className="Contact_button"
                onClick={() => this.changeupdata(this)}
              >
                SEND
              </div>
            </div>
            <div className="Contact_box_right">
              <video autoPlay muted loop src={ContactVideo} controls />
              <p className="Contact_text1">
                “With Selectstar, we were able to efficiently collect KorQuad
                2.0, a Question-Answer dataset in Korean. We loved the quality
                and diversity of data, collected from broad workers. Especially,
                Selectstar's user guideline for our task was very impressive,
                capturing our expectations into clear explanations for the
                workers.”
              </p>
              <p className="Contact_text2"></p>
              <div>
                <img src={ContactLG} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contactpage;
