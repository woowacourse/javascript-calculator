class CalculatorView {
  constructor(calculator) {
    this.calculator = calculator;
    this.handleOperator();
  }

  handleNumber() {
    const digitBtns = document.querySelectorAll(".digit");
    digitBtns.forEach(digitBtn => {
      digitBtn.addEventListener("click", () => {
        this.calculator.addNumber(digitBtn.innerHTML);
      });
    });
  }

  handleOperator() {
    const operationBtns = document.querySelectorAll(".operation");
    operationBtns.forEach(operationBtn => {
      operationBtn.addEventListener("click", () => {
        if (operationBtn.innerHTML === "X") {
          return this.calculator.addOperator("*");
        } else if (operationBtn.innerHTML === "=") {
          return this.calculator.operate();
        }

        return this.calculator.addOperator(operationBtn.innerHTML);
      });
    });
  }
}

export default CalculatorView;
