import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import MoviesList from 'components/MovieList';
import Reviews from 'components/Reviews';
import Movies from 'components/Movies/Movies';

export default function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />}>
        <Route index element={<MoviesList />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_ID} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
