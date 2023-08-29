import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { Container } from 'styles/Base.styled';
import { MoviesListWraper } from './MoviesList.styled';
import Loader from 'components/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

export default function MoviesList() {
  const { movies, isLoading, fetchError } = useFetchTrendingMovies();
  const location = useLocation();
  return (
    <Container>
      {isLoading && <Loader />}
      {movies?.length > 0 && (
        <MoviesListWraper>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </MoviesListWraper>
      )}
    </Container>
  );
}
