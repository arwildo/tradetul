import React from "react";
import Footer from "./footer";

export default function(props) {
  return(
    <main role="main">
      <div className="flex divMain">

        <section className="w-3/5 max-w-xl">
          <aside className="h-12 position-relative">
            <div className="max-w-xs">
              <div className="overflow-y-auto fixed h-screen">

                <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                  <div className="flex">
                    <div className="flex-1 m-2">
                        <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Input</h2>
                    </div>
                      {/* Icon
                        <div className="flex-1 px-4 py-2 m-2">
                            <a href="" className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                                <svg className="m-2 h-6 w-6" fill="none" strokeLinecap="round" strokeWidth="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </a>
                        </div>
                      */}
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
            </div>
          </aside>
        </section>

        {/* Right Section */}
        <aside className="w-2/5 h-12 position-relative">
          <div className="max-w-xs">
            <div className="overflow-y-auto fixed  h-screen">

              <div className="w-64 rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
                <div className="flex">
                  <div className="flex-1 m-2">
                    <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Results</h2>
                  </div>
                    {/* Icon
                      <div className="flex-1 px-4 py-2 m-2">
                          <a href="" className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right">
                              <svg className="m-2 h-6 w-6" fill="none" strokeLinecap="round" strokeWidth="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                  </path>
                                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                          </a>
                      </div>
                    */}
                  </div>


                  <hr className="border-gray-800" />

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
              <Footer />

            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
