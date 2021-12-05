import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(photos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${mainUrl}${clientID}`);
  }, []);

  return (
    <>
      <section className="search">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-input"
          ></input>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((item) => {
            console.log(item);
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </>
  );
}

export default App;
