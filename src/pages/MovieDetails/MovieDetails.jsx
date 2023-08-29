import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useFetchMovie } from 'hooks/useFetchMovie';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import routes from 'routes';
import { Container } from 'styles/Base.styled';
import { Info, NavList } from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const { movie, isLoading, fetchError } = useFetchMovie();
  const backLinkRef = location?.state?.from ?? '/';
  
  return (
    <Container>
      <Link to={backLinkRef}>Go back</Link>
      {isLoading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      {fetchError && <div>{fetchError}</div>}
      <Info>
        <p>Additional information</p>
        <NavList>
          <li>
            <NavLink to={routes.CAST}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={routes.REVIEWS}>Reviews</NavLink>
          </li>
        </NavList>
      </Info>

      <Outlet />
    </Container>
  );
}
