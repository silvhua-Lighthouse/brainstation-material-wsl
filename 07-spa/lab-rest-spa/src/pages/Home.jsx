// import './Home.scss';
import { useState } from 'react';
import apiInstance from "../tmdb-api";
import { useEffect } from 'react';

const Home = () => {
  const [moviesArray, setMoviesArray] = useState(0)
  const fetchMovies = async () => {
    const response = await apiInstance.getMovies();
    console.log('API getMovies response\n', response)
    setMoviesArray(response);
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <section>
      {moviesArray[0].original}
    </section>
  )
}

export default Home


// Brenda Razier favour