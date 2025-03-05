import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_movies_list.scss';
import like from "../../assets/img/like.svg";
import dislike from "../../assets/img/dislike.svg";
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const searchMovies = "/search/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(() => {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('movie-')) {
        items.push(Number(localStorage.getItem(key)));
      }
    }
    return items;
  })


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

  const setWishList = (event) => {
    event.preventDefault();
    let id = Number(event.target.attributes.getNamedItem('data-id').value);
    let isFavourited = liked.includes(id)
    if (!isFavourited) {
      let newItem = [...liked, id]
      setLiked(newItem);
      window.localStorage.setItem('movie-' + id, id);
    } else {
      let newItem = liked.filter((savedId) => savedId !== id)
      setLiked(newItem);
      window.localStorage.removeItem('movie-' + id, id)
    }
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
        <div className={liked.includes(movie.id) ? 'icon dislike' : 'icon like'}>
          <img onClick={setWishList} data-id={movie.id} src={liked.includes(movie.id) ? like : dislike} alt="" />
        </div>
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
