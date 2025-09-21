import MovieCard from '../component/MovieCard'
import{use, useState,useEffect} from "react";
import "../css/Home.css"
import { getLatestMovies, searchMovies } from '../services/api';


function Home(){
  // using useState to maintain the query state
    const [query , setQuery] = useState("");
    const [movies , setMovies] = useState([]);
    //regular practice to create an two useState for error
    const[error ,setError] = useState(null);
    const[loading , setLoading] = useState(true);

    //let we call the API to show the latest movies of 2025
    //in the start this code will execute
    useEffect( () => {
      const loadLatestMovies = async ()=>{
      try{
       const latestMovies = await getLatestMovies()
       setMovies(latestMovies)
      }
      catch(err){
        console.log(err);
        setError("Failed to load movies...");
      }
      finally{
       setLoading(false);
      }
    }
    loadLatestMovies();
  },[])
   
  //while we click the button this function will execute
  //to show the searched movie results based on the form search
    const handleSearch = async (event) =>{
      event.preventDefault();
      //we write to code to search the query
      if(!query.trim()) return
      if(loading) return

      setLoading(true)
      try{
       const searchMovie = await searchMovies(query)
       setMovies(searchMovie)
       //if any error in the error message it gets to null
       setError(null)
      }
      catch(error){
         console.log(err)
         console.log("Failed to fetch..")
      }
      finally{
        //every it executes and update the loading is false
         setLoading(false)
      }
     
    }

  return (
    <div className='home'>
      { /* add an search box to search an movie */ }
      <form onSubmit={handleSearch} className='search-form'>
        <input type="text"
        placeholder='Enter the movie....'
        className='search-input'
        value={query} 
        onChange = {(event) =>  setQuery(event.target.value)}
        />
        <button type='submit' className='search-button'>Search</button>
      </form>
      
      {error && <div className='error-message'>{error}</div>}
     
        {loading ? (
          <div className='loading'>Loading....</div>
        ):
        (
          <div className='movies-grid'>
          { 
            movies.map((movie) =>
            ( <MovieCard movie = {movie} key={movie.imdbID}/>))
          }
        </div>
        )}
    </div>
  )
}

export default Home;