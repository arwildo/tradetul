import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './style.css';

import Navbar from "./components/navbar";
import TradingCalculator from "./components/tradingCalculator";
import Explanation from "./components/explanation";
import ComingSoon from "./components/comingSoon";

import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Cookies from "./components/cookies";

const Index = () => {
  return (
    <div className="relative h-screen">
      <div className="flex justify-center">

        <BrowserRouter basename="/tradetul">
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
            <Route path='/terms' element={
              <>
                <Navbar />
                <Terms />
              </>
            } />
            <Route path='/privacy' element={
              <>
                <Navbar />
                <Privacy />
              </>
            } />
            <Route path='/Cookies' element={
              <>
                <Navbar />
                <Cookies />
              </>
            } />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
