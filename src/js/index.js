import { $, $$ } from "./dom.js";

class Calculator {
  constructor() {
    this.operatorEvent();
  }

  operatorEvent() {
    $$(".operation").forEach((operator) => {
      operator.addEventListener("click", (e) => {
        if (e.target.innerText === "+") {
          this.operator = "+";
          this.number1 = Number($("#total").innerText);
        }
      });
    });
  }
}

new Calculator();
