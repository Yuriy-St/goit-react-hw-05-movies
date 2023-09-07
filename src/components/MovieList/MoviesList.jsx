import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MoviesListWraper } from './MoviesList.styled';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
