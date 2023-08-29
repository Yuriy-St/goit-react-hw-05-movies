import { fetchMovieCredits } from 'api/themoviedb';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieCredits = () => {
  const [credits, setCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        setIsLoading(true);
        const { data, controller } = await fetchMovieCredits(movieId);
        setCredits(data);
        return controller;
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const abortController = fetchCredits();

    return () => {
      abortController ?? abortController.abort();
    };
  }, [movieId]);

  return { credits, isLoading, fetchError };
};
