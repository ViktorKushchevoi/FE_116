import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_movies_list.scss';

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const searchMovies = "/search/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  function searchMovie(e) {
    e.preventDefault();
    getMovies(search);
  }

  function getMovies(search) {
    let url = baseURL + allMovies;
    let params = {
      api_key: apiKey,
      page: 1
    }
    if (search) {
      url = baseURL + searchMovies;
      params = {
        api_key: apiKey,
        query: search
      }
    }

    axios.get(url, {
      params: params
    })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        setError(error.message);
      })
  }

  useEffect(() => {
    getMovies(search);
  }, [search]); 

  if (error) {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (movies) {
    const items = movies.map((movie, index) => (
      <div key={index} className="movie">
        <Link to={"/movies/" + movie.id} className="link">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <h5>{movie.vote_average}</h5>
          </div>
        </Link>
      </div>
    ));
    return (
      <>
        <form
          onSubmit={searchMovie}
          className="search">
          <div className="form-items">
            <input
              type="text"
              placeholder="Enter movie ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
          </div>
        </form>
        <div className="movies">
          {items}
        </div>
      </>
    )
  }
}

export default MoviesList;
