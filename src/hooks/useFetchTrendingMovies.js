import { fetchTrendingMovies } from 'api/themoviedb';
import { useEffect } from 'react';
import { useState } from 'react';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data, controller } = await fetchTrendingMovies();
        setMovies(data.results);
        return controller;
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const abortController = fetchMovies();

    return () => {
      abortController ?? abortController.abort();
    };
  }, []);

  return { movies, isLoading, fetchError };
};
