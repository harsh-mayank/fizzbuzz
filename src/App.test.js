import { render, screen } from '@testing-library/react';
import App from './App';
import FizzBuzz from './components/FizzBuzz';

test("renders fizz on occurence of 1", () => {
  render(<FizzBuzz nums = {1} />)
  const fizzbuzz = screen.getByTestId("num-1");
  expect(fizzbuzz).toBeInTheDocument();
});

test("renders fizz on occurence of 3", () => {
  render(<FizzBuzz nums = {3} />)
  const fizzbuzz = screen.getByText("Fizz");
  expect(fizzbuzz).toBeInTheDocument();
});

test("renders fizz on occurence of multiple of 3", () => {
  render(<FizzBuzz nums = {6} />)
  const fizzbuzz = screen.getByText("Fizz");
  expect(fizzbuzz).toBeInTheDocument();
});

test("renders buzz on occurence of 5", () => {
  render(<FizzBuzz nums = {5} />)
  const fizzbuzz = screen.getByText("Buzz");
  expect(fizzbuzz).toBeInTheDocument();
});

test("renders fizz on occurence of multiple of 5", () => {
  render(<FizzBuzz nums = {10} />)
  const fizzbuzz = screen.getByText("Buzz");
  expect(fizzbuzz).toBeInTheDocument();
});

test("renders FizzBuzz on occurence of multiple of 3 and 5", () => {
  render(<FizzBuzz nums = {15} />)
  const fizzbuzz = screen.getByText("FizzBuzz");
  expect(fizzbuzz).toBeInTheDocument();
});


