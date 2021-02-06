import CalculatorView from '../Views/CalculatorView.js';
import CalculatorModel from '../Models/MainModel.js';
import Validator from '../Utils/Validator.js';

export default class MainController {
  constructor() {
    this.CalculatorView = new CalculatorView(document.querySelector('#app'))
      .on('clickDigit', (e) => this.onClickDigitHandler(e.detail))
      .on('clickAC', () => this.onClickACHandler())
      .on('clickOperation', (e) => this.onClickOperationHandler(e.detail));

    this.CalculatorModel = new CalculatorModel();
    this.validator = new Validator();
    this.initCalculator();
  }

  initCalculator() {
    this.digits = '';
    this.CalculatorModel.init();
  }

  onClickDigitHandler(digit) {
    if (this.digits === '') {
      this.digits = 0;
    }
    this.setDigits(digit);
  }

  setDigits(digit) {
    if (this.digits < 100) {
      this.digits *= 10;
      this.digits += digit;
      this.CalculatorView.showDigit(this.digits);
    }
  }

  onClickACHandler() {
    this.CalculatorView.showDigit('0');
    this.initCalculator();
  }

  showResult() {
    const result = this.CalculatorModel.getResult();
    return this.CalculatorView.showDigit(result);
  }

  doEqualOperation(number) {
    if (!this.validator.isValidExpression(this.digits, this.CalculatorModel.getOperation())) {
      return this.CalculatorView.showDigit(0);
    }

    this.CalculatorModel.setNumbers(number);
    this.CalculatorModel.setResult();
    this.showResult();
    this.initCalculator();
  }

  onClickOperationHandler(operation) {
    let number = Number(this.digits);
    if (this.CalculatorModel.getOperation() === '-' && !this.CalculatorModel.getNumbersLength()) {
      number *= -1;
    }

    if (operation === '=') {
      this.doEqualOperation(number);
    }

    this.CalculatorModel.setOperation(operation);

    if (operation === '-' && this.digits === '') {
      return;
    }

    this.CalculatorModel.setNumbers(number);
    this.digits = '';
  }
}
