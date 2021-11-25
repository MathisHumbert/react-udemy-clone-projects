import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = ['all', ...new Set(items.map((item) => item.category))];

  const filterMenuItems = (category) => {
    if (category === 'all') return setMenuItems(items);
    return setMenuItems(items.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories
            categories={categories}
            filterMenuItems={filterMenuItems}
          />
        </div>
        <div className="section-center">
          <Menu menuItems={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
