import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  return(
    <nav className="bg-gray-800 border-b border-gray-700 fixed w-full">
      <div className="px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a href="#" className="text-xl font-bold flex items-center lg:ml-3">
              <img src={ Logo } className="h-6" alt="TradeTul" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
