import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  function getYear() {
    return new Date().getFullYear();
  }
  return(
    <div>
      <footer className="bg-gray-800 md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
         <ul className="flex justify-center flex-wrap mb-6 md:mb-0">
            <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
            <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
            <li><a href="https://arwildo.com" className="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
         </ul>
         <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">
               <img src={ Logo } className="h-6 mr-2" alt="TradeTul" />
            </a>
         </div>
      </footer>
      <p className="text-center text-sm text-gray-500 my-10">
         &copy; { getYear() } <a href="https://arwildo.com" className="hover:underline" target="_blank">Arwildo</a>. All rights reserved.
      </p>
    </div>
  );
}
