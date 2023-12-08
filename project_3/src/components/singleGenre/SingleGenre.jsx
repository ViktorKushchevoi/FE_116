import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../../assets/scss/_single_genre.scss';

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function SingleGenre() {
    const { genreId } = useParams();
    const [genreTitle, setGenreTitle] = useState("");
    const [genreMovies, setGenreMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenreTitle = async () => {
            try {
                const response = await axios.get(`${baseURL}/genre/${genreId}`, {
                    params: {
                        api_key: apiKey,
                    }
                });
                setGenreTitle(response.data.name);
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchMovies = async () => {
            try {
                const response = await axios.get(baseURL + allMovies, {
                    params: {
                        api_key: apiKey,
                        with_genres: genreId,
                        page: 1
                    }
                });
                setGenreMovies(response.data.results);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchGenreTitle();
        fetchMovies();
    }, [genreId]);

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <div>
            <section className="single-genre container">
                <h2>{genreTitle} Movies</h2>
                <div className="genre-movies">
                    {genreMovies.map((movie, index) => (
                           <div key={index} className="movie">
                                <Link to={"/movies/" + movie.id} className="link">
                                    <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
                                    <h2>{movie.title}</h2>
                                </Link>
                            </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default SingleGenre;
