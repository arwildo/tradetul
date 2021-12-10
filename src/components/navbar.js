import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  const location = useLocation().pathname;
  let navbarContent;

  if (location === "/explanation") {
    navbarContent = <>
      <Link to="/explanation" className="group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-full bg-gray-800 text-blue-300">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="invisible sm:visible">
          Managing Risk
        </span>
      </Link>
      <Link to="/" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
        <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="invisible sm:visible">
          Trading Calculator
        </span>
      </Link>
      <Link to="/more" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="invisible sm:visible">
          More
        </span>
        <div className="textSmall ml-2 px-2 border border-blue-400 rounded-full invisible sm:visible">Coming Soon</div>
      </Link>
    </>
  } else if (location === "/more") {
    navbarContent = <>
      <Link to="/explanation" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="invisible sm:visible">
          Managing Risk
        </span>
      </Link>
      <Link to="/" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-full hover:bg-gray-800 ">
        <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="invisible sm:visible">
          Trading Calculator
        </span>
      </Link>
      <Link to="/more" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full bg-gray-800 text-blue-300">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="invisible sm:visible">
          More
        </span>
        <div className="textSmall ml-2 px-2 border border-blue-400 rounded-full invisible sm:visible">Coming Soon</div>
      </Link>
    </>
  } else {
    navbarContent = <>
      <Link to="/explanation" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="invisible sm:visible">
          Managing Risk
        </span>
      </Link>
      <Link to="/" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-full bg-gray-800 text-blue-300">
        <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="invisible sm:visible">
          Trading Calculator
        </span>
      </Link>
      <Link to="/more" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800">
        <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="invisible sm:visible">
          More
        </span>
        <div className="textSmall ml-2 px-2 border border-blue-400 rounded-full invisible sm:visible">Coming Soon</div>
      </Link>
    </>
  }

  return(
    <header className="text-white h-12 py-4 h-auto">
      <div className="w-16 sm:w-60">
        <div className="overflow-y-auto pr-3 w-56 w-60">

          <img src={ Logo } className="h-8 w-8 ml-3" alt="TradeTul" />

          <nav className="mt-5 px-2">
            { navbarContent }
          </nav>

        </div>
      </div>
    </header>
  );
}
