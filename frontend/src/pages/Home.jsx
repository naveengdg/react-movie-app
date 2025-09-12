import MovieCard from '../component/MovieCard'
import{useState} from "react";

function Home(){
  // using useState to maintain the query state
    const [query , setQuery] = useState("");

  const movies = [
      {id:1,title:"Gandhi kannadi",release_date:"2020"},
      {id:2,title:"Kiss",release_date:"2022"},
      {id:3,title:"Romeo",release_date:"2023"},
    ]


    const handleSearch = (event) =>{
      event.preventDefault();
      alert(query);
    }; 




  return (
    <div className='home'>
      { /* add an search box to search an movie */ }
      <form onSubmit={handleSearch} className='form-submit'>
        <input type="text"
        placeholder='Enter the movie....'
        className='search-input'
        value={query} 
        onChange = {(event) =>  setQuery(event.target.value)}
        />
        <button type='submit' className='search-button'>Search</button>
      </form>

      <div className='movies-grid'>
        {
          movies.map((movie) =>
             movie.title.toLowerCase().startsWith(query) &&  
           ( <MovieCard movie = {movie} key={movie.id}/>))
        }
      </div>

    </div>
  );
}

export default Home;