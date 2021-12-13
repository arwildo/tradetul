import React from "react";
import Footer from "./footer";

import Build from "../assets/img/build.svg";

class Terms extends React.Component {
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
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Terms of Service</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mb-4 mx-2">
                    <p className="px-4 w-full text-sm text-gray-400 text-justify">
                      Use at own discretion and risk. The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
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

export default Terms;
