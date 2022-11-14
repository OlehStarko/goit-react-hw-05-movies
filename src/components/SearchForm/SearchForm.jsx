import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import {
  SearchFormContainer,
  SearchFormBox,
  SearchFormInput,
  SearchFormButton,
  MovieListBox,
  MovieListItem,
} from './SearchForm.styled';

const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovie = async e => {
    e.preventDefault();
    console.log('Searching');
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=11f481dae4b6d417950e7befa09bb258&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = e => {
    setQuery(e.target.value);
  };
  const location = useLocation();
  return (
    <>
      <SearchFormContainer>
        <SearchFormBox onSubmit={searchMovie}>
          <SearchFormInput
            type="search"
            name="query"
            aria-label="search"
            placeholder="Search movies"
            value={query}
            onChange={changeHandler}
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
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <MoviePreview key={movie.id} {...movie}></MoviePreview>
              </Link>
            </MovieListItem>
          ))}
      </MovieListBox>
    </>
  );
};

export default SearchForm;
