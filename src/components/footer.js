import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  function getYear() {
    return new Date().getFullYear();
  }
  return(
    <div className="flow-root m-6 inline">
      <div className="flex-1">
        <a href="#">
          <p className="text-xs leading-6 font-medium text-gray-500">Terms Privacy Policy Cookies Contact
          </p>
        </a>
      </div>
      <div className="flex-2">
        <p className="text-xs leading-6 font-medium text-gray-600">
         &copy; { getYear() } <a href="https://arwildo.com" className="hover:underline" target="_blank">Arwildo</a>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
