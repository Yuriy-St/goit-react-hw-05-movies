import { fetchMovieById } from 'api/themoviedb';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const { data, controller } = await fetchMovieById(movieId);
        setMovie(data);
        return controller;
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
    const abortController = fetchMovie();

    return () => {
      abortController ?? abortController.abort();
    };
  }, [movieId]);

  return { movie, isLoading, fetchError };
};
