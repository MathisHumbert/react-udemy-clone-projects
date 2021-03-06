import React, { useState } from 'react';
import data from './data';
function App() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      return setText(data.slice(0, 1));
    }
    if (amount > 8) {
      return setText(data.slice(0, 8));
    }
    return setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={formHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
