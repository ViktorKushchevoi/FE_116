import MoviesList from '../moviesList/Movieslist';
import MainSlider from '../mainSlider/MainSlider';
import '../../assets/scss/movies.scss';
function Movies() {
    return (
        <>
            <section className="slider container">
                <MainSlider />
            </section>
            <section className='trending container'>
                <h1>Trending Now</h1>
                <MoviesList />
            </section>
        </>

    );
}

export default Movies;