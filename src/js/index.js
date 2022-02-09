// import { handleClick, handleClickDigits, handleClickOperations, handleClickModifier } from "./clickEvent.js";
import { $ } from "./dom.js"

class Calculator{
    constructor(){
        this.$state = {
            currentOperation: undefined,
            numbers: ['0','0']
        }
        this.$app = document.querySelector('#app');
        this.$total = document.querySelector('#total');
        this.$digits = document.querySelectorAll('.digit');
        this.$operations = document.querySelectorAll('.operation');
        this.$modifier = document.querySelector('.modifier');
    }

    mounted(){
        console.log(this.$digits)
        this.$digits.forEach(e => e.addEventListener('click', this.handleClickDigits.bind(this)))
        this.$operations.forEach(e => e.addEventListener('click', this.handleClickOperations.bind(this)))
        this.$modifier.addEventListener('click', this.handleClickModifier.bind(this));
    }

    handleClickDigits(e) {
        let index = 0
        if(this.$state.currentOperation){
            console.log('index:', index)
            index = 1

            const currentNumber = this.$state.numbers[index]
            if(currentNumber.length >= 3){
                console.log('------error')
                return
            }

            if(currentNumber === '0'){
                this.$state.numbers[index] = e.target.innerHTML 
                // $("#total").innerHTML = e.target.innerHTML
                $("#total").innerHTML += this.$state.numbers[index]
                return
            }

            console.log(this.$state.numbers[index])
            this.$state.numbers[index] += e.target.innerHTML 
            $("#total").innerHTML += e.target.innerHTML 
            return 
        }

        //num1
        console.log('num1, this.$state.currentOperation: ', this.$state.currentOperation)

        const currentNumber = this.$state.numbers[index]
        if(currentNumber.length >= 3){
            console.log('------error')
            return
        }

        if(currentNumber === '0'){
            this.$state.numbers[0] = e.target.innerHTML 
            $("#total").innerHTML = e.target.innerHTML
            return
        }

        this.$state.numbers[index] += e.target.innerHTML 
        $("#total").innerHTML = this.$state.numbers[index]
    }
    
    handleClickOperations(e) {
        console.log("handleOper", e.target.innerHTML);

        if(e.target.innerHTML === '='){
            console.log('-----= result click')
            console.log(this.$state.numbers[0],this.$state.numbers[1],this.$state.currentOperation)
        
        // 숫자, 기호 받아서 연산하는 함수

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
        console.log('clear')
        $("#total").innerHTML = '0';
        this.$state.currentOperation = undefined;
        this.$state.numbers =['0','0'];
    }

    setResult(result) {
        console.log('setResult', result)
        $("#total").innerHTML = result;
        this.$state.currentOperation = undefined;
        this.$state.numbers =[result.toString(),'0'];
    }

    toIntNumber(num){
        return Number(num)
    }

    checkOperator(num1,num2,operation) {
        console.log('---checkOperator',num1,num2,operation);
        if (operation === '+') {
            return this.add(num1,num2)
        }
        if (operation === '-') {
            return this.minus(num1,num2)
        }
        if (operation === 'X') {
            return this.multiply(num1,num2)
        }
        if (operation === '/') {
            return this.divide(num1,num2)
        }
    }

    add(num1,num2) {
        console.log('add',num1, num2)
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

    renderResult() {
        //
    }


}

const calculator = new Calculator

calculator.mounted()