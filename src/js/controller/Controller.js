import Calculator from "../Calculator.js";

export default class Controller {
  constructor() {
    this.calculator = new Calculator();
    this.$app = document.querySelector("#app");
    this.$digits = [...document.querySelectorAll(".digit")];
    this.userInputString = "";
  }

  calculate() {
    // 연산자로 파싱
    if (this.userInputString.includes("+")) {
      const [number1, number2] = this.userInputString.split("+");
      const $total = document.querySelector("#total");
      $total.innerText = this.calculator.add(Number(number1), Number(number2));
      this.userInputString = "";
    }
  }

  clickEvent() {
    this.$app.addEventListener("click", (event) => {
      if (event.target.classList.contains("digit")) {
        this.userInputString += event.target.innerText;
      }

      if (event.target.classList.contains("operation")) {
        if (event.target.innerText === "=") {
          this.calculate();

          return;
        }

        this.userInputString += event.target.innerText;
      }

      console.log(this.userInputString);
    });
  }

  main() {
    this.clickEvent();
  }
}
