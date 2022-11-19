import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '11f481dae4b6d417950e7befa09bb258';

export const fetchMovieId = async id => {
  try {
    const movie = await axios.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return movie.data;
  } catch {}
};

export const fetchMovieCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch {}
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch {}
};
export const getMoviesByWord = async word => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        query: word,
      },
    });
    return response.data.results;
  } catch {}
};
