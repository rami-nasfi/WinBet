import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SportFilter({ sportName }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const sportList = [
    { id: 1, name: "All Sports", icon: "fa-border-all", total: 432 },
    { id: 2, name: "Favorites", icon: "fa-star", total: 43 },
    { id: 3, name: "Football", icon: "fa-futbol", total: 12 },
    { id: 4, name: "Tennis", icon: "fa-table-tennis-paddle-ball", total: 55 },
    { id: 5, name: "Handball", icon: "fa-baseball", total: 25 },
    { id: 6, name: "Handball", icon: "fa-baseball", total: 25 },
    { id: 7, name: "Handball", icon: "fa-baseball", total: 25 },
    { id: 8, name: "Handball", icon: "fa-baseball", total: 25 },
    { id: 9, name: "Handball", icon: "fa-baseball", total: 25 },
  ];
  const handleFilter = (sport) => {
    setActive(sport.id);
    navigate(`/sport/${sport.name.toLowerCase()}`);
  };
  useEffect(() => {
    console.log(sportName);
    if (sportName) {
      const sportData = sportList.find((item) => item.name.toLowerCase() === sportName.toLowerCase());
      setActive(sportData.id);
    } else {
      setActive();
    }
  }, [sportName]);
  return (
    <nav className="flex justify-start bg-blue-950 text-blue-200 overflow-x-auto">
      <ul className="flex justify-start gap-1">
        {sportList.map((sport) => {
          return (
            <li
              className={`relative px-6 py-2 flex flex-col justify-center cursor-pointer ${active === sport.id && "text-gray-200"}`}
              key={sport.id}
              onClick={() => handleFilter(sport)}
            >
              <FontAwesomeIcon icon={`fa-solid ${sport.icon}`} className="text-3xl m-1" />
              <span className="text-sm whitespace-nowrap">{sport.name}</span>
              <span className="absolute top-0 right-0 text-xs">{sport.total}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SportFilter;
