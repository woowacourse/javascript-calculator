import Calculator from './calculator.js';
import { TOO_MANY_NUMBERS, DUPLICATE_OPERAND} from './constants/error.js';

const digit = document.querySelectorAll('.digit');
const operation = document.querySelectorAll('.operation');
const modifier = document.querySelector('.modifier');
const total = document.querySelector('#total');

let prevNumber = [];
let operand = '';
let nextNumber = [];
const calculator = new Calculator();

digit.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        if(operand === ''){
            if(prevNumber.length >= 3){
                throw new Error(TOO_MANY_NUMBERS);
            }
            prevNumber.push(e.target.innerText);
        }else{
            if(nextNumber.length >= 3) {
                throw new Error(TOO_MANY_NUMBERS);
            }
            nextNumber.push(e.target.innerText);
        }
        calculator.displayInputResult(prevNumber, operand, nextNumber);
    })
})

operation.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        
        const inputOperand = e.target.innerText;
        if(!operand && inputOperand !== "=") {
            operand = inputOperand;
            calculator.displayInputResult(prevNumber, operand, nextNumber);
        }
        else if(operand && inputOperand !== "=") {
            throw new Error(DUPLICATE_OPERAND);
        }
        else if(operand && inputOperand === "=") {
            calculator.checkOperand(prevNumber, operand, nextNumber);
        }
    })
})

modifier.addEventListener('click', () => {
    prevNumber = [];
    nextNumber = [];
    operand = '';
    calculator.displayCalculateResult(0);
})