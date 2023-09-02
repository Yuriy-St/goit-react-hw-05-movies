import { searchMovies } from 'api/themoviedb';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchMoveis = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const { data, controller } = await searchMovies(query);
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
  }, [searchParams]);

  const onHandleSubmit = value => {
    setSearchParams({ query: value });
  };

  return { movies, isLoading, fetchError, onHandleSubmit };
};
