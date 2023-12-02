import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_single_slide.scss';
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function SingleSlide() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(baseURL + allMovies, {
            params: {
                api_key: apiKey, 
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
        const item = movies.slice(0, 1).map((movie, index) => (
                <img key={index} src={imgBaseURL + movie.backdrop_path}/>
        ));
        return <div className="movie-slide">
            {item}
        </div>;
    }
}
export default SingleSlide;