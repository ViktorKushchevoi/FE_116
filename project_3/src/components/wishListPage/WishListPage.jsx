import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import '../../assets/scss/_wish_list.scss';
import like from "../../assets/img/like.svg";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function WishListPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    function removeFromWishlist(id) {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.removeItem(`movie-${id}`);
    }

    function fetchData(id) {
        axios.get(`${baseURL}/movie/${id}`, {
            params: {
                api_key: apiKey,
            }
        })
            .then(response => {
                setMovies(movies => [...movies, response.data]);
            })
            .catch(error => {
                setError(error.message);
            });
    }

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.indexOf('movie-')) {
                fetchData(localStorage.getItem(key));
            }
        }
    }, []);

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    } else if (movies) {
        const items = movies.map((movie, index) => {
            return (
                <div key={index} className="movie">
                    <Link to={"/movies/" + movie.id} className="link">
                        <img src={imgBaseURL + movie.backdrop_path} alt={movie.title} />
                    </Link>
                    <div className="movie-info">
                        <h2>{movie.title}</h2>
                        <div className="description">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <div className="dislike-icon" onClick={() => removeFromWishlist(movie.id)}>
                        <img src={like} alt="Dislike" />
                    </div>
                </div>
            );
        });
        return (
            <>
                <h1>Your Wish List</h1>
                <div className="wishlist container">{items}</div>
            </>
        );
    }
}
export default WishListPage;