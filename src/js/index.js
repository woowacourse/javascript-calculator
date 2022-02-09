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
        if (e.target.innerText === "-") {
          this.operator = "-";
          this.number1 = Number($("#total").innerText);
        }
        if (e.target.innerText === "X") {
          this.operator = "X";
          this.number1 = Number($("#total").innerText);
        }
        if (e.target.innerText === "/") {
          this.operator = "/";
          this.number1 = Number($("#total").innerText);
        }
      });
    });
  }

  resultEvent() {
    $(".operations > .operation:last-child").addEventListener("click", (e) => {
      this.number2 = Number($("#total").innerText);
      if (this.operator === "+") {
        $("#total").innerHTML = this.number1 + this.number2;
      }
      if (this.operator === "-") {
        $("#total").innerHTML = this.number1 - this.number2;
      }
      if (this.operator === "X") {
        $("#total").innerHTML = this.number1 * this.number2;
      }
      if (this.operator === "/") {
        $("#total").innerHTML = Math.floor(this.number1 / this.number2);
      }
    });
  }
}

new Calculator();
