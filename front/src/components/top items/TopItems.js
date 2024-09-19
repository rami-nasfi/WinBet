import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
function TopItems({ itemData }) {
  const { data, loading, error } = useFetch("https://raw.githubusercontent.com/rami-nasfi/WinBet/main/front/src/Game.json");

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <nav className="bg-blue-950 p-2 flex justify-between items-center ">
        <span className="text-white font-bold">
          <FontAwesomeIcon icon={`fa-solid  ${itemData.icon}`} className="mr-2" />
          {itemData.sectionName} ({itemData.game})
        </span>
        <span className="text-white text-sm leading-none">
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </span>
      </nav>
      <div className="flex flex-row justify-stretch p-2 overflow-x-auto gap-2">
        {data.map((item) => (
          <div className="p-2 border rounded text-left flex flex-col gap-1  flex-grow-0 flex-shrink-0 flex-basis-auto w-[95%] sm:w-[50%] md:w-[33.33%]">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopItems;
