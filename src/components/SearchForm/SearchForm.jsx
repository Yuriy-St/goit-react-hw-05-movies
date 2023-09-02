import { useState } from 'react';
import { Button, Form, Input } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleOnChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input type="text" value={query} onChange={handleOnChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
}
