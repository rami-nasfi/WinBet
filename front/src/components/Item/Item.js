import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({ item }) {
  const [favListe, setFavListe] = useState([]);
  const handleFav = (id) => {
    setFavListe((prevFavListe) => (prevFavListe.includes(id) ? prevFavListe.filter((item) => item !== id) : [...prevFavListe, id]));
  };
  return (
    <>
      <h1 className=" flex gap-2 items-center justify-between">
        <span>
          <FontAwesomeIcon icon="fa-solid fa-futbol" className="mr-2" />
          {item.league?.name || "test"}
        </span>
        <FontAwesomeIcon icon={`${favListe.includes(1) ? "fa-solid" : "fa-regular"} fa-star`} onClick={() => handleFav(1)} />
      </h1>
      <div className="flex justify-between gap-2">
        <h2 className="flex items-center max-w-[85%]">
          <FontAwesomeIcon
            icon={`${favListe.includes(2) ? "fa-solid" : "fa-regular"} fa-star`}
            className="mr-2 cursor-pointer"
            onClick={() => handleFav(2)}
          />
          <span className="whitespace-nowrap overflow-x-auto text-sm">{item.league?.name || "test"}</span>
        </h2>
        <span className="whitespace-nowrap text-sm md:text-base">0:0</span>
      </div>
      <div className="ml-10 ">
        <span className="text-xs mr-3">23:08 1 Half</span>
        <span className="text-xs leading-none">Champion's League</span>
      </div>
      <div className="flex gap-2 items-center overflow-x-auto pb-[5px] md:pd-0">
        <div className="flex flex-col text-center  ">
          <span className="bg-blue-200 px-4 text-sm rounded-t whitespace-nowrap">X</span>
          <span className="bg-blue-400 px-4 text-sm rounded-b whitespace-nowrap">1.32</span>
        </div>
        <div className="flex flex-col text-center  ">
          <span className="bg-blue-200 px-4 text-sm rounded-t whitespace-nowrap">X</span>
          <span className="bg-blue-400 px-4 text-sm rounded-b whitespace-nowrap">1.32</span>
        </div>
      </div>
    </>
  );
}

export default Item;
