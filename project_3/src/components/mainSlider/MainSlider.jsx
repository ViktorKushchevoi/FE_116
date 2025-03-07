import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/scss/_main_slider.scss';
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "dd365cece93903f23fd8f02821fb9210";
const allMovies = "/discover/movie";
const imgBaseURL = "https://image.tmdb.org/t/p/original";
function MainSlider() {
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
    }
    else if (movies) {
        const items = movies.slice(0, 8).map((movie, index) => (
            <SwiperSlide key={index}>
                <Link to={"/movies/" + movie.id} className="link">
                    <div className="movie-slide">
                        <img src={imgBaseURL + movie.backdrop_path} />
                        <div className="slider-info">
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>
        ));
        return (
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {items}
            </Swiper>
        )
    }
}
export default MainSlider