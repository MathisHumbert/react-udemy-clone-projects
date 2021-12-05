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
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    let url;
    if (query) {
      url = `${searchUrl}${clientID}&page=${page}&query=${query}`;
    } else {
      url = `${mainUrl}${clientID}&page=${page}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight > document.body.scrollHeight - 2 &&
      !loading
    ) {
      setPage((oldPage) => oldPage + 1);
    }
  };

  const handleSubmit = () => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((item) => {
            return <Photo key={item.id} {...item} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </>
  );
}

export default App;
