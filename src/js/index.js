// - [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

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
          this.renderTotal(this.firstDigit);
        }

        // 두번째 수 입력
        if (this.firstDigit && this.operation) {
          this.secondDigit += e.target.textContent;
          this.renderTotal(this.firstDigit + this.operation + this.secondDigit);
        }

        // total.innerHTML = firstDigit + operation + secondDigit;
      });
    });

    this.operations.forEach(digitButton => {
      digitButton.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.textContent === "=") {
          this.calculateMath();
          this.renderTotal(this.result);
          this.reset();
          return;
        }
        this.operation = e.target.textContent;
        this.total.innerHTML += this.operation;
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
        this.result =
          parseInt(this.firstDigit, 10) + parseInt(this.secondDigit, 10);
        break;
      case "-":
        this.result =
          parseInt(this.firstDigit, 10) - parseInt(this.secondDigit, 10);
        break;
      case "X":
        this.result =
          parseInt(this.firstDigit, 10) * parseInt(this.secondDigit, 10);
        break;
      case "/":
        this.result =
          parseInt(this.firstDigit, 10) / parseInt(this.secondDigit, 10);
        break;
      default:
        break;
    }
  }

  validateDigit(number) {
    const num = parseInt(number, 10);
    if (num >= 1000) {
      alert("2자리 수 이하 수만 입력해주세요.");
      return false;
    }
    return true;
  }
}

const calculator = new Calculator();
