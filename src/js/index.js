class Calculator {
  constructor() {
    this.firstDigit = "";
    this.secondDigit = "";
    this.operation = "";
    this.result = 0;
    this.init();
  }

  init() {
    this.total = document.getElementById("total");
    this.digits = document.querySelectorAll(".digit");
    this.operations = document.querySelectorAll(".operation");
    this.acBtn = document.querySelector(".modifier");
    this.bindEvents();
  }

  convertToInteger() {
    this.firstDigit = parseInt(this.firstDigit, 10);
    this.secondDigit = parseInt(this.secondDigit, 10);
  }

  bindEvents() {
    this.digits.forEach(digitButton => {
      digitButton.addEventListener("click", e => {
        e.preventDefault();
        // 첫번째 수 입력
        if (
          !this.operation &&
          this.validateDigit(this.firstDigit + e.target.textContent)
        ) {
          this.firstDigit += e.target.textContent;
          this.firstDigit = parseInt(this.firstDigit, 10);
          this.renderTotal(this.firstDigit);
        }

        // 두번째 수 입력
        if (
          this.firstDigit &&
          this.operation &&
          this.validateDigit(this.secondDigit + e.target.textContent)
        ) {
          this.secondDigit += e.target.textContent;
          this.secondDigit = parseInt(this.secondDigit, 10);
          this.renderTotal(this.firstDigit + this.operation + this.secondDigit);
        }

        // total.innerHTML = firstDigit + operation + secondDigit;
      });
    });

    this.operations.forEach(digitButton => {
      digitButton.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.textContent === "=") {
          this.convertToInteger();
          this.calculateMath();
          this.renderTotal(this.result);
          this.reset();
          return;
        }

        if (!this.checkMoreThanTwoNumber()) {
          return;
        }
        this.operation = e.target.textContent;
        this.renderTotal(this.firstDigit + this.operation);
      });
    });

    this.acBtn.addEventListener("click", () => {
      this.reset();
      this.renderTotal(this.result);
    });
  }

  renderTotal(value) {
    this.total.innerHTML = value;
  }

  reset() {
    this.firstDigit = "";
    this.secondDigit = "";
    this.operation = "";
    this.result = 0;
  }

  //   validateInput(firstDigit, secondDigit, operation){
  //     if (firstDigit !== "" && secondDigit !== "" && operation !== "") {
  //       return true;
  //     }
  //     return false;
  //   };

  calculateMath() {
    switch (this.operation) {
      case "+":
        this.result = this.firstDigit + this.secondDigit;
        break;
      case "-":
        this.result = this.firstDigit - this.secondDigit;
        break;
      case "X":
        this.result = this.firstDigit * this.secondDigit;
        break;
      case "/":
        this.result = this.roundOffDigit(this.firstDigit / this.secondDigit);
        break;
      default:
        break;
    }
  }

  roundOffDigit(number) {
    return parseInt(number);
  }

  validateDigit(number) {
    const num = parseInt(number, 10);
    if (num >= 1000) {
      alert("2자리 수 이하 수만 입력해주세요.");
      return false;
    }
    return true;
  }

  checkMoreThanTwoNumber() {
    if (this.firstDigit && this.secondDigit && this.operation) {
      alert("2개 이하의 수만 입력해주세요.");
      return false;
    }
    return true;
  }
}

const calculator = new Calculator();
