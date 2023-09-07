import { Outlet } from 'react-router-dom';
import { Header, Nav, NavLinkStyled } from './Home.styled';
import { Container } from 'styles/Base.styled';
import routes from 'routes';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavLinkStyled to={routes.HOME}>Home</NavLinkStyled>
            <NavLinkStyled to={routes.MOVIES}>Movies</NavLinkStyled>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
