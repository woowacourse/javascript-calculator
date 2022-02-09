class Calculator {
    constructor() {
        this.init()
    }

    init = () => {
        this.bindEvent()
    }

    bindEvent = () => {
        document.querySelector(".digits").addEventListener("click", this.clickDigitHandler)
    }
    
    clickDigitHandler = (e) => {
        const selectedNumber = e.target.innerText;
        const totalResult = document.getElementById("total");
        totalResult.innerText = selectedNumber
    }
}

const calculator = new Calculator()
calculator.init()