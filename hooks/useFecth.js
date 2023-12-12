import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'b3ccf321cbmsh2fbd2a82fc8da60p178c78jsn87ec501f4ce6',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch };
};

export default useFetch;