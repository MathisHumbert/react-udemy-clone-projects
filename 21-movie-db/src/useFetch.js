import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setError({ status: false, msg: '' });
        setData(data.Search || data);
      } else {
        setError({ status: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { loading, error, data };
};

export default useFetch;
