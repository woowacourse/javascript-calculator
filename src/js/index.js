// - [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
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
    this.bindEvents();
  }

  bindEvents() {
    this.digits.forEach(digitButton => {
      digitButton.addEventListener("click", e => {
        e.preventDefault();
        // 첫번째 수 입력
        if (!this.operation) {
          this.firstDigit += e.target.textContent;
          this.total.innerHTML = this.firstDigit;
        }

        // 두번째 수 입력
        if (this.firstDigit && this.operation) {
          this.secondDigit += e.target.textContent;
          this.total.innerHTML =
            this.firstDigit + this.operation + this.secondDigit;
        }

        // total.innerHTML = firstDigit + operation + secondDigit;
      });
    });

    this.operations.forEach(digitButton => {
      digitButton.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.textContent === "=") {
          this.calculateMath();
          this.total.innerHTML = this.result;
          this.firstDigit = "";
          this.secondDigit = "";
          this.operation = "";
          return;
        }
        this.operation = e.target.textContent;
        this.total.innerHTML += this.operation;
      });
    });
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
}

const calculator = new Calculator();
