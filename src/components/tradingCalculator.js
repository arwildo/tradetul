import React from "react";
import Footer from "./footer";

class TradingCalculator extends React.Component {
  constructor(props) {
    super();

    this.state = {
      capital: 1000,
      risk: 2,
      direction: "long",
      price: 25,
      stoploss: 24.73,
      unitsToBuy: 20,
      total: 500,
      totalTolerableRiskPerTrade: 20,
      stopLossPerUnitLoss: 1,
      totalRiskPerPosition: 4,

      hasError: false,
      errorInfo: ""
    }
    this.handleChangeCapital = this.handleChangeCapital.bind(this);
    this.handleChangeRisk = this.handleChangeRisk.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeStopLoss = this.handleChangeStopLoss.bind(this);

    this.handleCalculate = this.handleCalculate.bind(this);
  }

  // Capital
  handleChangeCapital(event) {

    // Only numbers filter
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");
    
    // Input return value
    this.setState({capital: onlyNums});
  }
  // Risk
  handleChangeRisk(event) {
    // Only numbers filter
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");

    // Input return value
    this.setState({risk: onlyNums});

    if (onlyNums < 100) {
      this.setState({hasError : false});
    } else {
      this.setState({hasError : true});
      this.setState({errorInfo : "Tolerable risk in percent of capital per trade must be less than 100."});
    }
  }
  // Direction
  handleChangeDirection(event) {
    event.preventDefault();
    
    // Check SL price error
    if (this.state.direction == "long") {
      if (this.state.stoploss > this.state.price) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Sell trade stop loss must be higher than entry price."});
      }
    } else {
      if (this.state.stoploss < this.state.price) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Buy trade stop loss must be lower than entry price."});
      }
    }

    this.setState({direction: event.target.value});
  }
  // Price
  handleChangePrice(event) {
    // Only numbers filter
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");

    // Input return value
    if (this.state.direction == "long") {
      if (onlyNums > this.state.stoploss) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Buy trade stop loss must be lower than entry price."});
      }
    } else {
      if (onlyNums < this.state.stoploss) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Sell trade stop loss must be higher than entry price."});
      }
    }
    this.setState({price: onlyNums});
  }
  // Stop Loss
  handleChangeStopLoss(event) {
    // Only numbers filter
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");

    // Input return value
    if (this.state.direction == "long") {
      if (onlyNums < this.state.price) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Buy trade stop loss must be lower than entry price."});
      }
    } else {
      if (onlyNums > this.state.price) {
        this.setState({hasError : false});
      } else {
        this.setState({hasError : true});
        this.setState({errorInfo : "For Sell trade stop loss must be higher than entry price."});
      }
    }
    this.setState({stoploss: onlyNums});
  }
// --------------------------------------------------------------------------------------------
  // Engine Start --- Verify all the inputs are signum

  // Calculate Handler
  handleCalculate() {
    function calculator() {
      var calculator = {};

      var PositiveSignum = function (verify) {
          if (!verify ||
              isNaN(verify) ||
              typeof verify !== 'number' ||
              verify === 0 || !isFinite(verify)) {
              throw new TypeError('All numbers must have positive signum.');
          }
          this.verified = verify;
      };

      PositiveSignum.prototype.provide = function () {
          return this.verified;
      };

      var Capital = function (verify) {
          this.verified = new PositiveSignum(verify).provide();
      };

      Capital.prototype.provide = function () {
          return this.verified;
      };

      var PricePerUnit = function (verify) {
          this.verified = new PositiveSignum(verify).provide();
      };

      PricePerUnit.prototype.provide = function () {
          return this.verified;
      };

      var StopLossPricePerUnit = function (verify) {
          this.verified = new PositiveSignum(verify).provide();
      };

      StopLossPricePerUnit.prototype.provide = function () {
          return this.verified;
      };

      var Below = function (verify) {
          if (!(new PositiveSignum(verify).provide() < 100)) {
              throw new TypeError('Tolerable risk in percent of capital per trade must be less than 100.');
          }
          this.verified = verify;
      };

      Below.prototype.provide = function () {
          return this.verified;
      };

      var TolerableRiskInPercentOfCapital = function (verify) {
          this.verified = new Below(verify).provide();
      };

      TolerableRiskInPercentOfCapital.prototype.provide = function () {
          return this.verified;
      };
// --------------------------------------------------------------------------------------------
      // Engine 1 --- Main calculations

      var Position = function (capital,
                               tolerableRiskInPercentOfCapital,
                               pricePerUnit,
                               stopLossPricePerUnit) {
          this.capital = capital;
          this.tolerableRiskInPercentOfCapital = tolerableRiskInPercentOfCapital;
          this.pricePerUnit = pricePerUnit;
          this.stopLossPricePerUnit = stopLossPricePerUnit;
      };

      Position.prototype.getTotalTolerableRiskPerTrade = function () {
          return (this.capital.provide() * (this.tolerableRiskInPercentOfCapital.provide() / 100));
      };

      Position.prototype.getStopLossPerUnitLoss = function () {

      };

      Position.prototype.getUnitsToBuy = function () {
          var result = (this.getTotalTolerableRiskPerTrade() / this.getStopLossPerUnitLoss());
          //if (this.capital.provide() <= (result * this.pricePerUnit.provide())) {
          //    return 0;
          //} else {
          //    return result;
          //}
          //console.log(this.capital.provide() + " and " + (result * this.pricePerUnit.provide()))
          return result;
      };
      
      Position.prototype.getTotal = function () {
          return (this.getUnitsToBuy() * this.getPricePerUnit());
      };

      Position.prototype.getPricePerUnit = function () {
          return this.pricePerUnit.provide();
      };

      Position.prototype.getTotalRiskPerPosition = function () {
          return ((this.capital.provide() * (this.tolerableRiskInPercentOfCapital.provide()) / 100) / (this.getUnitsToBuy() * this.getPricePerUnit()) * 100);
      }
// --------------------------------------------------------------------------------------------
      // Engine 2 --- Calculating based on direction long or short

      function long(capital,
                    tolerableRiskInPercentOfCapital,
                    pricePerUnit,
                    stopLossPricePerUnit) {
          if (pricePerUnit.provide() <= stopLossPricePerUnit.provide()) {
              throw new TypeError('Stop loss price per unit must be lower than price per unit when long');
          }
          Position.call(this,
              capital,
              tolerableRiskInPercentOfCapital,
              pricePerUnit,
              stopLossPricePerUnit);
      }

      long.prototype = Object.create(Position.prototype);
      long.prototype.constructor = Position;
      long.prototype.getStopLossPerUnitLoss = function () {
          return (this.pricePerUnit.provide() - this.stopLossPricePerUnit.provide());
      };

      function short(capital,
                     tolerableRiskInPercentOfCapital,
                     pricePerUnit,
                     stopLossPricePerUnit) {
          if (pricePerUnit.provide() >= stopLossPricePerUnit.provide()) {
              throw new TypeError('Stop loss price per unit must be higher than price per unit when short');
          }
          Position.call(this,
              capital,
              tolerableRiskInPercentOfCapital,
              pricePerUnit,
              stopLossPricePerUnit);

      }

      short.prototype = Object.create(Position.prototype);
      short.prototype.constructor = Position;
      short.prototype.getStopLossPerUnitLoss = function () {
          return (this.stopLossPricePerUnit.provide() - this.pricePerUnit.provide());
      };
// --------------------------------------------------------------------------------------------
      // Engine 3 --- Calculate entry point

      calculator.calculate = function (capital,
                                 tolerableRiskInPercentOfCapitalPerTrade,
                                 direction,
                                 pricePerUnit,
                                 stopLossPricePerUnit) {

          if (direction.toLowerCase() === 'long') {
              return new long(
                  new Capital(capital),
                  new TolerableRiskInPercentOfCapital(tolerableRiskInPercentOfCapitalPerTrade),
                  new PricePerUnit(pricePerUnit),
                  new StopLossPricePerUnit(stopLossPricePerUnit)
              );
          } else {
              return new short(
                  new Capital(capital),
                  new TolerableRiskInPercentOfCapital(tolerableRiskInPercentOfCapitalPerTrade),
                  new PricePerUnit(pricePerUnit),
                  new StopLossPricePerUnit(stopLossPricePerUnit)
              );
          }
      };

      return calculator;
    };

    // Engine End
// --------------------------------------------------------------------------------------------
    // Calculating
    let position = calculator().calculate(parseFloat(this.state.capital), parseFloat(this.state.risk), this.state.direction, parseFloat(this.state.price), parseFloat(this.state.stoploss));
    
    // Check if stop loss and SL is too tight
    if (position.getTotal() > parseFloat(this.state.capital)) {
      this.setState({
        hasError : true,
        errorInfo: "Position size is bigger than account capital. Please adjust your risk or stop loss price."
      })
    } 

    // Input to DOM
    this.setState({
      unitsToBuy: position.getUnitsToBuy().toFixed(2),
      total: position.getTotal().toFixed(2),
      totalTolerableRiskPerTrade: position.getTotalTolerableRiskPerTrade().toFixed(2),
      stopLossPerUnitLoss: position.getStopLossPerUnitLoss().toFixed(2),
      totalRiskPerPosition: position.getTotalRiskPerPosition().toFixed(2)
    })
  }

  render() {
    return(
      <div className="mainDiv">
        <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <form>

              {/* Section One */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Inputs</h2>
                    </div>
                  </div>

                  <hr className="border-gray-800"/>

                  {/* long and short */}
                  { this.state.direction === "long" ?
                    <>
                      <div className="mx-5 my-2 bg-dim-600">
                        <button className="text-sm font-bold bg-dim-600 w-1/2 text-green-500 text-center py-2 rounded-lg border-2 border-green-500" value="long" onClick={(event) => {this.handleChangeDirection(event)}} readOnly>
                          Buy
                        </button>
                        <button className="text-sm font-bold bg-dim-600 w-1/2 text-white text-center py-2 rounded-lg" value="short" onClick={this.handleChangeDirection} onClick={(event) => {this.handleChangeDirection(event)}} readOnly>
                          Sell
                        </button>
                      </div>
                      <hr className="border-gray-800" />
                    </> :
                    <>
                      <div className="mx-5 my-2 bg-dim-600">
                        <button className="text-sm font-bold bg-dim-600 w-1/2 text-white text-center py-2 rounded-lg" value="long" onClick={this.handleChangeDirection} onClick={(event) => {this.handleChangeDirection(event)}} readOnly>
                          Buy
                        </button>
                        <button className="text-sm font-bold bg-dim-600 w-1/2 text-red-400 text-center py-2 rounded-lg border-2 border-red-400" value="short" onClick={this.handleChangeDirection} onClick={(event) => {this.handleChangeDirection(event)}} readOnly>
                          Sell
                        </button>
                      </div>
                      <hr className="border-gray-800" />
                    </>
                  }

                 {/*<!--Section 1-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Account Capital<span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="1000" value={this.state.capital} onChange={this.handleChangeCapital}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 2-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Risk <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">%</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="2%" value={this.state.risk} onChange={this.handleChangeRisk}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 3-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Entry Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="25" value={this.state.price} onChange={this.handleChangePrice}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 4-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Stop Loss Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="24" value={this.state.stoploss} onChange={this.handleChangeStopLoss}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                  
                  {/* Enter button checks if there's error */}
                  { this.state.hasError == true ?
                    <>
                      <div className="m-5">
                        <input type="button" value="Enter" className="bg-gray-500 w-full text-white font-bold py-2 px-4 rounded-full cursor-not-allowed"/>
                      </div>
                      <div className="my-5">
                        <p className="px-4 mt-3 mb-1 w-full text-xs text-red-400">
                          {this.state.errorInfo}
                        </p>
                      </div>
                    </> :
                    <>
                      <div className="m-5">
                        <input type="button" value="Enter" className="bg-blue-400 hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={this.handleCalculate}/>
                      </div>
                    </>
                  }

                </div>
              </div>
            </form>

            {/* Section Two */}
            <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">
                <div className="flex">
                  <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Results</h2>
                  </div>
                </div>


                <hr className="border-gray-800"/>

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-2">
                {/*<!--Section 1-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">Units</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.unitsToBuy}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*<!--Section 2-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.total}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
              </div>


              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-2">
                {/*<!--Section 3-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Share<span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.stopLossPerUnitLoss}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*<!--Section 4-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Position <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">%</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.totalRiskPerPosition}%</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {/*<!--Section 5-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Position <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.totalTolerableRiskPerTrade}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*
                  <!--Section 6-->
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">R/R Ratio</p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">3</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                */}
              </div>

              </div>
            </div>

            <Footer />

          </div>
        </section>
      </div>
    );
  }
}

export default TradingCalculator;
