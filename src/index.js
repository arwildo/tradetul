import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Index = () => {
  function calculate() {
    return 0.5;
  }
  return (
    <div className="text-gray-400 text-xl m-10">
      {calculate()}
    </div>
  );
}




ReactDOM.render(<Index />, document.getElementById("root"));
