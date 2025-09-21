const API_KEY = "77afba9e";
const BASE_URL = "https://www.omdbapi.com/";

//to display the latest movies 
export const getLatestMovies = async () =>{
   const response = await fetch(`${BASE_URL}/?s=movie&y=2025&type=movie&apikey=${API_KEY}`);
   const data = await response.json();
   return data.Search;
};
//to display the search movies 
export const searchMovies = async (movie) =>{
   const response = await fetch(`${BASE_URL}/?s=${encodeURIComponent(movie)}&type=movie&apikey=${API_KEY}`);
   const data = await response.json();
   return data.Search;
};