import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies, trends }) => {
  const location = useLocation();
  const array = movies || trends;

  return (
    <List>
      {array.map(({ id, title, original_title }) => {
        return (
          <li key={id}>
            <Link
              to={(movies && `${id}`) || `movies/${id}`}
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

export default MoviesList;
