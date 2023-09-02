import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Info = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #a1a1a1;
  padding-bottom: 0.5rem;

  & p {
    margin-bottom: 0.5rem;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.25rem 1rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;
