import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState('a');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${cocktailName}`);
      const data = await response.json();
      if (data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cocktailName]);

  return (
    <AppContext.Provider value={{ cocktails, loading, setCocktailName }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
