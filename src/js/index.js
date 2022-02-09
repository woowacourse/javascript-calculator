import { validateNumberLength, calculate, isStartZero } from "./utils.js";

class Calculator {
    constructor() {
        this.left = '';
        this.right = '';
        this.operator = '';
        this.onClickButtons();
    }
    
    onClickButtons() {
        document.querySelector(".calculator").addEventListener('click',(event) => {
            const eventClassName = event.target.className;
            if (eventClassName === 'modifier') {
                return this.initCalculator(document.querySelector("#total"))
            }
            if (eventClassName === 'digit') {
               return this.digitHandler(event.target.innerHTML)
            }
            if (eventClassName === 'operation') {
                return this.operationHandler(event.target.innerHTML);
            }
        })
    }
    
    digitHandler(number) {
        const total = document.querySelector("#total");
        if (!this.operator) {
            console.log(this.operator, this.left)
            if(!validateNumberLength(this.left))  return alert('3자리 숫자까지만 입력 가능합니다.');
            this.left += number;
            total.innerHTML = this.left;
            if(isStartZero(this.left, number)) return alert('0으로 시작되는 숫자는 불가능') 
            return;
        }
        if(!validateNumberLength(this.right))  return alert('3자리 숫자까지만 입력 가능합니다.');
        if (isStartZero(this.left, number)) return alert('0으로 시작되는 숫자는 불가능');
        this.right += number;
        total.innerHTML+= number;
    }

    operationHandler(operator) {
        const total = document.querySelector("#total");
        if (!this.left) return alert('숫자를 먼저 입력해주세요1.'); // +8 // =
        if(!this.operator){
            this.operator = operator;
            total.innerHTML+=this.operator;
            return;
        }
        if(operator !== '=') return alert('올바르지 않은 식입니다.2') // 8++
        if(!this.right) return alert('올바르지 않은 식입니다3.') // 8+=  // 8=
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
