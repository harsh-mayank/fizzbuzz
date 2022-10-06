import { render, screen } from '@testing-library/react';
import App from './App';

test("renders 1", () => {
  render(<App/>)
  const fizzbuzz = screen.getByText('1');
  expect(fizzbuzz).toBeInTheDocument(1);
});
