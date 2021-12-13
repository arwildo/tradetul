import React from "react";
import Footer from "./footer";

import Build from "../assets/img/build.svg";

class Explanation extends React.Component {
  render() {
    return(
      <div className="mainDiv">
        <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Section One */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Privacy</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mb-16 mx-2">
                    <img src={ Build } className="w-48 mx-auto" alt="Coming Soon" />
                    <p className="text-gray-600 font-extrabold text-xs text-center my-8">
                      COMING SOON
                    </p>
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
