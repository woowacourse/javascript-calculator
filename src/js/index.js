class Calculator {
    constructor() {
        this.isStarted = false
        this.currentNumber = '';
        this.inputNumbers = [];
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
            this.isStarted =true
            this.$totalResult.innerText = ''
        }   
        this.$totalResult.innerText += digit
    }

    renderOperator = (operator) => {
        this.$totalResult.innerText += operator
    }

    isOverThreeDigit = () => {
        return this.currentNumber.length >= 3;
    }

    clickOperatorHandler = (e) => {
        const selectedOperator = e.target.innerText;
        // 숫자가 하나일때 = 입력 예외
        // 연산자 클릭 시, currentNumber ''로 초기화
        this.inputNumbers.push(Number(this.currentNumber));
        this.currentNumber = "";
        this.renderOperator(selectedOperator);
    }
}

const calculator = new Calculator();
calculator.init();