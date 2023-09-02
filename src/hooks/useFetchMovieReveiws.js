import { fetchMovieReviews } from 'api/themoviedb';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovieReviews = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { data, controller } = await fetchMovieReviews(movieId);
        setResponse(data);
        return controller;
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const abortController = fetchReviews();

    return () => {
      abortController ?? abortController.abort();
    };
  }, [movieId]);

  return { response, isLoading, fetchError };
};
