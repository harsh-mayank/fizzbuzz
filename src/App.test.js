import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// describe('Fizzbuzz',()=>{
//   beforeEach(()=> { render(<App />) })

//   function getDisplayedNumber(number) {
//     screen.debug()
//     return screen.getByTestId(number).textContent;
//   }

//   test("renders fizz on occurence of 1", () => {
//     expect(getDisplayedNumber(1)).toBe('1');
//   });

//   test("renders fizz on occurence of 3", () => {
//     expect(getDisplayedNumber(3)).toBe('Fizz');
//   });

//   test("renders fizz on occurence of multiple of 3", () => {
//     expect(getDisplayedNumber(6)).toBe('Fizz');
//   });

//   test("renders buzz on occurence of 5", () => {
//     expect(getDisplayedNumber(5)).toBe('Buzz');
//   });

//   test("renders fizz on occurence of multiple of 5", () => {
//     expect(getDisplayedNumber(10)).toBe('Buzz');
//   });

//   test("renders FizzBuzz on occurence of multiple of 3 and 5", () => {
//     expect(getDisplayedNumber(15)).toBe("FizzBuzz");
//   });
// });


describe('Counter Button',()=>{
  test('renders a counter button',()=>{
    render(<App />)
    const counterButton = screen.getByRole('button',{name: /counter/i})
    expect(counterButton).toBeInTheDocument()
  });

  test('increases counter value by 1', ()=>{
    render(<App />)
    const counterValue = screen.getByTestId(1)
    const counterButton = screen.getByRole('button',{name: /counter/i})
    fireEvent.click(counterButton);
    expect(counterValue.textContent).toBe('1')
  });

  test('renders value 2',()=>{
    render(<App />)
    const counterButton = screen.getByRole('button',{name: /counter/i})
    fireEvent.click(counterButton);
    const counterValue = screen.getByTestId(2)
    expect(counterValue.textContent).toBe('2')
  });

  test('renders value Fizz for value of 3',()=>{
    render(<App />)
    const counterButton = screen.getByRole('button',{name: /counter/i})
    fireEvent.click(counterButton);
    fireEvent.click(counterButton);
    const counterValue = screen.getByTestId(3)
    expect(counterValue.textContent).toBe('Fizz')
  });
})




