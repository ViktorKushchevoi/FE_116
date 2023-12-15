import MoviesList from '../moviesList/Movieslist';
import MainSlider from '../mainSlider/MainSlider';

function Movies() {
    return (
        <>
            <section className="slider container">
                <h1>Trending now</h1>
                <MainSlider />
            </section>
            <section className='list container'>
                <MoviesList />
            </section>
        </>

    );
}

export default Movies;