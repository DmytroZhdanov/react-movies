import defaultImage from '../../Images/image-not-found.jpg';
import Loader from '../Loader/Loader';
import { fetchCast } from 'ApiService/ApiService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, Image, List, Name } from './Cast.styled';
import { SorryText } from 'components/Reviews/Reviews.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      try {
        const response = await fetchCast(movieId);
        if (response.length > 0) {
          setCast(response);
        } else {
          throw new Error();
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast && (
        <List>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <Actor key={id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                />
                <Name>{name}</Name>
                <p>Character: {character}</p>
              </Actor>
            );
          })}
        </List>
      )}
      {hasError && <SorryText>Sorry... We couldn't find any cast</SorryText>}
    </>
  );
};

export default Cast;
