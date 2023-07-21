import Loader from '../Loader/Loader';
import { fetchReviews } from 'ApiService/ApiService';
import { List } from 'components/Cast/Cast.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Content, SorryText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      setHasError(false);
      setReviews(null);
      
      try {
        const response = await fetchReviews(movieId);

        if (response.length > 0) {
          setReviews(response);
        } else {
          throw new Error();
        }
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews && (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </List>
      )}
      {hasError && (
        <SorryText>Sorry... We don't have any reviews for this movie</SorryText>
      )}
    </>
  );
};

export default Reviews;
