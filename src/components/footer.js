import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  function getYear() {
    return new Date().getFullYear();
  }
  return(
    <div className="flow-root m-6 inline">
      <div className="flex-1">
        <div className="flex">
          <a href="/Terms">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Terms</p>
          </a>
          <a href="/Privacy">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Privacy</p>
          </a>
          <a href="Cookies">
            <p className="text-xs leading-6 font-medium text-gray-500 mr-2">Cookies</p>
          </a>
          <a href="Contact">
            <p className="text-xs leading-6 font-medium text-gray-500">Contact</p>
          </a>
        </div>
      </div>
      <div className="flex-2">
        <p className="text-xs leading-6 font-medium text-gray-600">
         &copy; { getYear() } <a href="https://arwildo.com" className="hover:underline" target="_blank">Arwildo</a>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
