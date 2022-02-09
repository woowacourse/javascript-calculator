class Calculator {
    constructor() {
        this.currentNumber = '';
    }


    init = () => {
        this.bindEvent();
    }

    bindEvent = () => {
        document.querySelector(".digits").addEventListener("click", this.clickDigitHandler);
    }
    
    clickDigitHandler = (e) => {
        const selectedNumber = e.target.innerText;
        this.currentNumber += selectedNumber;
        this.renderResult();
    }

    renderResult = (e) => {
        const totalResult = document.getElementById("total");
        totalResult.innerText = this.currentNumber;
    }
}

const calculator = new Calculator();
calculator.init();