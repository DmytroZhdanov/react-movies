import { fetchMovieByQuery } from 'ApiService/ApiService';
import { List, Section } from 'Pages/Home/Home.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Form } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    (async () => {
      const response = await fetchMovieByQuery(query);
      setMovies(response.results);
    })();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const { query } = e.currentTarget.elements;
    const searchQuery = query.value.trim();

    if (searchQuery === '') return;

    setSearchParams({ query: searchQuery });
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </Form>
      <List>
        {movies?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default Movies;
