import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires"

const changeCategory = (category) =>{
  currentCategory = category
  render()
}
function render() {
  ReactDOM.render(
    <App state={state} currentCategory={currentCategory} changeCategory={changeCategory}/>,
    document.getElementById("root")
  );
}
render();
