import React from 'react';
import Tour from './Tour';
const Tours = ({ toursData, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <Tour toursData={toursData} deleteTour={deleteTour} />
      </div>
    </section>
  );
};

export default Tours;
