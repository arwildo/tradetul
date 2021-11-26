import React from "react";

import Navbar from "./components/navbar";
import RiskCalculator from "./components/riskCalculator";
import Footer from "./components/footer";

export default function(props) {
  return [<Navbar />, <RiskCalculator />, <Footer />]
}
