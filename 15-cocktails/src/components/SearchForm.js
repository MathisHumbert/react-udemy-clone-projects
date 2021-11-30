import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setCocktailName } = useGlobalContext();
  const cocktailName = React.useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = () => {
    setCocktailName(cocktailName.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={cocktailName}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
