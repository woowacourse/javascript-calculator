class Calculator {
    constructor() {
        
    }

    displayInputResult(prevNumber, operand, nextNumber) {
        const total = document.querySelector('#total');
        total.innerText = prevNumber.join('') + operand + nextNumber.join('');
    }


    displayCalculateResult(result){
        document.querySelector('#total').innerText = result;
    }

    checkOperand(prevNumber, operand, nextNumber) {
        const num1 = Number(prevNumber.join(''));
        const num2 = Number(nextNumber.join(''));

        switch(operand) {
            case '+':
                this.displayCalculateResult(this.add(num1, num2));
                break;
        }
    }

    add(num1, num2) {
        return num1 + num2;
    }
}
    
export default Calculator;