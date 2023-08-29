import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;

  &:hover,
  &:focus {
    font-weight: 600;
  }

  &.active {
    color: orange;
    font-weight: 600;
    text-decoration: underline;
  }
`;
