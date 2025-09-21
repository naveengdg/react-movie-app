import React from 'react'
import "../css/Favorites.css";
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../component/MovieCard'

function Favorites() {
  // Use the correct lowercase variable name
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='favorites-empty'>
      <h2>No favorite movies yet</h2>
      <p>Start updating your favorite movies so that it will display in the page.</p>
    </div>
  )
}

export default Favorites;
