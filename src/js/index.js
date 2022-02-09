class Calculator {
    constructor() {
        this.isStarted = false;
        this.currentNumber = '';
        this.inputNumbers = [];
        this.currentOpertor = ''
    }

    init = () => {
        this.bindDOMs();
        this.bindEvent();
    }

    bindEvent = () => {
        document.querySelector(".digits").addEventListener("click", this.clickDigitHandler);
        document.querySelector(".operations").addEventListener("click", this.clickOperatorHandler);
    }

    bindDOMs = () => {
        this.$totalResult = document.querySelector("#total");
    }

    clickDigitHandler = (e) => {
        if (this.isOverThreeDigit()) {
            alert("3글자가 넘어갔어요..");
            return;
        }
        const selectedNumber = e.target.innerText;
        this.currentNumber += selectedNumber;
        this.renderDigit(selectedNumber);
    }

    renderDigit = (digit) => {
        if(!this.isStarted){
            this.isStarted =true;
            this.$totalResult.innerText = '';
        }   
        this.$totalResult.innerText += digit;
    }

    renderOperator = (operator) => {
        this.$totalResult.innerText += operator;
    }

    renderResult = (result) => {
        this.$totalResult.innerText = result;
    }

    isOverThreeDigit = () => {
        return this.currentNumber.length >= 3;
    }

    clickOperatorHandler = (e) => {
        const selectedOperator = e.target.innerText;
        this.inputNumbers.push(Number(this.currentNumber));
        this.currentNumber = "";
        if(this.isEqualOperator(selectedOperator)){
            this.renderResult(this.calculate());
            return;
        }
        this.currentOpertor = selectedOperator;
        this.renderOperator(selectedOperator);
    }
    
    calculate = () => {
        const [first,second] = this.inputNumbers;
        switch (this.currentOpertor) {
            case '+':
                return first + second;
            case 'X':
                return first * second;
            case '-':
                return first - second;
            case '/':
                return Math.floor(first/second);
            default:
                return;
        }
    }

    isEqualOperator = (operator) => operator === "=";

}

const calculator = new Calculator();
calculator.init();