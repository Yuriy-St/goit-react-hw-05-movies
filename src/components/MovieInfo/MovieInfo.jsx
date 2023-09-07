import {
  Genres,
  GenresSection,
  InfoCard,
  MovieCard,
  MovieTitle,
  Overview,
  Poster,
  Score,
} from './MovieInfo.styled';

export default function MovieInfo({
  movie: { title, overview, poster_path, genres, vote_average },
}) {
  const BASE_URL = 'http://image.tmdb.org/t/p/w300';

  return (
    <MovieCard>
      <Poster>
        <img
          src={`${BASE_URL}${poster_path}`}
          alt={title}
          width="300"
          height="450"
        />
      </Poster>
      <InfoCard>
        <MovieTitle>{title}</MovieTitle>
        <Score>User Score: {Math.round(vote_average * 10)}%</Score>
        <Overview>
          <p className="title">Overview</p>
          <p>{overview}</p>
        </Overview>
        <GenresSection>
          <p>Genres</p>
          <Genres>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </Genres>
        </GenresSection>
      </InfoCard>
    </MovieCard>
  );
}
