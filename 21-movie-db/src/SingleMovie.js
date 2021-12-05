import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

// &i=${id}
const SingleMovie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&i=${id}`);
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2>single movie</h2>;
};

export default SingleMovie;
