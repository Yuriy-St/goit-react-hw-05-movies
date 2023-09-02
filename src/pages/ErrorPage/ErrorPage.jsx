import { useLocation } from 'react-router-dom';
import { Container } from 'styles/Base.styled';

export default function ErrorPage() {
  const location = useLocation();

  return (
    <Container>
      <h1>Oops!</h1>
      <h2>404</h2>
      <p>Page not found!</p>
    </Container>
  );
}
