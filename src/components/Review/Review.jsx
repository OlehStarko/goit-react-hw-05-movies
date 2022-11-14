import { fetchMovieReviews } from '../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ReviewContainer,
  ReviewAuthor,
  ReviewDescription,
} from './Review.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (movieReviews && movieReviews.length > 0) {
    return movieReviews.map(({ author, content, id }) => (
      <ReviewContainer key={id}>
        <ReviewAuthor>{author}</ReviewAuthor>
        <ReviewDescription>{content}</ReviewDescription>
      </ReviewContainer>
    ));
  }

  return <p>No reviews here!</p>;
};

export default Reviews;
