import { $ } from "./dom.js"
import { MAX_NUM_LENGTH, ZERO_CHAR, PLUS, MINUS, MULTIPLY, DIVIDE } from './constants.js'

class Calculator{
    constructor(){
        this.$state = {
            currentOperation: undefined,
            numbers: [ZERO_CHAR, ZERO_CHAR]
        }
        this.$app = document.querySelector('#app');
        this.$total = document.querySelector('#total');
        this.$digits = document.querySelectorAll('.digit');
        this.$operations = document.querySelectorAll('.operation');
        this.$modifier = document.querySelector('.modifier');
        this.mounted()
    }

    mounted(){
        this.$digits.forEach(e => e.addEventListener('click', this.handleClickDigits.bind(this)))
        this.$operations.forEach(e => e.addEventListener('click', this.handleClickOperations.bind(this)))
        this.$modifier.addEventListener('click', this.handleClickModifier.bind(this));
    }

    handleClickDigits(e) {
        let index = 0
        if(this.$state.currentOperation){
            index = 1
        }
        const currentNumber = this.$state.numbers[index]
        if(currentNumber.length >= MAX_NUM_LENGTH){
            window.alert('숫자는 한번에 최대 3자리 수까지 입력 가능합니다.')
            return
        }
        if(currentNumber === ZERO_CHAR){
            this.$state.numbers[index] = e.target.innerHTML 
            $("#total").innerHTML = e.target.innerHTML
            return
        }
        this.$state.numbers[index] += e.target.innerHTML 
        $("#total").innerHTML = this.$state.numbers[index]
    }
    
    handleClickOperations(e) {
        if(e.target.innerHTML === '='){            
            this.checkOperator(
                this.toIntNumber(this.$state.numbers[0]),
                this.toIntNumber(this.$state.numbers[1]),
                this.$state.currentOperation
            )
            return 
        }
        this.$state.currentOperation = e.target.innerHTML
        $("#total").innerHTML += this.$state.currentOperation

    }

    handleClickModifier(e) {
        this.clearResult()
    }

    clearResult() {
        $("#total").innerHTML = ZERO_CHAR;
        this.$state.currentOperation = undefined;
        this.$state.numbers =[ZERO_CHAR, ZERO_CHAR];
    }

    setResult(result) {
        $("#total").innerHTML = result;
        this.$state.currentOperation = undefined;
        this.$state.numbers =[result.toString(),ZERO_CHAR];
    }

    toIntNumber(num){
        return Number(num)
    }

    checkOperator(num1,num2,operation) {
        if (operation === PLUS) {
            return this.add(num1,num2)
        }
        if (operation === MINUS) {
            return this.minus(num1,num2)
        }
        if (operation === MULTIPLY) {
            return this.multiply(num1,num2)
        }
        if (operation === DIVIDE) {
            return this.divide(num1,num2)
        }
    }

    add(num1,num2) {
        const result = num1 + num2
        this.setResult(result)
        return this.$total.innerHTML = result;
    }
    minus(num1,num2) {
        const result = num1 - num2;
        this.setResult(result)
        return this.$total.innerHTML = result;
    }
    multiply(num1,num2) {
        const result = num1 * num2;
        this.setResult(result)
        return this.$total.innerHTML = result;
    }
    divide(num1,num2) {
        const result = Math.floor(num1 / num2);
        this.setResult(result)
        return this.$total.innerHTML = result;
    }
}

const calculator = new Calculator

