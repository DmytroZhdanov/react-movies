import axios from 'axios';

const API_KEY = '519ac6d7fa65fad3709213360518958a';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY_ENDPOINT = '/trending/movie/day';
const SEARCH_QUERY_ENDPOINT = '/search/movie';
const BY_ID_ENDPOINT = '/movie';

async function fetchDayTrends() {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_DAY_ENDPOINT}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchMovieByQuery(query) {
  const response = await axios.get(
    `${BASE_URL}${SEARCH_QUERY_ENDPOINT}?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response.data;
}

async function fetchMovieById(id) {
  const response = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchReviews(id) {
  const response = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
}

async function fetchCast(id) {
  const response = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

export {
  fetchDayTrends,
  fetchMovieByQuery,
  fetchMovieById,
  fetchReviews,
  fetchCast,
};
