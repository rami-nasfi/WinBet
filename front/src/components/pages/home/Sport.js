import React from "react";
import SportFilter from "../../navigations/sport filter/SportFilter";
import Item from "../../Item/Item";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

function Sport() {
  const { sportName } = useParams(); // Get the sportName from the URL
  const { data, loading, error } = useFetch("../../Game.json", "");
  console.log("test Section file", data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <SportFilter sportName={sportName} />
      <div className=" flex flex-col gap-1 p-1">
        {data.map((item) => (
          <div className="p-2 border rounded text-left flex flex-col">
            <Item item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Sport;
