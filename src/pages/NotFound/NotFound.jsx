import { Suspense } from 'react';
import { Container } from 'styles/Base.styled';

export default function NotFound() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Oops!</h1>
        <h2>404</h2>
        <p>Page not found!</p>
      </Suspense>
    </Container>
  );
}
