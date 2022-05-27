import React from "react";
import { render } from "react-dom";
import { Clock } from "./clock";

const App = () => (
  <div>
    App
    <Clock />
  </div>
);

render(<App />, document.querySelector("#app-container"));
