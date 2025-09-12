// import './App.css'
// import MovieCard from './component/MovieCard'

//   // function App(){
//   //   return (
//   //     //using the defined component already in our current program instead of rewriting the code each time
//   //     <>
//   //     <Text />
//   //     <Text />
//   //     </> 
//   //   )
//   // }

//   // //defining the component one time and reuse it for manytimes
//   // function Text(){
//   //   return(
//   //     <div>
//   //       Hello world..
//   //     </div>
//   //   )
//   // }

//   //understand about the passing the props into our components

//   //   function App(){
//   //   return (
//   //     <>
//   //     <Text display={"Hello Naveen"}/>
//   //     <Text display={"How are youuu how it actually going...."}/>
//   //     </> 
//   //   )
//   // }

//   // //defining the component one time and reuse it for manytimes
//   // //passing the props to our component
//   // function Text({display}){
//   //   return(
//   //     <div>
//   //       {display}
//   //     </div>
//   //   )
//   // }

//   //want to display an movie

//   function App(){
//     //we do some conditional rendering based on the condition the function will return the movie card
//     //we can also do something like this
//     //
//     const MovieNumber = 1;
//     return(
//       <>
//   {/* {
//       MovieNumber===2 ? 
//       (<MovieCard movie={{title:"Gandhi Kannadi",release_date : "05/09/2025"}} />) :
//       (<MovieCard movie={{ title:"Madharaasi",release_date : "05/09/2025" }} />)
//   } */}
//     {/* we just need to return the answer by checking the condition */}

//      { MovieNumber==1 && <MovieCard movie = {{title : "titanic" , release_data : "09/09/2026"}}/> }
//       </>
//     )
//   }

//   export default App;