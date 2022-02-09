class Calculator {
    constructor() {
        
    }

    displayInputResult(totalInputArray) {
        const total = document.querySelector('#total');
        total.innerText = totalInputArray.join('');
    }

    add(num1, num2) {
        return num1 + num2;
    }
}

export default Calculator;