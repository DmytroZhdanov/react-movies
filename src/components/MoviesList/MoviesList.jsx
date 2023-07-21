import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, original_title }) => {
        return (
          <li key={id}>
            <Link
              to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
              state={{ from: location }}
            >
              {title || original_title}
            </Link>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
