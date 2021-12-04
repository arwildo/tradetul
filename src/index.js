import React from "react";
import ReactDOM from "react-dom";
import './style.css';

import Navbar from "./components/navbar";
import TradingCalculator from "./components/tradingCalculator";

const Index = () => {
  return (
    <div className="relative h-screen">
      <div className="flex justify-center">
        <Navbar key="navbar" />
        <TradingCalculator key="trading_calculator" />
      </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
