import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [colorInput, setColorInput] = useState('');
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colorsList = new Values(colorInput).all(10);
      setColors(colorsList);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setColorInput('');
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            className={error ? 'error' : null}
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((color, index) => {
          return <SingleColor key={index} {...color} hex={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
