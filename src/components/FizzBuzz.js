import React from 'react';

const fizzBuzz = (props) => {
    const isDivisibleBy3 = (number) => {
        return number%3===0
    }

    const isDivisibleBy5 = (number) => {
        return number%5===0
    }

    const check = number => {
        let displayedText = '';
        if(isDivisibleBy3(number)){
            displayedText+="Fizz";
        }
        if(isDivisibleBy5(number)){
            displayedText+="Buzz";
        }
        return displayedText ? displayedText : number;
    }

    const renderFizzBuzz = () => {
        let numberArray = [];
        for(let counter=1;counter<=props.nums; counter++){
            numberArray.push(
            <div key = {counter}>
                <span data-testid = {counter}>{check(counter)}</span>
                <br/>
            </div>
            )
        }
        return numberArray;
    }
    return (
        <>
            {renderFizzBuzz()}
        </>
    );
}

export default fizzBuzz;