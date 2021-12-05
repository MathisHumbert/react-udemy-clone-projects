import React, { useState, useContext, useEffect } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, msg: '' });
  const [query, setQuery] = useState('batman');
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setError({ status: false, msg: '' });
        setMovies(data.Search);
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
    fetchData();
  }, [query]);

  return (
    <AppContext.Provider value={{ query, setQuery, loading, error, movies }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
