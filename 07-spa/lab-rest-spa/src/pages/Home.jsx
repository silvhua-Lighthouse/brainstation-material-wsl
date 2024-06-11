// import './Home.scss';
import { useState } from 'react';
import apiInstance from "../tmdb-api";
import { useEffect } from 'react';

const Home = () => {
  const [moviesArray, setMoviesArray] = useState(null)
  const fetchMovies = async () => {
    const response = await apiInstance.getMovies();
    console.log('API getMovies response\n', response)
    setMoviesArray(response);
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  if (!moviesArray) {
    return <section>Loading</section>
  };

  return (
    <section>
        {moviesArray.map( movie => <p>{movie.original_title}</p>)}
    </section>
  )
}

export default Home


// Brenda Razier favour