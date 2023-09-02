import { MoviesListWraper } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

export default function MoviesList({ movies }) {
  const location = useLocation();
  const { pathname } = location;
  const currentPath = pathname !== '/movies' ? `${routes.MOVIES}/` : '';
  return (
    <MoviesListWraper>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${currentPath}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </MoviesListWraper>
  );
}
