import { fetchReviews } from 'ApiService/ApiService';
import { List } from 'components/Cast/Cast.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Content, SorryText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetchReviews(movieId);
      setReviews(response);
    })();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews?.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </List>
      ) : (
        <SorryText>Sorry... We don't have any reviews for this movie</SorryText>
      )}
    </>
  );
};

export default Reviews;
