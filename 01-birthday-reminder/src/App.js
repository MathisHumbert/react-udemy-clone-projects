import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [users, setUsers] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>Birdthaday reminder</h1>
        <List users={users} />
        {users.length === 0 ? (
          ''
        ) : (
          <button onClick={() => setUsers([])}>clear all</button>
        )}
      </section>
    </main>
  );
}

export default App;
