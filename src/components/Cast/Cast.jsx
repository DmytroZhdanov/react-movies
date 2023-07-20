import { fetchCast } from 'ApiService/ApiService';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, Image, List, Name } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <List>
      {cast?.map(({ id, name, character, profile_path }) => {
        return (
          <Actor key={id}>
            <Image
              src={
                profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt={name}
            />
            <Name>{name}</Name>
            <p>Character: {character}</p>
          </Actor>
        );
      })}
    </List>
  );
};

export default Cast;
