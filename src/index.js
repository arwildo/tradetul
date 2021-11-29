import React from "react";
import ReactDOM from "react-dom";
import './style.css';

import Navbar from "./components/navbar";
import RiskCalculator from "./components/riskCalculator";

const Index = () => {
  return (
    <div className="p-relative h-screen">
      <div className="flex justify-center">
        <Navbar key="navbar" />
        <RiskCalculator key="risk_calculator" />
      </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
