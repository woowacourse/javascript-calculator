import { $ } from '../utils/common.js';
import { isUnderThreeDigits } from '../utils/validator.js';

class Calculator {
  constructor() {
    this.configureButton();
    this.$totalNumber = $('#total');
    this.firstNumber = '0';
    this.secondNumber = '0';
    this.operator = '=';
  }

  configureButton() {
    const $digitButtons = $('.digits');
    const $modifierButton = $('.modifier');
    const $operationButtons = $('.operations');
    $digitButtons.addEventListener('click', this.clickNumberButton);
    $modifierButton.addEventListener('click', this.clickModifierButton);
    $operationButtons.addEventListener('click', this.clickOperationButton);
  }

  clickNumberButton = (e) => {
    if (this.operator === '=') {
      if (this.firstNumber === '0') {
        this.firstNumber = e.target.innerText;
        this.$totalNumber.innerText = e.target.innerText;
        return;
      }
      if (!isUnderThreeDigits(this.firstNumber)) {
        return;
      }
      this.firstNumber += e.target.innerText;
      this.$totalNumber.innerText += e.target.innerText;
      return;
    }
    if (this.secondNumber === '0') {
      this.secondNumber = e.target.innerText;
      this.$totalNumber.innerText += e.target.innerText;
      return;
    }
    if (!isUnderThreeDigits(this.secondNumber)) {
      return;
    }
    this.secondNumber += e.target.innerText;
    this.$totalNumber.innerText += e.target.innerText;
  };

  clickOperationButton = (e) => {
    if (e.target.innerText === '=') {
      // 결과를 계산
      const result = this.calculate(
        Number(this.firstNumber),
        Number(this.secondNumber),
        this.operator,
      );
      this.$totalNumber.innerText = result;
      this.operator = e.target.innerText;
      this.nextCalculate(result);
      return;
    }
    this.operator = e.target.innerText;
    this.$totalNumber.innerText += this.operator;
  };

  clickModifierButton = (e) => {
    this.$totalNumber.innerText = '0';
    this.firstNumber = '0';
    this.secondNumber = '0';
    this.operator = '=';
  };

  nextCalculate(result) {
    this.firstNumber = result;
    this.secondNumber = '0';
  }

  // 숫자 누를때마다 바로 결과값으로 보이게.

  calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case 'X':
        return firstNumber * secondNumber;
      case '/':
        return Math.floor(firstNumber / secondNumber);
      default:
        return;
    }
  }
}

const calculator = new Calculator();
