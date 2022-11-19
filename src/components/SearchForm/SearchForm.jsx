import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByWord } from '../services/api';
import MoviePreview from '../MoviePreview/MoviePreview';
import {
  SearchFormContainer,
  SearchFormBox,
  SearchFormInput,
  SearchFormButton,
  MovieListBox,
  MovieListItem,
  StyledLink,
} from './SearchForm.styled';

const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');
  const location = useLocation();

  useEffect(() => {
    if (!searchWord) {
      return;
    }
    getMoviesByWord(searchWord).then(setMovies);
  }, [searchWord]);

  const onSearchMovies = e => {
    e.preventDefault();
    setSearchParams({ searchWord: e.target.search.value });
  };

  return (
    <>
      <SearchFormContainer>
        <SearchFormBox onSubmit={onSearchMovies}>
          <SearchFormInput
            type="search"
            name="search"
            placeholder="Search movies"
          />
          <SearchFormButton type="submit" title="Go">
            <span>Search</span>
          </SearchFormButton>
        </SearchFormBox>
      </SearchFormContainer>

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
    </>
  );
};

export default SearchForm;
