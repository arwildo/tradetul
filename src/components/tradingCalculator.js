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
      stoploss: 24,
      unitsToBuy: 20,
      total: 500,
      totalTolerableRiskPerTrade: 20,
      stopLossPerUnitLoss: 1,
      stopLossTotalLoss: 20,

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
    this.setState({capital: event.target.value});
  }
  // Risk
  handleChangeRisk(event) {
    this.setState({risk: event.target.value});
    if (event.target.value < 100) {
      this.setState({hasError : false});
    } else {
      this.setState({hasError : true});
      this.setState({errorInfo : "Tolerable risk in percent of capital per trade must be less than 100."});
    }
  }
  // Direction
  handleChangeDirection(event) {
    event.preventDefault();
    this.setState({direction: event.target.value});
  }
  // Price
  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }
  // Stop Loss
  handleChangeStopLoss(event) {
    this.setState({stoploss: event.target.value});
  }

  // Calculate Handler
  handleCalculate() {
    // TradingCalculator Engine
    function calculator() {
      var calculator = {};

      var PositiveSignum = function (verify) {
          if (!verify ||
              isNaN(verify) ||
              typeof verify !== 'number' ||
              verify < 0 ||
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
          return (this.capital.provide() * (this.tolerableRiskInPercentOfCapital.provide() / 100)).toFixed(2);
      };

      Position.prototype.getStopLossPerUnitLoss = function () {

      };

      Position.prototype.getStopLossTotalLoss = function () {
          return (this.getStopLossPerUnitLoss() * this.getUnitsToBuy()).toFixed(2);
      };

      Position.prototype.getUnitsToBuy = function () {
          var result = Math.floor((this.getTotalTolerableRiskPerTrade() / this.getStopLossPerUnitLoss()));
          if (this.capital.provide() <= (result * this.pricePerUnit.provide())) {
              return 0;
          } else {
              return result;
          }
      };

      Position.prototype.getTotal = function () {
          return (this.getUnitsToBuy() * this.getPricePerUnit()).toFixed(2);
      };

      Position.prototype.getPricePerUnit = function () {
          return this.pricePerUnit.provide();
      };

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
          return (this.pricePerUnit.provide() - this.stopLossPricePerUnit.provide()).toFixed(2);
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
          return (this.stopLossPricePerUnit.provide() - this.pricePerUnit.provide()).toFixed(2);
      };

      var validateDirection = function(direction){
          if (!direction) {
              throw new TypeError('direction must not be falsey');
          }
          if (typeof direction !== 'string' || !direction instanceof String) {
              throw new TypeError('direction must be a string');
          }
          if (!(direction.toLowerCase() === 'long' || direction.toLowerCase() === 'short')) {
              throw new TypeError('direction must be either long or short');
          }
      };

      calculator.calculate = function (capital,
                                 tolerableRiskInPercentOfCapitalPerTrade,
                                 direction,
                                 pricePerUnit,
                                 stopLossPricePerUnit) {
          validateDirection(direction);
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

    let position = calculator().calculate(parseInt(this.state.capital), parseInt(this.state.risk), this.state.direction, parseInt(this.state.price), parseInt(this.state.stoploss));
    
    // Inputs to Calculator
    this.setState({
      unitsToBuy: position.getUnitsToBuy(),
      total: position.getTotal(),
      totalTolerableRiskPerTrade: position.getTotalTolerableRiskPerTrade(),
      stopLossPerUnitLoss: position.getStopLossPerUnitLoss(),
      stopLossTotalLoss: position.getStopLossTotalLoss()
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
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Account Amount <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
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
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="1%" value={this.state.risk} onChange={this.handleChangeRisk}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 3-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Entry Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="5" value={this.state.price} onChange={this.handleChangePrice}/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 4-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Stop Loss Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="4.8" value={this.state.stoploss} onChange={this.handleChangeStopLoss}/>
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
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Stop Loss / Unit Loss</p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.stopLossPerUnitLoss}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*<!--Section 4-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risking Amount <span className="textSmall ml-1 px-2 w-10 font-bold bg-dim-600 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.stopLossTotalLoss}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-2 mb-10">
                {/*<!--Section 5-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Total Torelable Risk / Trade</p>
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
