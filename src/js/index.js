import { $ } from './util.js';

class Calculator {
  constructor() {
    this.selectDOM();
    this.attachEvents();
  }

  selectDOM() {
    this.$total = $('#total');
    this.$digits = $('.digits');
    this.$operations = $('.operations');
  }

  attachEvents() {
    this.$digits.addEventListener('click', (event) => {
      const clickedNumber = event.target.innerText;

      if (this.$total.innerText === '0') {
        this.$total.innerText = clickedNumber;

        return;
      }

      this.$total.innerText += clickedNumber;
    });

    this.$operations.addEventListener('click', (event) => {
      const clickedOperator = event.target.innerText;

      if (clickedOperator !== '=') {
        this.$total.innerText += clickedOperator;

        return;
      }

      const currentInput = this.$total.innerText;
      const currentInputArray = currentInput.split('');
      const numberStack = [];
      const operatorStack = [];
      let temp = '';

      for (let i = 0; i < currentInputArray.length; i += 1) {
        if (currentInputArray[i] >= '0' && currentInputArray[i] <= '9') {
          temp += currentInputArray[i];
        } else {
          numberStack.push(Number(temp));
          temp = '';
          operatorStack.push(currentInputArray[i]);
        }
      }

      numberStack.push(Number(temp));

      let result = 0;

      operatorStack.forEach((operator) => {
        if (operator === '+') {
          result += this.add(numberStack.shift(), numberStack.shift());
        }
      });

      this.$total.innerText = result;
    });
  }

  add(leftNumber, rightNumber) {
    return leftNumber + rightNumber;
  }
}

const calculator = new Calculator();
