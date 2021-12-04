import React from "react";
import Footer from "./footer";

class TradingCalculator extends React.Component {
  constructor(props) {
    super();

    this.state = {
      capital: "1000",
      risk: "2",
      direction: "Long",
      price: "25",
      stoploss: "24"
    }

    this.calculate = this.calculator.bind(this);
  }

  // TradingCalculator Engine
  calculator() {
    var calculator = {};

    var PositiveSignum = function (verify) {
        if (!verify ||
            isNaN(verify) ||
            typeof verify !== 'number' ||
            verify < 0 ||
            verify === 0 || !isFinite(verify)) {
            throw new TypeError('All numbers must have positive signum');
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
            throw new TypeError('Tolerable risk in percent of capital per trade must be less than 100');
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

    function Long(capital,
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

    Long.prototype = Object.create(Position.prototype);
    Long.prototype.constructor = Position;
    Long.prototype.getStopLossPerUnitLoss = function () {
        return (this.pricePerUnit.provide() - this.stopLossPricePerUnit.provide()).toFixed(2);
    };

    function Short(capital,
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

    Short.prototype = Object.create(Position.prototype);
    Short.prototype.constructor = Position;
    Short.prototype.getStopLossPerUnitLoss = function () {
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
            return new Long(
                new Capital(capital),
                new TolerableRiskInPercentOfCapital(tolerableRiskInPercentOfCapitalPerTrade),
                new PricePerUnit(pricePerUnit),
                new StopLossPricePerUnit(stopLossPricePerUnit)
            );
        } else {
            return new Short(
                new Capital(capital),
                new TolerableRiskInPercentOfCapital(tolerableRiskInPercentOfCapitalPerTrade),
                new PricePerUnit(pricePerUnit),
                new StopLossPricePerUnit(stopLossPricePerUnit)
            );
        }
    };

    return calculator;
  };

  render() {
    return(
      <div className="mainDiv">
        <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <form onSubmit={this.calculate}>

              {/* Section One */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Inputs</h2>
                    </div>
                  </div>


                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Account Amount</p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="1000"/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 2-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Risk (%)</p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="1%"/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 3-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Entry Price</p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="5"/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                 {/*<!--Section 4-->*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Stop Loss Price</p>
                      <div className="mx-5">
                        <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="4.8"/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                  <div className="m-5">
                    <button type="submit" value="submit" className="bg-blue-400 hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded-full">
                      Enter
                    </button>
                  </div>

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
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Recommend Position Size</p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.capital}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*<!--Section 2-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size <span className="textSmall ml-1 px-2 w-10 border border-blue-400 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.risk} USD</h2>
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
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.direction}</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                </div>
                {/*<!--Section 4-->*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risking Amount <span className="textSmall ml-1 px-2 w-10 border border-blue-400 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.price}</h2>
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
                      <h2 className="px-4 ml-2 w-48 font-bold text-white">{this.state.stoploss}</h2>
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
