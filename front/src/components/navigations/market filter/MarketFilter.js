import React from "react";

function MarketFilter() {
  const sportList = [
    { id: 1, name: "All Sports", icon: "fa-border-all", total: 432 },
    { id: 2, name: "Favorites", icon: "fa-star", total: 43 },
  ];

  return (
    <nav className="flex justify-start bg-blue-950 text-blue-200 overflow-x-auto">
      <ul className="flex justify-start gap-2 p-2">
        {sportList.map((sport) => {
          return (
            <li className={`relative p-2 flex flex-col justify-center cursor-pointer `} key={sport.id}>
              <span className="text-sm whitespace-nowrap">{sport.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MarketFilter;
