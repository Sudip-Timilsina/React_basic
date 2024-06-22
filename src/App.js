import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_KEY = 'http://www.omdbapi.com?apikey=72ce0909'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState([]);
  const searchMovie = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie('Spiderman');
  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for Movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {searchMovie(searchTerm) }} />

      </div>
      {
        movies?.length > 0 ? (<div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>) : (
          <div className='empty'>
            <h2>No movies Found</h2>

          </div>
        )
      }

    </div>
  );
}

export default App