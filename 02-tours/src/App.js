import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [toursData, setToursData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setToursData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTour = (id) => {
    setToursData(toursData.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <main>{<Loading />}</main>;
  }

  if (toursData.length === 0) {
    return (
      <div className="title">
        <h2>our tours</h2>
        <button className="btn" onClick={getData}>
          refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours toursData={toursData} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
