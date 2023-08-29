import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const DEF_OPTIONS = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzIyMmVkMDdhYmIxYzBhZTdkZTZmNjcwNzc1MWYxMCIsInN1YiI6IjY0ZWM5NjI2NDU4MTk5MDBjNmY5N2ZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJKeXT5Tv6NruFgOPeeGmw_mnuiGKgPxsTR813jGw0o',
  },
};

export const fetchTrendingMovies = () => {
  const url = `${BASE_URL}/trending/movie/day`;
  return tmdbProcessQuery(url);
};

export const fetchMovieById = id => {
  const url = `${BASE_URL}/movie/${id}`;
  return tmdbProcessQuery(url);
};

export const fetchMovieCredits = id => {
  const url = `${BASE_URL}/movie/${id}/credits`;
  return tmdbProcessQuery(url);
};

const tmdbProcessQuery = async url => {
  const controller = new AbortController();

  const options = {
    ...DEF_OPTIONS,
    url,
    signal: controller.signal,
  };

  try {
    const response = await axios(options);
    if (response.status !== 200) throw response.data;
    return { data: response.data, controller };
  } catch (err) {
    const { response } = err;

    if (response?.data) {
      console.error(response.data);
    } else {
      console.error(response || err);
    }

    throw new Error('Something went wrong. Try reload the page.');
  }
};
