import React from "react";
import Footer from "./footer";

export default function(props) {
  return(
    <div className="mainDiv">
      <section className="max-w-6xl mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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
                    <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeHolder="1000"/>
                  </div>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 2-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Risk (%)</p>
                  <div className="mx-5">
                    <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeHolder="1%"/>
                  </div>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 3-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Entry Price</p>
                  <div className="mx-5">
                    <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeHolder="5"/>
                  </div>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 4-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 mb-1 w-48 text-xs text-gray-400">Stop Loss Price</p>
                  <div className="mx-5">
                    <input className="bg-dim-600 w-full pl-4 rounded h-9 text-white font-bold placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400" placeHolder="4.8"/>
                  </div>
                </div>
              </div>
              <hr className="border-gray-800" />

              <div className="m-5">
                <button className="bg-blue-400 hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded-full">
                  Enter
                </button>
              </div>

            </div>
          </div>

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
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Recom. Size (units)</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">5.0</h2>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
              {/*<!--Section 2-->*/}
              <div>
                <div className="flex">
                  <div className="flex-1">
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">200 USD</h2>
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
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Share</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">2 USD</h2>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
              {/*<!--Section 4-->*/}
              <div>
                <div className="flex">
                  <div className="flex-1">
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Pos</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">5%</h2>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-2">
              {/*<!--Section 5-->*/}
              <div>
                <div className="flex">
                  <div className="flex-1">
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Risked / Pos</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">10 USD</h2>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
              {/*<!--Section 6-->*/}
              <div>
                <div className="flex">
                  <div className="flex-1">
                    <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">R/R Ratio</p>
                    <h2 className="px-4 ml-2 w-48 font-bold text-white">3</h2>
                  </div>
                </div>
                <hr className="border-gray-800" />
              </div>
            </div>

            </div>
          </div>

          <Footer />

        </div>
      </section>
    </div>
  );
}
