import Calculator from "./Calculator.js";
class App {
  constructor(calculator, view) {
    this.view = view;

    this.$digitButtons = document.querySelector(".digits");
    this.$operationButtons = document.querySelector(".operations");
    this.$modifierButton = document.querySelector(".modifier");
    this.$total = document.querySelector("#total");

    this.calculator = calculator;

    this.init();

    this.$modifierButton.addEventListener("click", this.init.bind(this));
    this.$digitButtons.addEventListener("click", this.handleDigits.bind(this));
    this.$operationButtons.addEventListener("click", this.handleOperations.bind(this));
  }

  init() {
    this.calculator.init();
    this.$total.innerText = 0;
  }

  handleDigits(event) {
    const $target = event.target;
    if (!$target.classList.contains("digit")) {
      return false;
    }

    this.$total.innerText = this.calculator.setNumbers($target.innerText).state;
  }

  handleOperations(event) {
    const $target = event.target;
    if (!$target.classList.contains("operation")) {
      return false;
    }

    if ($target.innerText === "=") {
      this.$total.innerText = this.calculator.result;
      return false;
    }

    this.$total.innerText = this.calculator.setOperator($target.innerText).state;
  }
}

const calculatorModel = new Calculator();
new App(calculatorModel);
