import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Index = () => {
  return ( 
   <div className="flex items-center justify-center min-h-screen bg-gray-900">
     <div className="max-w-3xl w-full mx-auto z-10 my-10">
        <div className="flex flex-col">

          <div className="bg-gray-800 border border-gray-900 shadow-lg rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">
              <div className="flex-auto sm:ml-5 justify-evenly">
                <div className="flex items-center justify-between sm:mt-2">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">Title</div>
                      <div className="flex-auto text-gray-400 my-1">
                        <span className="mr-3 ">Desc</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
