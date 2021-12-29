import React from "react";
import Footer from "./footer";

// imgs
import InputImg from "../assets/img/input.png";
import ResultImg from "../assets/img/result.png";

// Equations
import RiskPerTrade from "../assets/img/riskPerTrade.svg";
import EntryMinSl from "../assets/img/entryMinSL.svg";
import PositionSizeUnit from "../assets/img/positionSizeUnit.svg";
import PositionSizeUsd from "../assets/img/positionSizeUsd.svg";
import EntryMinSlPer from "../assets/img/entryMinSlPer.svg";

// Get projects data
let database = require('./db.json');
database = database.data;


class Explanation extends React.Component {
  componentDidMount() {
      window.scrollTo(0, 0);
  }
  render() {
    
    let drawDownTable = database.map(item => { 
      return (
        <tr key={item.losses}>
          <td className="py-1 border-b border-gray-700 bg-dim-700 text-xs text-center">
            <p className="whitespace-no-wrap">{item.losses}%</p>
          </td>
          <td className="py-1 border-b border-gray-700 bg-dim-700 text-xs text-center">
            <p className="whitespace-no-wrap">{item.GRB}%</p>
          </td>
        </tr>
      )
    })
    return(
      <div className="mainDiv"> <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Section One */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Explanation</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mt-3 mb-6 mx-2">
                    <div className="px-4 w-full text-sm text-gray-400">
                      <b className="text-left">Why Risk Management so important ?</b>
                      <p className="mt-1 text-justify">
                        Trading capital is trader main working tool. 
                        If you run out of funds to trade, you will be unable to trade and thus lose your job. 
                        No matter which market you are trading or which trading strategy you apply, 
                        losses are inevitably going to happen.
                      </p>
                      <br />
                      <p className="text-justify">
                        Therefore, risk management to protecting your trading capital is the number one priority when trading. 
                        Ideally, the amount you risk on each trade should be based on two thing: 
                      </p>
                      <br />
                      <p>
                          1. Controlling Drawdown
                        <br/>
                          2. Position Size 
                      </p>
                      <br />
                      <br />

                      <b>Controlling Drawdown</b>
                      <p className="mt-1">
                        A drawdown is the reduction of your trading capital after a series of losses. 
                        The drawdown is calculated as a percentage difference between the peak in your 
                        trading capital minus the capital after a series of losses.
                      </p>
                      <br />
                      <p>
                        No matter how strong your trading strategy is, you will eventually experience
                        a losing streak. The bigger the drawdown, the harder it will be to recover 
                        from the drawdown. Now, what is the reasonable limit? Have a look at the table below.
                      </p>
                      <br />

                      <table className="min-w-full leading-normal">

                        <thead>
                          <tr>
                            <th
                              className="px-6 py-2 border-b-2 border-gray-700 bg-dim-600 text-center text-xs font-semibold tracking-wider">
                              Losses
                            </th>
                            <th
                              className="px-6 py-2 border-b-2 border-gray-700 bg-dim-600 text-center text-xs font-semibold tracking-wider">
                              Gain Required<br /> 
                              to Breakeven
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          { drawDownTable }
                        </tbody>

                      </table>
                      <br />

                      <p>
                        The above table illustrates what is the percentage gain required to recover lost capital. 
                        If you notice, at 30% loss, we need 42.9% gain to recover the loss and get back to breakeven.
                        Therefore choosing the right risk between 1-3% account capital  per trade is the best 
                        practice.
                      </p>

                    </div>
                  </div>
                  <hr className="border-gray-800" />
                  
                </div>
              </div>

              {/* Section Two */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mt-3 mb-6 mx-2">
                    <div className="px-4 w-full text-sm text-gray-400 text-justify">
                      <b>Position Size</b>
                      <p className="mt-1">
                        Calculating the right position size is part of capital 
                        preservation and key to survive long term in trading.
                        You can use trading calculator to choosing the right position size 
                        based on your entry price, stop loss price and risk per trade.
                      </p>
                      <br />
                      <img src={ InputImg } className="w-full mx-auto" alt="Coming Soon" />
                      <br />
                      <p>
                        In this example a trader have 1000 on his account, he's willing to 
                        risk 2% of his capital to buy $dYdX at $25 and he saw if the price 
                        hit $24 the bullish structure (higher high, higher low) is broken 
                        therefore if the price hit $24 he will get out of that trade with loss.
                      </p>
                      <br />
                      <img src={ ResultImg } className="w-full mx-auto" alt="Coming Soon" />
                      <br />
                      <p>
                        Based on his entry price, stop loss price and risk per trade the 
                        recommended position size is 20 of $dYdX or 500 USD. When the 
                        trade doesn't goes as plan, the trader is manage his risk by 
                        exit at his SL price and only loss $20 or 4% from his position 
                        size at this trade or 2% from his account capital.
                      </p>
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                </div>
              </div>

              {/* Section Three */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mt-3 mb-6 mx-2">
                    <div className="px-4 w-full text-sm text-gray-400 text-justify">
                      <b>Equations</b>
                      <p className="mt-1">
                        This are the equations used to calculate the risk calculator results:
                      </p>
                      <img src={ RiskPerTrade } className="w-70 mt-5" alt="Risk per Trade" />
                      <img src={ EntryMinSl } className="w-70 mt-5" alt="Entry Price minus Stop Loss Price" />
                      <img src={ PositionSizeUnit } className="w-70 mt-5" alt="Position Size Unit" />
                      <img src={ PositionSizeUsd } className="w-70 mt-5" alt="Position Size USD" />
                      <img src={ EntryMinSlPer } className="w-70 mt-5" alt="EntryPrice minus Stop Loss Percentage" />
                    </div>
                  </div>
                  <hr className="border-gray-800" />

                </div>
              </div>

            <Footer />

          </div>
        </section>
      </div>
    );
  }
}

export default Explanation;
