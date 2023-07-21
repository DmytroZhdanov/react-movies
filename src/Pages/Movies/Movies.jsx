import { fetchMovieByQuery } from 'ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { SorryText } from 'components/Reviews/Reviews.styled';
import { Section } from 'Pages/Home/Home.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieByQuery(query);
        if (response.results.length > 0) {
          setMovies(response.results);
        } else {
          throw new Error();
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const { query } = e.currentTarget.elements;
    const searchQuery = query.value.trim();

    if (searchQuery === '') return;

    setSearchParams({ query: searchQuery });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Section>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputValue}
          onChange={handleChange}
        />
        <button>Search</button>
      </Form>
      {movies && <MoviesList movies={movies} />}
      {hasError && (
        <SorryText>{`Sorry... We couldn't find any movie matching ${query}`}</SorryText>
      )}
    </Section>
  );
};

export default Movies;
