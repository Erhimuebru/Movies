import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import React from 'react';
import './App.css';

// db41e534
let API = 'http://www.omdbapi.com/?apikey=db41e534';


let App = () =>{
  
  let [movies, setMovies] = useState([]);
  let [searchTerm, setSearchTerm] = useState('');
  
let searchMovie = async (title) =>{
 let response = await fetch(`${API}&s=${title}`);
  let data = await response.json();
  console.log(data)
  setMovies(data.Search);
}


useEffect (() => {
  

searchMovie('batman');

},[])


return(

<div className="App">

  <h1>Movie Site!.... </h1>
  <div className="search">
    <input type="text" 
    placeholder="Search for Movie" 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className='btn'onClick={() => searchMovie(searchTerm)}>Search</button>
    </div>

    {
      movies?.length > 0
      ? (
<div className="container">
    {movies.map((movie) => (
      <MovieCard movie={movie} />
    ))}
     {movies.map((movie) => (
      <MovieCard movie={movie} />
    ))}
    </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )
    }

    
  </div>



  );
}

export default App;
