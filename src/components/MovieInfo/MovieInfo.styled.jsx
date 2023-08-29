import styled from '@emotion/styled';

export const MovieCard = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #a1a1a1;
  margin-bottom: 1rem;
`;

export const Poster = styled.div`
  flex-basis: 300px;

  & img {
    width: auto;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MovieTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

export const Score = styled.p``;

export const Overview = styled.div`
  & .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

export const GenresSection = styled.div`
  & p {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;
export const Genres = styled.ul`
  display: flex;
  gap: 1rem;
`;
