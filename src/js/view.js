class CalculatorView {
  constructor(calculator) {
    this.calculator = calculator;
    this.handleOperator();
  }

  addNumber(num) {
    // 숫자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  addOperator(operator) {
    console.log(operator);
    // 연산자값 받기
    // 유효성 검사
    // 통과시 string에 넣기
  }

  handleNumber() {
    const digitBtns = document.querySelectorAll(".digit");
    digitBtns.forEach(digitBtn => {
      digitBtn.addEventListener("click", () => {
        this.addNumber(digitBtn.innerHTML);
      });
    });
  }

  handleOperator() {
    const operationBtns = document.querySelectorAll(".operation");
    operationBtns.forEach(operationBtn => {
      operationBtn.addEventListener("click", () => {
        if (operationBtn.innerHTML === "X") {
          return this.addOperator("*");
        } else if (operationBtn.innerHTML === "=") {
          return this.calculator.operate();
        }

        return this.addOperator(operationBtn.innerHTML);
      });
    });
  }
}

export default CalculatorView;
