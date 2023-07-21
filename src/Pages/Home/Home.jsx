import { fetchDayTrends } from 'ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { SorryText } from 'components/Reviews/Reviews.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { Section, Title } from './Home.styled';

const Home = () => {
  const [dayTrends, setDayTrends] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getDayTrends = async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchDayTrends();
        if (results.length > 0) {
          setDayTrends(results);
        } else {
          throw new Error();
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getDayTrends();
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {dayTrends && <MoviesList movies={dayTrends} />}
      {hasError && (
        <SorryText>Sorry... We couldn't find any day trends</SorryText>
      )}
    </Section>
  );
};

export default Home;
