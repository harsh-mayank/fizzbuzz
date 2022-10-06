import React from 'react';

const fizzBuzz = (props) => {
    const check = num => {
        let string = '';
        if(num===0){
            return;
        }
        if(num%3===0){
            string+="Fizz";
        }
        if(num%5===0){
            string+="Buzz";
        }
        return string ? string : num;
    }
    return (
        <>
            <span data-testid = "num-1">{check(props.nums)}</span>
            <br/>
        </>
    );
}

export default fizzBuzz;