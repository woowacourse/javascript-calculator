const calculate = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    X: (a, b) => a * b,
    "/": (a, b) => a / b,
};

class Calculator {
    constructor() {
        this.totalValueForm = document.getElementById("total");
        this.digits = document.querySelector(".digits");
        this.resetTotalValue = document.querySelector(".modifiers");
        this.operations = document.querySelector(".operations");
        this.totalValue = 0;
        this.store = [];
    }

    on() {
        // console.log(this.totalValueForm.textContent); // innerHTML, textContent 차이 정리**
        this.bindEvent();
    }

    bindEvent() {
        // 피연산자
        this.digits.addEventListener("click", e => {
            // console.log(e.target.textContent); // type string
            if (this.totalValue.length === 3) {
                return alert(`최대 3자리수까지만 입력하실 수 있습니다.`);
            }
            if (this.totalValue === 0) {
                this.totalValue = e.target.textContent;
            } else {
                this.totalValue += e.target.textContent;
            }
            this.renderTotalValue();
        });

        // AC(all clear)
        this.resetTotalValue.addEventListener("click", () => {
            this.totalValue = 0;
            this.renderTotalValue();
        });

        // 연산자
        this.operations.addEventListener("click", e => {
            if (!this.totalValue) {
                return alert(`계산할 숫자를 먼저 눌러주세요`);
            }

            if (e.target.textContent === "=") {
                const [prevNumber, operator] = this.store;
                this.totalValue = Math.floor(
                    calculate[operator](Number(prevNumber), Number(this.totalValue))
                );
                this.renderTotalValue();
                this.store = [];
            } else {
                this.store.push(this.totalValue, e.target.textContent);
                this.totalValue = 0;
            }
        });
    }

    renderTotalValue() {
        this.totalValueForm.innerText = this.totalValue;
    }
}

const calculator = new Calculator();
calculator.on();
