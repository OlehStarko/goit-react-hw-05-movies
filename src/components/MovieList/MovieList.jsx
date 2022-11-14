import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MovieListContainer,
  MovieListBox,
  MovieListItem,
  StyledLink,
} from './MovieList.styled';
import MoviePreview from '../MoviePreview/MoviePreview';

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=11f481dae4b6d417950e7befa09bb258`;

const MovieList = movie => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <MovieListContainer>
      <MovieListBox>
        {movies.length > 0 &&
          movies.map(movie => (
            <MovieListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MoviePreview key={movie.id} {...movie}></MoviePreview>
              </StyledLink>
            </MovieListItem>
          ))}
      </MovieListBox>
    </MovieListContainer>
  );
};
export default MovieList;
