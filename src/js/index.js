class Calculator {
  constructor() {
    // this.elements = {
    //   total: document.querySelector('#total'),
    //   digits: document.querySelector('.digits'),
    //   modifiers: document.querySelector('.modifiers'),
    //   operations: document.querySelector('.operations'),
    // };
    this.operands = [];
    this.operator = "";
    this.isTimeToInputNumber = false;
    this.setEventListener();
  }

  setEventListener() {
    const $digits = document.querySelector(".digits");
    const $modifiers = document.querySelector(".modifiers");
    const $operations = document.querySelector(".operations");
    const $total = document.querySelector("#total");

    $digits.addEventListener("click", (event) => {
      if (event.target.className !== "digit") return;

      const digit = event.target.innerText;

      if ($total.innerText.length >= 3 && !this.isTimeToInputNumber) return;

      if ($total.innerText === "0" || this.isTimeToInputNumber) {
        $total.innerText = "";
        this.isTimeToInputNumber = false;
      }

      $total.innerText += digit;
    });

    $modifiers.addEventListener("click", (event) => {
      if (event.target.className !== "modifier") return;

      const modifier = event.target.innerText;

      if (modifier === "AC") {
        this.allClear();
      }
    });

    $operations.addEventListener("click", (event) => {
      if (event.target.className !== "operation") return;

      const operation = event.target.innerText;
      this.operands.push(Number($total.innerText));

      if (operation !== "=") {
        this.operator = operation;
        this.isTimeToInputNumber = true;
        return;
      }

      let result = 0;
      if (this.operator === "+") {
        result = this.operands[0] + this.operands[1];
      }
      console.log(this.operands[0] + this.operands[1]);

      $total.innerText = result;
    });
  }

  allClear() {
    const $total = document.querySelector("#total");
    $total.innerText = "0";
    this.operands = [];
    this.operator = "";
  }
}

new Calculator();
