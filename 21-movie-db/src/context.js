import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

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
