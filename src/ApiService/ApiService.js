import axios from "axios";

const API_KEY = '519ac6d7fa65fad3709213360518958a';

async function fetchDayTrends() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data
}

export { fetchDayTrends };