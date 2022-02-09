class Calculator {
    constructor() {
        this.left = '';
        this.right = '';
        this.operator = '';
        this.result = 0;
        this.onClickButtons();
    }
    
    onClickButtons() {
        console.log("onClick")
        document.querySelector(".calculator").addEventListener('click',(event) => {
            const eventClassName = event.target.className;
            
            if (eventClassName === 'digit') {
                const number = event.target.innerHTML;
                console.log(number)
                if (!this.operator) {
                    if (this.left.length < 3) {
                        this.left += number;
                        return;
                    }
                    return alert('3자리 숫자까지만 입력 가능합니다.');
                }
                else{
                    if (this.right.length < 3) {
                        this.right += number;
                        return;
                    }
                    return alert('3자리 숫자까지만 입력 가능합니다.');
                }
                return;
            }
            if (eventClassName === 'operation') {
                const operator = event.target.innerHTML;
                if (!this.left) return alert('숫자부터 입력해주세요.');
                if(operator === '='){
                    const operators = {
                        '+': () => this.add(+this.left, +this.right),
                        '-': () => this.sub(+this.left, +this.right),
                        '*': () => this.mul(+this.left, +this.right),
                        '/' : () => this.div(+this.left, +this.right),
                    }
                    this.result = operators[this.operator]();
                    console.log(this.result)
                    return;
                }
                else{
                    if(!this.operator){
                        this.operator = operator;
                        return;
                    }
                    return alert('연속된 연산자는 입력이 불가능합니다')
                }   
            }
        })
    }

    validateNumber(number){
        return typeof number === 'number'
    }

    isValidateInput(left, right) {
        return this.validateNumber(left) && this.validateNumber(right)
    }

    add(left, right) {
        if (this.isValidateInput(left, right)) return left + right;
    }

    sub(left, right) {
        if (this.isValidateInput(left, right)) return left - right;
    }

    mul(left, right) {
        if (this.isValidateInput(left, right)) return left * right;
    }

    div(left, right) {
        if (this.isValidateInput(left, right)) return Math.floor(left / right);
    }
}

console.log('start')
const cal = new Calculator()