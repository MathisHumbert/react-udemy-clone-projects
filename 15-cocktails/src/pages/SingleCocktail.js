import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    const {
      strDrink: name,
      strAlcoholic: alcoholic,
      strGlass: glass,
      strDrinkThumb: img,
      strCategory: category,
      strInstructions: instructions,
      strIngredient1: ing1,
      strIngredient2: ing2,
      strIngredient3: ing3,
      strIngredient4: ing4,
      strIngredient5: ing5,
    } = data.drinks[0];
    const ingredients = [ing1, ing2, ing3, ing4, ing5];
    const tempCocktail = {
      name,
      alcoholic,
      glass,
      img,
      category,
      instructions,
      ingredients,
    };

    setCocktail(tempCocktail);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.img} alt={cocktail.name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {cocktail.name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {cocktail.category}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {cocktail.instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {cocktail.ingredients.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
