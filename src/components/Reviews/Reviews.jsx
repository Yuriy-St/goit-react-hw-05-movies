import Loader from 'components/Loader/Loader';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReveiws';
import {
  Author,
  Content,
  ReviewItem,
  ReviewsContainer,
} from './Reviews.styled';
import { Suspense } from 'react';

export default function Reviews() {
  const { response, isLoading, fetchError } = useFetchMovieReviews();
  const results = response?.results;

  const hasResults = results?.length > 0;
  const noResults = !isLoading && !hasResults;

  return (
    // <div>Cast</div>
    <>
      {isLoading && <Loader />}
      {hasResults && (
        <Suspense fallback={<div>Loading...</div>}>
          <ReviewsContainer>
            {results.map(({ id, author, content, url }) => (
              <ReviewItem key={id}>
                <Author>
                  <span className="tag">Author:</span> {author}
                </Author>
                <Content>
                  <p>{content}</p>
                  <a href={url}>read full review</a>
                </Content>
              </ReviewItem>
            ))}
          </ReviewsContainer>
        </Suspense>
      )}
      {noResults && <p>Sorry we can't find something 😕</p>}
      {fetchError && <p>{fetchError}</p>}
    </>
  );
}
