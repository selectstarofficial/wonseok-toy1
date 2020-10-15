import React from "react";
import ReactDOM from "react-dom";
import "./i18n";

import RouterWrapper from "./router-wrapper";
export { default as Home } from "./Home";
export { default as About } from "./about";
ReactDOM.render(<RouterWrapper />, document.getElementById("root"));
