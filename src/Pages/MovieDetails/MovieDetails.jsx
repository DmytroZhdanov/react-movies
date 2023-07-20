import { fetchMovieById } from 'ApiService/ApiService';
import { Section, Title } from 'Pages/Home/Home.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AdditionalInfo, AdditionalTitle, BackBtn, Image, List, MainInfo, SubTitle, Text } from './MovieDetails.styled';

const MovieDetails = () => {
  const [imagePath, setImagePath] = useState(null);
  const [title, setTitle] = useState(null);
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState(null);
  const [genres, setGenres] = useState(null);

  const location = useLocation();
  const backPath = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {

    (async () => {
      const response = await fetchMovieById(movieId);
      setImagePath(response.poster_path);
      setTitle(response.title);
      setScore((response.vote_average * 10).toFixed());
      setOverview(response.overview);
      setGenres(response.genres.map(({ name }) => name).join(', '));
    })();
  }, [movieId]);

  return (
    <Section>
      <BackBtn to={backPath}>{`<- Go back`}</BackBtn>
      <MainInfo>
        <Image src={`https://image.tmdb.org/t/p/w500${imagePath}`} alt={title} />
        <Title>{title}</Title>
        <Text>User score: {score}%</Text>
        <SubTitle>Overview</SubTitle>
        <Text>{overview}</Text>
        <SubTitle>Genres</SubTitle>
        <Text>{genres}</Text>
      </MainInfo>
      <AdditionalInfo>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </List>
      </AdditionalInfo>
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
