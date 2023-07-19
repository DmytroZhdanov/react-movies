import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MovieDetails from '../Pages/MovieDetails/MovieDetails';
import Movies from '../Pages/Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedOutlet from './SharedOutlet/SharedOutlet';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedOutlet />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};