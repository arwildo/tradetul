import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './style.css';

import Navbar from "./components/navbar";
import TradingCalculator from "./components/tradingCalculator";
import Explanation from "./components/explanation";
import ComingSoon from "./components/comingSoon";

const Index = () => {
  return (
    <div className="relative h-screen">
      <div className="flex justify-center">

        <BrowserRouter basename={ process.env.PUBLIC_URL }>
          <Routes>
            <Route exact path='/' element={
              <>
                <Navbar />
                <TradingCalculator />
              </>
            } />
            <Route path='/explanation' element={
              <>
                <Navbar />
                <Explanation />
              </>
            } />
            <Route path='/more' element={
              <>
                <Navbar />
                <ComingSoon />
              </>
            } />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
