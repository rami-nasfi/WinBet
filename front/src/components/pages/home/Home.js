import React, { useEffect, useState } from "react";
import TopItems from "../../top items/TopItems";

function Home() {
  const itemData = [
    {
      sectionName: "Top Live",
      game: 317,
      icon: "fa-record-vinyl",
    },
    {
      sectionName: "Top Sport",
      game: 508,
      icon: "fa-futbol",
    },
  ];

  return (
    <>
      {itemData.map((item) => (
        <TopItems itemData={item} />
      ))}
    </>
  );
}

export default Home;
