import React from 'react';

const fizzBuzz = (props) => {
    return (
        <div>
            {props.nums.map((num, index)=>{
                if(num%3===0){
                    return <span id={index}>fizz</span>
                }
                return <span id= {index}> {num} </span>
            })}
        </div>
    );
}

export default fizzBuzz;