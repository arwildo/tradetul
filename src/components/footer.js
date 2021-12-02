import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  function getYear() {
    return new Date().getFullYear();
  }
  return(
    <div className="flow-root m-2 inline">
      <div className="flex-1">
        <div className="flex">
          <a href="/terms">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Terms</p>
          </a>
          <a href="/privacy">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Privacy</p>
          </a>
          <a href="/cookies">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Cookies</p>
          </a>
          <a href="/contact">
            <p className="text-xs leading-6 font-medium text-gray-500">Contact</p>
          </a>
        </div>
      </div>
      <div className="flex-2">
        <p className="text-xs leading-6 font-medium text-gray-600">
         &copy; { getYear() } <a href="https://arwildo.com" className="hover:underline" target="_blank">Arwildo</a>. Built for dYdX Competition.
        </p>
      </div>
    </div>
  );
}
