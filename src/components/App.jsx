import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedOutlet from './SharedOutlet/SharedOutlet';

export const App = () => {
  const Home = lazy(() => import('../Pages/Home/Home'));
  const Movies = lazy(() => import('../Pages/Movies/Movies'));
  const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
      </Routes>
    </>
  );
};
