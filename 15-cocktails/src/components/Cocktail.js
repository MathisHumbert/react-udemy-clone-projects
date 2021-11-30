import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ cocktail }) => {
  const {
    idDrink: id,
    strDrink: name,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strDrinkThumb: img,
  } = cocktail;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
