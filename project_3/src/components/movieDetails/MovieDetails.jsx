import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/scss/_movie_details.scss';
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const movieUrl = "/movie/";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {

    const movieId = useParams().id;
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData(id) {

        axios.get(baseURL + movieUrl + id, {
            params: {
                api_key: apiKey
            }
        })
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        fetchData(movieId)
    }, [movieId]);

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>)
    } else if (movie) {
        return (
            <div className="movie-details container">
                <h2>{movie.title}</h2>
                <div className="movie-container">
                    <img className="movie-poster" src={imgBaseURL + movie.backdrop_path} alt="moviedetails" />
                    <button className="button">Watch now</button>
                </div>

                <div className="movie-info">
                    <div className="description">
                        <h5>Description</h5>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="extra-info">
                        <div className="info-item">
                            <div className="extra-info-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h5>Realese date</h5>
                            </div>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className="info-item">
                            <div className="extra-info-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M3.75 6.5C3.75 5.25736 4.75736 4.25 6 4.25H8.25C9.49264 4.25 10.5 5.25736 10.5 6.5V8.75C10.5 9.99264 9.49264 11 8.25 11H6C4.75736 11 3.75 9.99264 3.75 8.75V6.5Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.75 16.25C3.75 15.0074 4.75736 14 6 14H8.25C9.49264 14 10.5 15.0074 10.5 16.25V18.5C10.5 19.7426 9.49264 20.75 8.25 20.75H6C4.75736 20.75 3.75 19.7426 3.75 18.5V16.25Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 6.5C13.5 5.25736 14.5074 4.25 15.75 4.25H18C19.2426 4.25 20.25 5.25736 20.25 6.5V8.75C20.25 9.99264 19.2426 11 18 11H15.75C14.5074 11 13.5 9.99264 13.5 8.75V6.5Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 16.25C13.5 15.0074 14.5074 14 15.75 14H18C19.2426 14 20.25 15.0074 20.25 16.25V18.5C20.25 19.7426 19.2426 20.75 18 20.75H15.75C14.5074 20.75 13.5 19.7426 13.5 18.5V16.25Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h5>Genres</h5>
                            </div>
                            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                        <div className="info-item">
                            <div className="extra-info-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M10.5 21.5L15.75 10.25L21 21.5M12 18.5H19.5M3 6.12136C4.96557 5.87626 6.96804 5.75 9 5.75M9 5.75C10.1208 5.75 11.2326 5.78841 12.3343 5.864M9 5.75V3.5M12.3343 5.864C11.1763 11.1578 7.68868 15.5801 3 18.0023M12.3343 5.864C13.2298 5.92545 14.1186 6.01146 15 6.12136M10.4113 14.6162C8.78554 12.9619 7.47704 10.9949 6.58432 8.81366" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h5>Spoken Languages</h5>
                            </div>
                            <p>{movie.spoken_languages.map(language => language.name).join(', ')}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default MovieDetails;