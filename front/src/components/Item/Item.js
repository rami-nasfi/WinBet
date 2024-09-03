import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";

function Item({ item }) {
  const [favListe, setFavListe] = useState([]);
  const [bookmakers, setBookmakers] = useState([]);
  const { data, loading, error } = useFetch("https://raw.githubusercontent.com/rami-nasfi/WinBet/main/front/src/Game.json");
  console.log("heeere", data);
  const handleFav = (id) => {
    setFavListe((prevFavListe) => (prevFavListe.includes(id) ? prevFavListe.filter((item) => item !== id) : [...prevFavListe, id]));
  };
  const handleBookmakers = () => {
    const foundBookmaker = item.bookmakers.find((el) => el.name === "Bet365").bets;
    setBookmakers(foundBookmaker);
  };

  useEffect(() => {
    handleBookmakers();
  }, [item]);
  return (
    <>
      <h1 className=" flex gap-2 items-center justify-between" id={item.league.id}>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-futbol" className="mr-2" />
          {item.league.name}
        </span>
        <FontAwesomeIcon
          icon={`${favListe.includes(item.league.id) ? "fa-solid" : "fa-regular"} fa-star`}
          onClick={() => handleFav(item.league.id)}
        />
      </h1>
      <div className="flex justify-between gap-2" id={item.fixture.id}>
        <h2 className="flex items-center max-w-[85%]">
          <FontAwesomeIcon
            icon={`${favListe.includes(item.fixture.id) ? "fa-solid" : "fa-regular"} fa-star`}
            className="mr-2 cursor-pointer"
            onClick={() => handleFav(item.fixture.id)}
          />
          <span className="whitespace-nowrap overflow-x-auto text-sm">{/* {data.teams.home.name}-{data.teams.away.name} */}</span>
        </h2>
        <span className="whitespace-nowrap text-sm md:text-base">0:0</span>
      </div>
      <div className="ml-10 ">
        <span className="text-xs mr-3">23:08 1 Half</span>
        <span className="text-xs leading-none">Champion's League</span>
      </div>
      <div className="flex gap-2 items-center overflow-x-auto pb-[5px] md:pd-0">
        {bookmakers.map((item) =>
          item.values.map((el) => (
            <div className="flex flex-col text-center  ">
              <span className="bg-blue-200 px-4 text-sm rounded-t whitespace-nowrap">{el.value}</span>
              <span className="bg-blue-400 px-4 text-sm rounded-b whitespace-nowrap">{el.odd}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Item;
