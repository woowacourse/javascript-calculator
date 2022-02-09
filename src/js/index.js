import Calculator from './calculator.js';
import checkOperation from './modules/check-operation.js';
import { TOO_MANY_NUMBERS, DUPLICATE_OPERAND} from './constants/error.js';

const digit = document.querySelectorAll('.digit');
const operation = document.querySelectorAll('.operation');
const modifier = document.querySelector('.modifier');
const total = document.querySelector('#total');

let totalInput = [];
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
        //totalInput.push(e.target.innerText);
        console.log(prevNumber, operand, nextNumber);
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
        else if(operand & inputOperand === "=") {
            calculator.checkOperand(prevNumber, operand, nextNumber);
        }
        else if(!operand && inputOperand === "=") {
            // no change
        }


        /*if(e.target.innerText === '='){
            
        }
        totalInput.push(e.target.innerText);
        if(checkOperation(totalInput)){
            calculator.displayInputResult(prevNumber, operand, nextNumber);
        }else{
            totalInput = [];
            total.innerText = '';
            throw new Error(TOO_MANY_NUMBERS);
        }*/
    })
})