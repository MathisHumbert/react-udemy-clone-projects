import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [reviews, setReviews] = useState(data);
  const [value, setValue] = useState(0);

  const checkNumber = (num) => {
    if (num < 0) return data.length - 1;
    if (num > data.length - 1) return 0;
    return num;
  };

  useEffect(() => {
    const auto = setInterval(() => {
      setValue(checkNumber(value + 1));
    }, 3000);
    return () => {
      clearInterval(auto);
    };
  }, [value]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {reviews.map((review, index) => {
          const { id, image, name, title, quote } = review;

          let slideClass = 'nextSlide';

          if (index === value) {
            slideClass = 'activeSlide';
          }

          if (
            index === value - 1 ||
            (value === 0 && index === data.length - 1)
          ) {
            slideClass = 'lastSlide';
          }

          return (
            <article key={id} className={slideClass}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setValue(checkNumber(value - 1))}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setValue(checkNumber(value + 1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
