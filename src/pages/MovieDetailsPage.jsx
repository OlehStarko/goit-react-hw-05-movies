import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieId } from '../components/services/api';
import {
  MovieDetailsPageContainer,
  MovieDetailsPageImgAndCastContainer,
  MovieDetailsPageImg,
  MovieDetailsPageCastReviewContainer,
  StyledLink,
  MovieDetailsPageInfoContainer,
  MovieDetailsPageTitle,
  MovieDetailsPageUserStoreTitle,
  MovieDetailsPageOwerviewTitle,
  MovieDetailsPageOwerview,
  MovieDetailsPageGenresTile,
  MovieDetailsPageGenres,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';
  const location = useLocation();
  const navigation = useRef(location);

  useEffect(() => {
    fetchMovieId(movieId).then(setMovies);
  }, [movieId]);

  if (movies) {
    const { poster_path, title, release_date, popularity, overview, genres } =
      movies;
    const genresValue = genres.map(({ name }) => name).join(' ');

    return (
      <>
        <MovieDetailsPageContainer>
          <MovieDetailsPageImgAndCastContainer>
            <StyledLink to={navigation.current.state?.from || '/movies'}>
              Back
            </StyledLink>
            <MovieDetailsPageImg src={IMG_REGUEST + poster_path} alt={title} />
            <MovieDetailsPageCastReviewContainer>
              <StyledLink to={'cast'}>Cast</StyledLink>
              <StyledLink to={'reviews'}>Reviews</StyledLink>
            </MovieDetailsPageCastReviewContainer>
          </MovieDetailsPageImgAndCastContainer>
          <MovieDetailsPageInfoContainer>
            <MovieDetailsPageTitle>
              {title} ({release_date.slice(0, 4)})
            </MovieDetailsPageTitle>
            <MovieDetailsPageUserStoreTitle>
              User Score : {Math.round(Number(popularity))}%
            </MovieDetailsPageUserStoreTitle>
            <MovieDetailsPageOwerviewTitle>
              Overview
            </MovieDetailsPageOwerviewTitle>
            <MovieDetailsPageOwerview>{overview}</MovieDetailsPageOwerview>
            <MovieDetailsPageGenresTile>Genres</MovieDetailsPageGenresTile>
            <MovieDetailsPageGenres>{genresValue}</MovieDetailsPageGenres>
          </MovieDetailsPageInfoContainer>
        </MovieDetailsPageContainer>
        <Outlet />
      </>
    );
  }
  return;
};

export default MovieDetailsPage;
