import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_movies_list.scss';
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(baseURL + allMovies, {
      params: {
        api_key: apiKey
      }
    })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        setError(error.message);
      })
  }, []);
  if (error) {
    return <div className="error">
      <h2>{error}</h2>
    </div>;
  } else if (movies) {
    const items = movies.slice(0, 4).map((movie, index) => (
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
    return <div className="movies">
      {items}
    </div>;
  }
}
export default MoviesList;