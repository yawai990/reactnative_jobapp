import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

export const useFetch = (endpoints, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f3cb2bb4bdmsh6c1d749be359eafp1ea1ecjsn3c4d9e48fa16",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoints}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const resp = await axios.request(options);

      setData(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, isError, refetch };
};
