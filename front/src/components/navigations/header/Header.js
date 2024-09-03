import React, { useState } from "react";

function Header() {
  return (
    <nav className="w-screen  bg-blue-200 flex flex-row justify-between items-center">
      <div className="flex flex-col items-start">
        <a href="" className="text-2xl  font-bold">
          BetWin
        </a>
        <span className="text-sm leading-none">Tunisia</span>
      </div>
      <ul className="flex gap-2 p-2 justify-end">
        <li>
          <a href="" className="p-2 text-white  bg-green-600 rounded">
            Registration
          </a>
        </li>
        <li>
          <a href="" className="p-2 text-white  bg-blue-600 rounded">
            Login
          </a>
        </li>
        <li>
          <a href="">
            <svg
              className="-rotate-90 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20V10M6 20V4M18 20v-4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
