class Calculator {
  constructor() {
    this.newDigit = [];
    this.flag = false;
    this.operator = "";
    this.number1;
    this.number2;

    this.initDocuments();
    this.makeNewDigit();
    this.setEventListener();
  }

  makeNewDigit() {
    for (let i = 9; i > -1; i--) {
      this.newDigit.push(this.digit[i]);
    }
  }

  initDocuments() {
    this.total = document.getElementById("total");
    this.digit = document.getElementsByClassName("digit");
    this.operators = document.getElementsByClassName("operation");
    this.ac = document.getElementsByClassName("modifier");
  }

  setEventListener() {
    this.newDigit.map((item, index) => {
      item.addEventListener("click", () => {
        if (this.total.innerHTML === "0") {
          this.total.innerHTML = "";
        }
        if (this.total.innerHTML.length < 3) {
          this.total.innerHTML += index;
        }
      });
    });

    this.ac[0].addEventListener("click", () => {
      this.allClear();
    });

    this.operatorEventListener(0);
    this.operatorEventListener(1);
    this.operatorEventListener(2);
    this.operatorEventListener(3);

    this.operators[4].addEventListener("click", () => {
      if (this.flag) {
        this.flag = false;
        this.number2 = parseInt(this.total.innerHTML);

        switch (this.operator) {
          case "/":
            this.total.innerHTML = this.divide(this.number1, this.number2);
            break;
          case "X":
            this.total.innerHTML = this.multiple(this.number1, this.number2);
            break;
          case "-":
            this.total.innerHTML = this.minus(this.number1, this.number2);
            break;
          case "+":
            this.total.innerHTML = this.add(this.number1, this.number2);
            break;
        }
        this.operator = "";
      }
    });
  }
  operatorEventListener(index) {
    this.operators[index].addEventListener("click", () => {
      if (!this.flag) {
        this.flag = true;
        this.operator = this.operators[index].innerHTML;
        this.number1 = parseInt(this.total.innerHTML);
        this.total.innerHTML = 0;
      }
    });
  }

  isNumValid(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("숫자를 입력해 주세요");
    }
    if (num1 > 1000 || num2 > 1000) {
      throw new Error("세자리숫자까지 입력해주세요");
    }
    if (num1 < 0 || num2 < 0) {
      throw new Error("0보다 큰 수를 입력해주세요");
    }
    return true;
  }

  add(num1, num2) {
    if (this.isNumValid(num1, num2)) {
      return num1 + num2;
    }
  }

  minus(num1, num2) {
    if (this.isNumValid(num1, num2)) {
      return num1 - num2;
    }
  }

  multiple(num1, num2) {
    if (this.isNumValid(num1, num2)) {
      return num1 * num2;
    }
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    if (this.isNumValid(num1, num2)) {
      return parseInt(num1 / num2);
    }
  }

  allClear() {
    this.total.innerHTML = 0;
  }
}

const newCalculator = new Calculator();
