class CalculatorView {
  constructor(calculator) {
    this.calculator = calculator;
    this.handleNumber();
    this.handleOperator();
    this.handleReset();
  }

  handleNumber() {
    const digitBtns = document.querySelector(".digits");
    digitBtns.addEventListener("click", e => {
      this.calculator.addNumber(e.target.innerHTML);
    });
  }

  handleOperator() {
    const operationBtns = document.querySelector(".operations");
    operationBtns.addEventListener("click", e => {
      if (e.target.innerHTML === "=") {
        return this.calculator.operate();
      }

      return this.calculator.addOperator(e.target.innerHTML);
    });
  }

  handleReset() {
    const modifierBtn = document.querySelector(".modifier");
    modifierBtn.addEventListener("click", () => {
      this.calculator.reset();
    });
  }
}

export default CalculatorView;
