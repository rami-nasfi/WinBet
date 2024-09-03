import React from "react";
import { useParams } from "react-router-dom";
import MarketFilter from "../../navigations/market filter/MarketFilter";
import SportFilter from "../../navigations/sport filter/SportFilter";
import useFetch from "../../../hooks/useFetch";

function Game() {
  const { sportName, id } = useParams();
  const idParam = id.split("-");

  const { data, loading, error } = useFetch("https://raw.githubusercontent.com/rami-nasfi/WinBet/main/front/src/bets.json");

  return (
    <div>
      <SportFilter sportName={sportName} />

      <MarketFilter />
      {idParam[0]}
    </div>
  );
}

export default Game;
