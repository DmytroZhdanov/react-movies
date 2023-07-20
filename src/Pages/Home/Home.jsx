import { fetchDayTrends } from 'ApiService/ApiService';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, Section, Title } from './Home.styled';

const Home = () => {
  const [dayTrends, setDayTrends] = useState(null);
  useEffect(() => {
    (async () => {
      const { results } = await fetchDayTrends();
      setDayTrends(results);
    })();
  });

  return (
    <Section>
      <Title>Trending today</Title>
      <List>
        {dayTrends?.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default Home;
