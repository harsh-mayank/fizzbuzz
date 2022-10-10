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
  let counterButton;
  beforeEach(()=> {
    render(<App/>)
    counterButton = screen.getByRole('button',{name: /counter/i})
  })
  function getDisplayedNumber(number) {
    return screen.getByTestId(number).textContent;
  }

  function numberOfTimesClicked(number) {
    for(let counter=1; counter<=number;counter++){
      fireEvent.click(counterButton);
    }
  }

  test('renders a counter button',()=>{
    expect(counterButton).toBeInTheDocument()
  });

  test('increases counter value by 1', ()=>{
    expect(getDisplayedNumber(1)).toBe('1')
  });

  test('renders value 2',()=>{
    numberOfTimesClicked(1);
    expect(getDisplayedNumber(2)).toBe('2')
  });

  test('renders value Fizz for value of 3',()=>{
    numberOfTimesClicked(2);
    expect(getDisplayedNumber(3)).toBe('Fizz');
  });

  test('renders Buzz for value 5', ()=> {
    numberOfTimesClicked(4);
    expect(getDisplayedNumber(5)).toBe('Buzz');
  })

  test('renders FizzBuzz for 15', ()=> {
    numberOfTimesClicked(14);
    expect(getDisplayedNumber(15)).toBe('FizzBuzz');
  })
})




