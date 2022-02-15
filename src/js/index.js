import { $ } from '../utils/common.js';
import { isUnderThreeDigits } from '../utils/validator.js';

class Calculator {
  constructor() {
    this.configureButton();
    this.$total = $('#total');
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
    const clickedNumber = e.target.innerText;
    if (this.operator === '=') {
      this.controlFirstNumber(clickedNumber);
      return;
    }
    this.controlSecondNumber(clickedNumber);
  };

  controlFirstNumber = (clickedNumber) => {
    if (this.firstNumber === '0') {
      this.firstNumber = clickedNumber;
      this.$total.innerText = clickedNumber;
      return;
    }
    if (!isUnderThreeDigits(this.firstNumber)) {
      return;
    }
    this.firstNumber += clickedNumber;
    this.showTotal(clickedNumber);
  };

  controlSecondNumber = (clickedNumber) => {
    if (this.secondNumber === '0') {
      this.secondNumber = clickedNumber;
      this.showTotal(clickedNumber);
      return;
    }

    if (!isUnderThreeDigits(this.secondNumber)) {
      return;
    }
    this.secondNumber += clickedNumber;
    this.showTotal(clickedNumber);
  };

  showTotal = (number) => {
    this.$total.innerText += number;
  };

  clickOperationButton = (e) => {
    const clickedOperator = e.target.innerText;
    if (clickedOperator === '=') {
      const result = this.calculate(
        Number(this.firstNumber),
        Number(this.secondNumber),
        this.operator,
      );
      this.$total.innerText = result;
      this.operator = clickedOperator;
      this.resetForNextCalculate(result);
      return;
    }
    this.operator = clickedOperator;
    this.showTotal(this.operator);
  };

  resetForNextCalculate(result) {
    this.firstNumber = result;
    this.secondNumber = '0';
  }

  clickModifierButton = () => {
    this.$total.innerText = '0';
    this.firstNumber = '0';
    this.secondNumber = '0';
    this.operator = '=';
  };

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
