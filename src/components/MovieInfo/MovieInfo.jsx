import defaultImage from '../../Images/image-not-found.jpg';
import { Title } from 'Pages/Home/Home.styled';
import { Image, MainInfo, SubTitle, Text } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { title, overview, genres, original_title, poster_path, vote_average } =
    movie;
  const score = (vote_average * 10).toFixed();
  const genresString = genres
    .map(genre => {
      return genre.name;
    })
    .join(', ');

  return (
    <MainInfo>
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImage
        }
        alt={title || original_title}
      />

      <Title>{title || original_title}</Title>
      <Text>User score: {score}%</Text>
      <SubTitle>Overview</SubTitle>
      <Text>{overview}</Text>
      <SubTitle>Genres</SubTitle>
      <Text>{genresString}</Text>
    </MainInfo>
  );
};

export default MovieInfo;
