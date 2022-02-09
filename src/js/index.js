class Calculator {
    constructor() {
        this.left = '';
        this.right = '';
        this.operator = '';
        this.result = 0;
        this.onClickButtons();
    }
    
    onClickButtons() {
        document.querySelector(".calculator").addEventListener('click',(event) => {
            const eventClassName = event.target.className;
            let result = document.querySelector("#total");
            if (eventClassName === 'modifier') {
                this.left = '';
                this.right = '';
                this.operator = '';
                this.result = '';
                result.innerHTML = 0;
                return;
            }
            if (eventClassName === 'digit') {
                const number = event.target.innerHTML;
               
            }
            if (eventClassName === 'operation') {
                const operator = event.target.innerHTML;
                if (!this.left) return alert('숫자부터 입력해주세요.');
                if(operator === '='){
                    const operators = {
                        '+': () => this.add(+this.left, +this.right),
                        '-': () => this.sub(+this.left, +this.right),
                        'X': () => this.mul(+this.left, +this.right),
                        '/' : () => this.div(+this.left, +this.right),
                    }
                    this.result = operators[this.operator]();
                    result.innerHTML = this.result;
                    this.left = this.result;
                    this.right = '';
                    this.operator = '';
                    return;
                }
                else{
                    if(!this.operator){
                        this.operator = operator;
                        result.innerHTML+=this.operator;
                        return;
                    }
                    return alert('연속된 연산자는 입력이 불가능합니다')
                }   
            }
        })
    }
    
    digitHandler(number) {
        if (!this.operator) {
            if (this.left.length < 3) {
                if(this.left.length === 0) {
                    if(number==='0') return alert('0으로 시작되는 숫자는 불가능')
                }
                this.left += number;
                result.innerHTML = this.left;
                return;
            }
            return alert('3자리 숫자까지만 입력 가능합니다.');
        }

            if (this.right.length < 3) {
                this.right += number;
                result.innerHTML+=this.right;
                return;
            }
            return alert('3자리 숫자까지만 입력 가능합니다.');
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

const cal = new Calculator()
