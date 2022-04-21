import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "http://api.themoviedb.org/3/trending/all/week?api_key=9fcf7a3dcf6947a420682da4c7f85220&language=en-US";
const IMG_API = "https://image.tmdb.org/t/p/w1280";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])

  return <div className='movie-container'>
    {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />
    )}
    </div>
}

export default App;
