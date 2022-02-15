import { CLASS, SELECTOR,ERROR } from "./constant.js";
import { validateNumberLength, calculate, isStartZero } from "./utils.js";

class Calculator {
    constructor() {
        this.left = '';
        this.right = '';
        this.operator = '';
        this.onClickButtons();
    }
    
    onClickButtons() {
        document.querySelector(SELECTOR.CALCULATOR).addEventListener('click',(event) => {
            const eventClassName = event.target.className;
            if (eventClassName === CLASS.MODIFIER) {
                return this.initCalculator(document.querySelector(SELECTOR.TOTAL))
            }
            if (eventClassName === CLASS.DIGIT) {
               return this.digitHandler(event.target.innerHTML)
            }
            if (eventClassName === CLASS.OPERATION) {
                return this.operationHandler(event.target.innerHTML);
            }
        })
    }
    
    digitHandler(number) {
        const total = document.querySelector(SELECTOR.TOTAL);
        if (!this.operator) {
            console.log(this.operator, this.left)
            if(!validateNumberLength(this.left))  return alert(ERROR.DIGIT_LENGTH);
            this.left += number;
            total.innerHTML = this.left;
            if(isStartZero(this.left, number)) return alert(ERROR.START_ZERO) 
            return;
        }
        if(!validateNumberLength(this.right))  return alert(ERROR.DIGIT_LENGTH);
        if (isStartZero(this.left, number)) return alert(ERROR.START_ZERO);
        this.right += number;
        total.innerHTML+= number;
    }

    operationHandler(operator) {
        const total = document.querySelector(SELECTOR.TOTAL);
        if (!this.left) return alert(ERROR.WRONG_EXPRESSION); 
        if(!this.operator){
            this.operator = operator;
            total.innerHTML+=this.operator;
            return;
        }
        if(operator !== '=') return alert(ERROR.WRONG_EXPRESSION) 
        if(!this.right) return alert(ERROR.WRONG_EXPRESSION) 
        this.left = String(calculate[this.operator](+this.left,+this.right));
        total.innerHTML = this.left;
        this.right = '';
        this.operator = '';     
    }

    initCalculator(total){
        this.left = '';
        this.right = '';
        this.operator = '';
        total.innerHTML = 0;
    }
}

const cal = new Calculator()
