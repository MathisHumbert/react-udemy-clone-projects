import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [peoples, setPeoples] = useState(people);
  const [index, setIndex] = useState(0);

  const checkNumber = (num) => {
    if (num > peoples.length - 1) num = 0;
    if (num < 0) num = peoples.length - 1;
    return num;
  };

  const RandomNumber = () => {
    let randomNum = Math.floor(Math.random() * peoples.length);

    if (randomNum === index) {
      randomNum = index + 1;
    }

    return checkNumber(randomNum);
  };
  const { name, job, image, text } = peoples[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => setIndex(checkNumber(index - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            setIndex((oldValue) => {
              return checkNumber(oldValue + 1);
            })
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => setIndex(RandomNumber())}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
