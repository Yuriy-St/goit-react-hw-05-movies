import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const Movies = lazy(() => import('components/Movies/Movies'));
const TrendingMovies = lazy(() => import('components/TrendingMovies'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />}>
        <Route index element={<TrendingMovies />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_ID} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
