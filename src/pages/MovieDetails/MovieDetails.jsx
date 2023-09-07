import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import routes from 'routes';
import { Container } from 'styles/Base.styled';
import { BackLink, Info, NavList } from './MovieDetails.styled';
import { Suspense } from 'react';

export default function MovieDetails() {
  const location = useLocation();
  const { movie, isLoading, fetchError } = useFetchMovie();
  const backLinkRef = location?.state?.from ?? '/';

  return (
    <Container>
      <BackLink to={backLinkRef}>⬅ Go back</BackLink>
      {isLoading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      {fetchError && <div>{fetchError}</div>}
      <Info>
        <p>Additional information</p>
        <NavList>
          <li>
            <NavLink to={routes.CAST} state={{ from: backLinkRef }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.REVIEWS} state={{ from: backLinkRef }}>
              Reviews
            </NavLink>
          </li>
        </NavList>
      </Info>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
