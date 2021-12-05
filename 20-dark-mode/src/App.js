import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const localStorageColor = localStorage.getItem('color') || 'light-theme';

function App() {
  const [color, setColor] = useState(localStorageColor);
  useEffect(() => {
    document.documentElement.className = color;
  }, []);

  const toggleColor = () => {
    if (document.documentElement.className === 'light-theme') {
      document.documentElement.className = 'dark-theme';
    } else {
      document.documentElement.className = 'light-theme';
    }
    localStorage.setItem('color', document.documentElement.classList);
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleColor}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
