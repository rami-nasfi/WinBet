import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function TopItems({ itemData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://v3.afootball.api-sports.io/odds?date=2024-09-02", {
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });
        console.log(res.data.response);

        // Check if res.data.response is an array
        if (Array.isArray(res.data.response)) {
          setData(res.data.response);
        } else {
          console.error("Response data is not an array:", res.data.response);
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        <div className="p-2 border rounded text-left flex flex-col gap-1  flex-grow-0 flex-shrink-0 flex-basis-auto w-[95%] sm:w-[50%] md:w-[33.33%]">
          <Item item={{}} />
        </div>
        <div className="p-2 border rounded text-left flex flex-col gap-1  flex-grow-0 flex-shrink-0 flex-basis-auto w-[95%] sm:w-[50%] md:w-[33.33%]">
          <Item item={{}} />
        </div>
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
