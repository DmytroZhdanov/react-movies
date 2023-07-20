import { fetchDayTrends } from 'ApiService/ApiService';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Section, Title } from './Home.styled';

const Home = () => {
  const [dayTrends, setDayTrends] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getDayTrends = async () => {
      try {
        const { results } = await fetchDayTrends();
        setDayTrends(results);
      } catch (error) {
        console.error(error.message);
      }
    };
    getDayTrends();
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      <List>
        {dayTrends?.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default Home;
