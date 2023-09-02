import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MovieList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchMoveis } from 'hooks/useSearchMovies';
import { Container } from 'styles/Base.styled';

export default function Movies() {
  const { movies, isLoading, fetchError, onHandleSubmit } = useSearchMoveis();

  const hasMovies = movies?.length > 0;
  const noResults = !isLoading && !hasMovies && !fetchError;

  return (
    <Container>
      <SearchForm onSubmit={onHandleSubmit} />
      {isLoading && <Loader />}
      {fetchError && <p>{fetchError}</p>}
      {hasMovies && <MoviesList movies={movies} />}
      {noResults && <p>Nothing found 😕</p>}
    </Container>
  );
}
