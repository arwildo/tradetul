import React from "react";

class Futures extends React.Component {
  constructor(props) {
    super();

    this.state = {
      margin: 50,
      entryPrice: 3.1174,
      slPrice: 3.1380,

      // Calculated values
      optimalLeverage: 0,
      positionSize: 0,
      riskAmount: 0,
      targetPrice: 0,
      potentialProfit: 0,
      totalExposure: 0,
      priceDiff: 0,
      isLong: true,

      hasError: false,
      errorInfo: ""
    }

    this.handleChangeMargin = this.handleChangeMargin.bind(this);
    this.handleChangeEntryPrice = this.handleChangeEntryPrice.bind(this);
    this.handleChangeSlPrice = this.handleChangeSlPrice.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  // Margin handler
  handleChangeMargin(event) {
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");
    this.setState({margin: onlyNums}, () => {
      this.calculate();
    });
  }

  // Entry Price handler
  handleChangeEntryPrice(event) {
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");
    this.setState({entryPrice: onlyNums}, () => {
      this.calculate();
    });
  }

  // Stop Loss Price handler
  handleChangeSlPrice(event) {
    if (isNaN(event.target.value)) {
      return;
    }
    const onlyNums = event.target.value.replace(/[^0-9\.]/g, "");
    this.setState({slPrice: onlyNums}, () => {
      this.calculate();
    });
  }

  // Main calculation logic
  calculate() {
    const marginVal = parseFloat(this.state.margin) || 0;
    const entryVal = parseFloat(this.state.entryPrice) || 0;
    const slVal = parseFloat(this.state.slPrice) || 0;

    if (marginVal === 0 || entryVal === 0 || slVal === 0) {
      this.setState({
        hasError: false,
        optimalLeverage: 0,
        positionSize: 0,
        riskAmount: 0,
        targetPrice: 0,
        potentialProfit: 0,
        totalExposure: 0,
        priceDiff: 0
      });
      return;
    }

    // Price difference
    const priceDiff = Math.abs(entryVal - slVal);

    // Target risk (5% dari margin)
    const targetRisk = marginVal * 0.05;

    // Required size untuk achieve 5% risk
    const requiredSize = targetRisk / priceDiff;

    // Required total exposure
    const requiredExposure = requiredSize * entryVal;

    // Required leverage (minimum)
    let requiredLeverage = Math.ceil(requiredExposure / marginVal);

    // Check if leverage is reasonable (max 100x)
    let actualLeverage = requiredLeverage;
    let actualSize = requiredSize;
    let actualRisk = targetRisk;
    let actualExposure = requiredExposure;
    let hasError = false;
    let errorInfo = "";

    if (requiredLeverage > 100) {
      // Limit to 100x leverage
      actualLeverage = 100;
      actualExposure = marginVal * 100;
      actualSize = actualExposure / entryVal;
      actualRisk = actualSize * priceDiff;
      hasError = true;
      errorInfo = `⚠️ Laverage is limited	to 100x.`;
    }

    // Detect position type (long/short)
    const isLong = slVal < entryVal;

    // Target price (3RR)
    const targetPriceVal = isLong
      ? entryVal + (3 * priceDiff)
      : entryVal - (3 * priceDiff);

    // Potential profit (3x risk)
    const profit = actualRisk * 3;

    this.setState({
      optimalLeverage: actualLeverage,
      positionSize: actualSize,
      riskAmount: actualRisk,
      targetPrice: targetPriceVal,
      potentialProfit: profit,
      totalExposure: actualExposure,
      priceDiff: priceDiff,
      isLong: isLong,
      hasError: hasError,
      errorInfo: errorInfo
    });
  }

  componentDidMount() {
    this.calculate();
  }

  render() {
    return(
      <div className="mainDiv">
        <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              {/* Section One - Inputs */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Inputs</h2>
                    </div>
                  </div>


                  {/* Position Type Display */}
                  <div className="mx-5 my-2">
                    {this.state.isLong ? (
                      <div className="text-center py-2">
                        <span className="text-sm font-bold text-green-400 px-4 py-2 rounded-lg border-2 border-green-400">
                          LONG Position
                        </span>
                      </div>
                    ) : (
                      <div className="text-center py-2">
                        <span className="text-sm font-bold text-red-400 px-4 py-2 rounded-lg border-2 border-red-400">
                          SHORT Position
                        </span>
                      </div>
                    )}
                  </div>

                 {/*Input 1 - Total Margin*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Total Margin<span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input
                          className="bg-gray-700 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="50"
                          value={this.state.margin}
                          onChange={this.handleChangeMargin}
                          autoFocus
                        />
                      </div>
                      <div className="mx-6">
                        <p className="mt-1 w-full text-xs text-gray-600">Your available trading margin for position sizing.</p>
                      </div>
                    </div>
                  </div>

                 {/*Input 2 - Entry Price*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Entry Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input
                          className="bg-gray-700 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="3.1174"
                          value={this.state.entryPrice}
                          onChange={this.handleChangeEntryPrice}
                        />
                      </div>
                      <div className="mx-6">
                        <p className="mt-1 w-full text-xs text-gray-600">The price at which you plan to enter the position.</p>
                      </div>
                    </div>
                  </div>

                 {/*Input 3 - Stop Loss Price*/}
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Stop Loss Price <span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <div className="mx-5">
                        <input
                          className="bg-gray-700 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="3.1380"
                          value={this.state.slPrice}
                          onChange={this.handleChangeSlPrice}
                        />
                      </div>
                      <div className="mx-6 mb-10">
                        <p className="mt-1 w-full text-xs text-gray-600">Your stop loss price for risk management.</p>
                      </div>
                    </div>
                  </div>

                  {/* Error/Warning Display */}
                  {this.state.hasError && (
                    <div className="my-5">
                      <p className="px-4 mt-3 mb-1 w-full text-xs text-yellow-400">
                        {this.state.errorInfo}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Section Two - Results */}
            <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">
                <div className="flex">
                  <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Results</h2>
                  </div>
                </div>


              {/* Row 1 - Main Results */}
              <div className="grid grid-cols-1 gap-2">
                {/*Optimal Leverage*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Optimal Leverage <span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">x</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-xl text-yellow-300">{this.state.optimalLeverage}x</h2>
                      <div className="mx-6">
                        <p className="w-full text-xs text-gray-600">Required leverage to achieve 5% risk per trade.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Position Size*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size <span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">Units</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-xl text-blue-300">{this.state.positionSize.toFixed(2)}</h2>
                      <div className="mx-6">
                        <p className="w-full text-xs text-gray-600">Number of units to trade based on your risk parameters.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Risk Amount*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risk Amount<span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-xl text-red-300">${this.state.riskAmount.toFixed(2)}</h2>
                      <div className="mx-6">
                        <p className="w-full text-xs text-gray-600">Maximum amount at risk (5% of total margin). This will be lost if stop loss is hit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Price Details */}
              <div className="grid grid-cols-2 gap-2">
                {/*Target Price*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Target Price (3RR) <span className="textSmall ml-1 sm:px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-green-300">${this.state.targetPrice.toFixed(4)}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-6">
                <p className="mt-2 w-full text-xs text-gray-600">Target price for 3:1 risk-reward ratio and price difference between entry and stop loss.</p>
              </div>

              {/* Row 3 - Profit & Exposure */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {/*Potential Profit*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Potential Profit <span className="textSmall ml-1 sm:px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-green-400">${this.state.potentialProfit.toFixed(2)}</h2>
                    </div>
                  </div>
                </div>
                {/*Total Exposure*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Total Exposure <span className="textSmall ml-1 sm:px-2 w-10 font-bold bg-gray-700 rounded-full">USD</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-purple-300">${this.state.totalExposure.toFixed(2)}</h2>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>

            {/* Section Three - Additional Info */}
            <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-72 sm:w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">
                <div className="flex">
                  <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Risk Management</h2>
                  </div>
                </div>


              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-2 mb-8">
                {/*Risk Percentage*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risk Percentage <span className="textSmall ml-1 px-2 w-10 font-bold bg-gray-700 rounded-full">%</span></p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-xl text-red-300">5%</h2>
                      <div className="mx-6">
                        <p className="mt-1 w-full text-xs text-gray-600">Fixed risk percentage applied to every trade for consistent risk management.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*RR Ratio*/}
                <div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risk/Reward Ratio</p>
                      <h2 className="px-4 ml-2 w-48 font-extrabold text-xl text-green-300">1:3</h2>
                      <div className="mx-6">
                        <p className="mt-1 w-full text-xs text-gray-600">For every $1 risked, potential profit is $3. This provides favorable risk-reward asymmetry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>

            </div>

        </section>
      </div>
    );
  }
}

export default Futures;
