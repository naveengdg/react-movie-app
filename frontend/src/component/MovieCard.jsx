//prop passing (argument passing)
function MovieCard({movie}){

  function favoritebtn(){
   alert("button clicked!...");
  }

  return(
   <div className="movie-card">
    <div className="movie-poster">
      <img src={movie.url} alt={movie.title}/>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={favoritebtn}>
           🤍
        </button>
      </div>
    </div>
    <div className="movie-display">
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
    </div>
  </div>
)}

export default MovieCard;