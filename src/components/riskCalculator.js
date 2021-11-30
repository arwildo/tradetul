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
                  <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Input</h2>
                </div>
              </div>


              <hr className="border-gray-800"/>

             {/*<!--Section 1-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size (units)</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">50,000</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 2-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Value</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">200 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 3-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Potential Lost</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">10 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 4-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Potential Gain</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">30 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 5-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Reward Risk Ratio</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">3</h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">3:1 RR</p>
                </div>
              </div>
              <hr className="border-gray-800" />

            </div>
          </div>

          {/* Section One */}
          <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">
              <div className="flex">
                <div className="flex-1 m-2">
                  <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Results</h2>
                </div>
              </div>


              <hr className="border-gray-800"/>

             {/*<!--Section 1-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Size (units)</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">50,000</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 2-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Position Value</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">200 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 3-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Potential Lost</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">10 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 4-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Potential Gain</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">30 USD</h2>
                </div>
              </div>
              <hr className="border-gray-800" />

             {/*<!--Section 5-->*/}
              <div className="flex">
                <div className="flex-1">
                  <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">Reward Risk Ratio</p>
                  <h2 className="px-4 ml-2 w-48 font-bold text-white">3</h2>
                  <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">3:1 RR</p>
                </div>
              </div>
              <hr className="border-gray-800" />
              <Footer />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
