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
        if(!this.isEqualOperator(selectedOperator) && this.currentOpertor){
            alert('2개의 수만 계산 가능합니다.')
            return;
        }
        if(this.isDuplicatedOperator()){
            alert('중복된 연산자 입력입니다.')
            return;
        }
        if(this.isEqualOperator(selectedOperator) && this.invalidEqualOperatorHandler()){
            return;
        }
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

    invalidEqualOperatorHandler = () => {
        if(!this.currentOpertor || this.inputNumbers.length < 1){
            alert('잘못된 = 연산자 입력입니다.')
            return true
        }
        return false
    }
    
    isDuplicatedOperator = () => {
        return this.$totalResult.innerText[this.$totalResult.innerText.length - 1].match("[-X/+]");
    }

}

const calculator = new Calculator();
calculator.init();