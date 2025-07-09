import { useEffect, useState } from "react";

const UseFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { ...options });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
export default UseFetch;

//useFetch is a custom hook that fetches data from an API and returns the data, loading, and error states.
//It is a good practice to use custom hooks to fetch data from an API.
