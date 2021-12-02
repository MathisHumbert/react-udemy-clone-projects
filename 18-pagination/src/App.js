import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [index, setIndex] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[index]);
  }, [loading]);

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
        <div className="btn-container"></div>
      </section>
    </main>
  );
}

export default App;
