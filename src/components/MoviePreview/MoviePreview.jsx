import React from 'react';

import { MovieListImg, MovieListTitle, MovieVote } from './MoviePreview.styled';

import placeholder from '../../images/oops.jpg';

const MoviePreview = ({
  title,
  poster_path,
  vote_average,
  release_date,
  id,
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : placeholder;

  return (
    <>
      <MovieListImg src={posterUrl} alt={title}></MovieListImg>
      <MovieListTitle>{title}</MovieListTitle>
      <MovieVote>{vote_average}</MovieVote>
    </>
  );
};

export default MoviePreview;
