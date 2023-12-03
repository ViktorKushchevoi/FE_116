import '../../assets/scss/genres.scss';
import GenresList from '../genresList/Genreslist';
function Genres() {
    return (
        <section className="genres container">
            <h1>Our Genres</h1>
            <GenresList />
        </section>
    );
}

export default Genres;