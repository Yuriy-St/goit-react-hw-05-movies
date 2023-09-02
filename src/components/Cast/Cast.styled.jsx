import styled from '@emotion/styled';

export const CastList = styled.ul`
  padding-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 3rem;
`;

export const CastItem = styled.li`
  width: 185px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  row-gap: 0.25rem;
`;

export const PhotoWrapper = styled.div`
  width: 185px;
  min-height: 280px;
`;

export const Photo = styled.img``;

export const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Character = styled.p`
  font-style: italic;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;
