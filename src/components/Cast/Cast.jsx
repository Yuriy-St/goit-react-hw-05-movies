import Loader from 'components/Loader/Loader';
import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';
import {
  CastItem,
  CastList,
  Character,
  Name,
  Photo,
  PhotoWrapper,
  Thumb,
} from './Cast.styled';
import placeholder from 'images/avatar-placeholder.png';

export default function Cast() {
  const { credits, isLoading, fetchError } = useFetchMovieCredits();
  const BASE_URL = 'http://image.tmdb.org/t/p/w185';
  const cast = credits?.cast;

  return (
    <>
      {isLoading && <Loader />}
      {cast?.length > 0 && (
        <CastList>
          {cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <PhotoWrapper>
                <Photo
                  src={
                    profile_path
                      ? `${BASE_URL}${profile_path}`
                      : `${placeholder}`
                  }
                  alt={name}
                />
              </PhotoWrapper>

              <Thumb>
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
              </Thumb>
            </CastItem>
          ))}
        </CastList>
      )}
      {fetchError && <p>{fetchError}</p>}
    </>
  );
}
