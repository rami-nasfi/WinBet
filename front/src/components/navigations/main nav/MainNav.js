import React from "react";

function MainNav() {
  return (
    <div className="bg-sky-800">
      <ul className="flex flex-row items-center overflow-auto p-2">
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Trending
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Live
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Live Betting
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Sports
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Casino
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white text-nowrap p-2">
            Poker
          </a>
        </li>
      </ul>
    </div>
  );
}
export default MainNav;
