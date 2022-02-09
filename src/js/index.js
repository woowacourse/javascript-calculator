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
        this.number1 = 0;
        this.number2 = 0;
        this.operator = "";
      }
      if (this.operator === "-") {
        $("#total").innerHTML = this.number1 - this.number2;
        this.number1 = 0;
        this.number2 = 0;
        this.operator = "";
      }
      if (this.operator === "X") {
        $("#total").innerHTML = this.number1 * this.number2;
        this.number1 = 0;
        this.number2 = 0;
        this.operator = "";
      }
      if (this.operator === "/") {
        if (this.number2 === 0) {
          alert("0으로 나눌 수 없습니다.");
          this.reset();
          return;
        }
        $("#total").innerHTML = Math.floor(this.number1 / this.number2);
        this.number1 = 0;
        this.number2 = 0;
        this.operator = "";
      }
    });
  }
}

new Calculator();
