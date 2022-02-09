import { $ } from '../utils/common.js';

class Calculator {
  constructor() {
    this.configureButton();
    this.firstNumber;
    this.secondNumber;
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

  clickNumberButton = (e) => {};

  clickModifierButton = (e) => {};

  clickOperationButton = (e) => {};
}

const calculator = new Calculator();
