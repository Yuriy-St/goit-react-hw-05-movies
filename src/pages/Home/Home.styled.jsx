import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(200, 200, 200, 0.5);
  margin-bottom: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-shadow: 0 0px 16px #111;
    font-weight: 600;
  }

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;
