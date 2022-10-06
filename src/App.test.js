import { render, screen } from '@testing-library/react';
import App from './App';

test("renders 1", () => {
  render(<App/>)
  const fizzbuzz = screen.getByText('1');
  expect(fizzbuzz).toBeInTheDocument(1);
});

test("renders 2", () => {
  render(<App/>)
  const fizzbuzz = screen.getByText('2');
  expect(fizzbuzz).toBeInTheDocument(2);
});

test("renders fizz on occurence of 3", () => {
  render(<App/>)
  const fizzbuzz = screen.getByText('fizz');
  expect(fizzbuzz).toBeInTheDocument('fizz');
});