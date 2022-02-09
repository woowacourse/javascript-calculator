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
      digitButton.addEventListener("click", e => this.handleDigit(e));
    });

    this.operations.forEach(digitButton => {
      digitButton.addEventListener("click", e => this.handleOperation(e));
    });

    this.acBtn.addEventListener("click", () => {
      this.reset();
      this.renderTotal(this.result);
    });
  }

  handleDigit(e) {
    // 첫번째 수 입력
    const targetDigit = e.target.textContent;
    if (this.validateFirstDigit(targetDigit)) {
      this.updateFirstDigit(targetDigit);
      this.renderTotal(this.firstDigit);
    }
    // 두번째 수 입력
    if (this.validateSecondDigit(targetDigit)) {
      this.updateSecondDigit(targetDigit);
      this.renderTotal(this.firstDigit + this.operation + this.secondDigit);
    }
  }

  handleOperation(e) {
    if (e.target.textContent === "=") {
      this.handleOperationEqual();
      return;
    }

    if (!this.checkMoreThanTwoNumber()) {
      return;
    }

    this.operation = e.target.textContent;
    this.renderTotal(this.firstDigit + this.operation);
  }

  handleOperationEqual() {
    if (!this.checkEnoughNumber()) return;
    this.convertToInteger();
    this.calculateMath();
    this.renderTotal(this.result);
    this.reset();
  }

  validateFirstDigit(targetDigit) {
    return !this.operation && this.validateDigit(this.firstDigit + targetDigit);
  }

  validateSecondDigit(targetDigit) {
    return (
      this.firstDigit &&
      this.operation &&
      this.validateDigit(this.secondDigit + targetDigit)
    );
  }

  updateFirstDigit(targetDigit) {
    this.firstDigit += targetDigit;
    this.firstDigit = parseInt(this.firstDigit, 10);
  }

  updateSecondDigit(targetDigit) {
    this.secondDigit += targetDigit;
    this.secondDigit = parseInt(this.secondDigit, 10);
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

  checkEnoughNumber() {
    if (!this.secondDigit) {
      alert("2번째 수를 입력한 후 =를 입력해주세요");
      return false;
    }
    return true;
  }
}

const calculator = new Calculator();
