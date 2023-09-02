import styled from '@emotion/styled';

export const ReviewsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-bottom: 1rem;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Author = styled.p`
  & .tag {
    font-weight: 700;
  }
`;

export const Content = styled.div`
  & p {
    margin-bottom: 0.25rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
