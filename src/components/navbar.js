import React from "react";

import Logo from "../assets/img/tradetul.svg";

export default function(props) {
  return(
    <header className="text-white h-12 py-4 h-auto">
      <div className="w-16 sm:w-60">
        <div className="overflow-y-auto pr-3 w-56 w-60">

          <img src={ Logo } className="h-8 w-8 ml-3" alt="TradeTul" />

          <nav className="mt-5 px-2">
            <a href="#" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="invisible sm:visible">
                Managing Risk
              </span>
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-full bg-gray-800 text-blue-300">
              <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="invisible sm:visible">
                Trading Calculator
              </span>
            </a>
            {/* Fear Greed Index
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              <span className="invisible sm:visible">
                Fear Greed Index
              </span>
            </a>
            */}
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-full hover:bg-gray-800">
              <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="invisible sm:visible">
                More
              </span>
              <div className="textSmall ml-2 px-2 border border-blue-400 rounded-full invisible sm:visible">Coming Soon</div>
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
