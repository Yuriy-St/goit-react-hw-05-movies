import Loader from 'components/Loader';
import MoviesList from 'components/MovieList';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';
import { useLocation } from 'react-router-dom';
import { Container } from 'styles/Base.styled';

export default function TrendingMovies() {
  const { movies, isLoading, fetchError } = useFetchTrendingMovies();
  const location = useLocation();
  return (
    <Container>
      {isLoading && <Loader />}
      {movies?.length > 0 && <MoviesList movies={movies} from={location} />}
      {fetchError && <p>{fetchError}</p>}
    </Container>
  );
}
