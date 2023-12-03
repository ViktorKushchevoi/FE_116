import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_genres_list.scss';

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function GenresList() {
    const [genres, setGenres] = useState([
        { id: "36", title: "History Movies" },
        { id: "27", title: "Horror Movies" },
    ]);

    const [error, setError] = useState(null);
    const [genreMovies, setGenreMovies] = useState({});

    useEffect(() => {
        const fetchMovies = async (genreId) => {
            try {
                const response = await axios.get(baseURL + allMovies, {
                    params: {
                        api_key: apiKey,
                        with_genres: genreId,
                    }
                });
                setGenreMovies((prevGenreMovies) => ({
                    ...prevGenreMovies,
                    [genreId]: response.data.results,
                }));
            } catch (error) {
                setError(error.message);
            }
        };

        genres.forEach((genre) => {
            fetchMovies(genre.id);
        });
    }, [genres]);

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <>
            {genres.map((genre) => (
                <React.Fragment key={genre.id}>
                    <h2>{genre.title}</h2>
                    <div className="genres-list">
                        {genreMovies[genre.id]?.slice(0, 5).map((movie, index) => (
                            <div key={index} className="movie">
                                <Link to={"/movies/" + movie.id} className="link">
                                    <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}

export default GenresList;
