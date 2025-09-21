import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home"
import {Routes , Route} from 'react-router-dom'
import Navbar from "./component/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
//component
//update the app component to route through different pages
function App(){

  return(
    <MovieProvider>
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Favourites" element={<Favorites />}></Route>
      </Routes>
    </main>
    </MovieProvider>
    
  )
}

export default App;