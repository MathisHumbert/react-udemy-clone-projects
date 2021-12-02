import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);

  const prevClick = () => {
    setPage((oldValue) => {
      let newValue = oldValue - 1;
      if (newValue < 0) return data.length - 1;
      return newValue;
    });
  };
  const nextClick = () => {
    setPage((oldValue) => {
      let newValue = oldValue + 1;
      if (newValue > data.length - 1) return 0;
      return newValue;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower {...item} key={item.id} />;
          })}
        </div>
        <div className="btn-container">
          <button className="prev" onClick={prevClick}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page ? 'active' : null}`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next" onClick={nextClick}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
