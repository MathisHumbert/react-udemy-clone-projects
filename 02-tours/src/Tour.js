import React, { useState } from 'react';

const Tour = ({ toursData, deleteTour }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {toursData.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <article key={id} className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {showMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
              <button className="delete-btn" onClick={() => deleteTour(id)}>
                not interested
              </button>
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default Tour;
