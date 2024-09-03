import React from "react";
import SportFilter from "../../navigations/sport filter/SportFilter";
import Item from "../../Item/Item";
import { useParams } from "react-router-dom";

function Section() {
  const { sportName } = useParams(); // Get the sportName from the URL

  return (
    <>
      <SportFilter sportName={sportName} />
      <div className=" flex flex-col gap-1 p-1">
        <div className="p-2 border rounded text-left flex flex-col ">
          <Item item={{}} />
        </div>
        <div className="p-2 border rounded text-left flex flex-col">
          <Item item={{}} />
        </div>
      </div>
    </>
  );
}

export default Section;
