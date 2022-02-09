import Calculator from './calculator.js';
import checkOperation from './modules/check-operation.js';
import { TOO_MANY_NUMBERS } from './constants/error.js';

const digit = document.querySelectorAll('.digit');
const operation = document.querySelectorAll('.operation');
const modifier = document.querySelector('.modifier');
const total = document.querySelector('#total');

let totalInput = [];
const calculator = new Calculator();

digit.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        totalInput.push(e.target.innerText);
        calculator.displayInputResult(totalInput);
    })
})

operation.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        totalInput.push(e.target.innerText);
        if(checkOperation(totalInput)){
            calculator.displayInputResult(totalInput);
        }else{
            throw new Error(TOO_MANY_NUMBERS);
        }
    })
})