class Calculator {
    constructor() {
        this.currentNumber = '';
    }

    init = () => {
        this.bindEvent()
    }

    bindEvent = () => {
        document.querySelector(".digits").addEventListener("click", this.clickDigitHandler)
    }

    clickDigitHandler = (e) => {
        if (this.isOverThreeDigit()) {
            alert("3글자가 넘어갔어요..");
            return;
        }
        const selectedNumber = e.target.innerText;
        this.currentNumber += selectedNumber;
        this.renderResult();
    }

    renderResult = (e) => {
        const totalResult = document.getElementById("total");
        totalResult.innerText = this.currentNumber;
    }

    isOverThreeDigit = () => {
        return this.currentNumber.length >= 3;
    }
}

const calculator = new Calculator();
calculator.init();