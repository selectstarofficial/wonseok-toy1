import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={About} />
    </div>
  );
}

export default App;
