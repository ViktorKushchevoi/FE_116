import 'reset-css';
import './assets/scss/style.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import MoviesDetails from './components/movieDetails/MovieDetails';
import Genres from './components/genres/Genres';
import Support from './components/support/Support';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
