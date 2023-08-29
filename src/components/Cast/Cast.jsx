import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';

export default function Cast() {
  const { credits, isLoading, fetchError } = useFetchMovieCredits();
  // const BASE_URL = 'http://image.tmdb.org/t/p/w300';
  // const { cast } = credits;
  console.log('Credits: ', credits);
  // console.log('Cast: ', cast);
  console.log('isLoading: ', isLoading); // just for linter
  console.log('fetchError: ', fetchError); // just for linter

  return (
    <div>Cast</div>
    // <ul>
    //   {cast.map(({ id, name, profile_path, character }) => {
    //     <li key={id}>
    //       <img src={`${BASE_URL}/${profile_path}`} alt={name} />
    //       <p>{name}</p>
    //       <p>Character: {character}</p>
    //     </li>;
    //   })}
    // </ul>
  );
}
