import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url1, url2) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(url1, {
        //   // const res = await axios.get("https://raw.githubusercontent.com/rami-nasfi/WinBet/main/front/src/bets.json", {
        //   headers: {
        //     "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        //     "x-rapidapi-host": "v3.football.api-sports.io",
        //   },
        // });
        const res = await axios.get(url1);
        console.log("json test", res.data.response);

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

  return { data, loading, error };
};

export default useFetch;
