import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/scss/_genres_list.scss';
import like from "../../assets/img/like.svg";
import dislike from "../../assets/img/dislike.svg";
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";

function GenresList() {
    const [genres] = useState([
        { id: "35", title: "Comedy Movies" },
        { id: "18", title: "Drama Movies" },
        { id: "14", title: "Fantasy Movies" },
        { id: "10749", title: "Romance Movies" },
        { id: "27", title: "Horror Movies" },
        { id: "37", title: "Western Movies" },
    ]);

    const [error, setError] = useState(null);
    const [genreMovies, setGenreMovies] = useState({});
    const navigate = useNavigate();
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

    const handleViewMore = (genreId) => {
        navigate(`/genres/${genreId}`);
    };

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
                <div key={genre.id}>
                    <h2>{genre.title}</h2>
                    <div className="genres-list">
                        {genreMovies[genre.id]?.slice(0, 4).map((movie, index) => (
                            <div key={index} className="movie">
                                <Link to={"/movies/" + movie.id} className="link">
                                    <img src={imgBaseURL + movie.poster_path} alt={movie.title} />
                                    <h2>{movie.title}</h2>
                                </Link>
                                <div className={liked.includes(movie.id) ? 'icon dislike' : 'icon like'}>
                                    <img onClick={setWishList} data-id={movie.id} src={liked.includes(movie.id) ? like : dislike} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleViewMore(genre.id)}>View More</button>
                </div>
            ))}
        </>
    );
}

export default GenresList;
