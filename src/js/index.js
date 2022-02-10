class Calculator {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operation = '';
    this.phase = true;

    this.digitsElement = document.querySelector(".digits");
    this.operationElement = document.querySelector(".operations");
    this.totalElement = document.querySelector("#total");
    this.digitsClick();
    this.operationClick();
  }

  add(num1, num2) {
    if (!num1 || !num2) {
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return;
    }
    this.totalElement.textContent = num1 + num2;
  }

  digitsClick() {
    this.digitsElement.addEventListener("click", ({ target }) => {
      if (this.phase) {
        this.firstNumber =
          this.firstNumber * 10 + parseInt(target.textContent);
        this.totalElement.textContent = this.firstNumber;
      } else {
        this.secondNumber =
          this.secondNumber * 10 + parseInt(target.textContent);
        this.totalElement.textContent = this.secondNumber;
      }
    });
  }

  operationClick() {
    this.operationElement.addEventListener("click", ({ target }) => {
      if (target.textContent === "=") {
        this.showAnswer();
      } else if (target.textContent === "+" || target.textContent === "-" || target.textContent === "X" || targuments.textContent === "/") {
        this.phase = false;
        this.operation = target.textContent;
        this.totalElement.textContent = target.textContent;
      }
    });
  }

  showAnswer() {
    if(this.operation === "+") {
        this.add(this.firstNumber, this.secondNumber);
    }
  }
}

const calculator = new Calculator();
