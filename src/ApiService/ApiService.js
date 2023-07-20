import axios from 'axios';

const API_KEY = '519ac6d7fa65fad3709213360518958a';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY_ENDPOINT = '/trending/movie/day';
const SEARCH_QUERY_ENDPOINT = '/search/movie';
const BY_ID_ENDPOINT = '/movie';

async function fetchDayTrends() {
  try {
    const response = await axios.get(
      `${BASE_URL}${TRENDING_DAY_ENDPOINT}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchMovieByQuery(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}${SEARCH_QUERY_ENDPOINT}?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchMovieById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}${BY_ID_ENDPOINT}/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}${BY_ID_ENDPOINT}/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}${BY_ID_ENDPOINT}/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error.message);
  }
}

export {
  fetchDayTrends,
  fetchMovieByQuery,
  fetchMovieById,
  fetchReviews,
  fetchCast,
};
