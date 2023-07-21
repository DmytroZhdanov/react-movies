import { fetchMovieById } from 'ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { SorryText } from 'components/Reviews/Reviews.styled';
import { Section } from 'Pages/Home/Home.styled';
import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalTitle,
  BackBtn,
  List,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Section>
      {isLoading && <Loader />}
      {movie && (
        <>
          <BackBtn to={backPath.current}>{`<- Go back`}</BackBtn>
          <AdditionalInfo>
            <MovieInfo movie={movie} />
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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
      {hasError && (
        <SorryText>{`Sorry... Something went wrong :(`}</SorryText>
      )}
    </Section>
  );
};

export default MovieDetails;
