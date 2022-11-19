import { fetchMovieCast } from '../services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastContainer,
  CastList,
  CastItem,
  CastImg,
  ErrorMassage,
} from './Cast.styled';
import placeholder from '../../images/oops.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(setMovieCast);
  }, [movieId]);

  if (movieCast && movieCast.length > 0) {
    return (
      <CastContainer>
        {movieCast.map(({ cast_id, profile_path, name, character }) => {
          const imageURL = profile_path
            ? `https://image.tmdb.org/t/p/w342${profile_path}`
            : placeholder;

          return (
            <CastList key={cast_id}>
              <CastItem>
                <CastImg src={imageURL} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
              </CastItem>
            </CastList>
          );
        })}
      </CastContainer>
    );
  }
  return <ErrorMassage>No customers here!</ErrorMassage>;
};

export default Cast;
