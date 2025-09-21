// Import CSS for styling this component
import "../css/MovieCard.css"

// Import the custom context hook
import { useMovieContext } from "../contexts/MovieContext"

// Component receives a "movie" object as a prop
function MovieCard({ movie }) {

  // Extract needed functions from our MovieContext
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()

  // Check if this specific movie is already marked as a favorite
  const favorite = isFavorite(movie.imdbID)

  // Handle the favorite button click
  function favoritebtn(e) {
    e.preventDefault()
    // If it's already a favorite → remove it
    if (favorite) {
      removeFromFavorites(movie.imdbID)
    }
    // Otherwise → add it
    else {
      addToFavorites(movie)
    }
  }

  // Render the card UI
  return (
    <div className="movie-card">
      
      {/* Poster Section */}
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />

        {/* Overlay with Favorite Button */}
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFavorite(movie.imdbID) ? "active" : ""}`}
            onClick={favoritebtn}
          >
            {/* Change icon based on favorite state */}
            {isFavorite(movie.imdbID) ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard
