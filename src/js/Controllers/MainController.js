import CalculatorView from '../Views/CalculatorView.js';
import CalculatorModel from '../Models/MainModel.js';
import Validator from '../Utils/Validator.js';

export default class MainController {
  constructor() {
    this.calculatorView = new CalculatorView(document.querySelector('#app'))
      .on('clickDigit', (e) => this.onClickDigitHandler(e.detail))
      .on('clickAC', () => this.onClickACHandler())
      .on('clickOperation', (e) => this.onClickOperationHandler(e.detail));

    this.calculatorModel = new CalculatorModel();
    this.validator = new Validator();
    this.initCalculator();
  }

  initCalculator() {
    this.digits = '';
    this.calculatorModel.init();
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
      this.calculatorView.showDigit(this.digits);
    }
  }

  onClickACHandler() {
    this.calculatorView.showDigit('0');
    this.initCalculator();
  }

  showResult() {
    const result = this.calculatorModel.getResult();
    return this.calculatorView.showDigit(result);
  }

  doEqualOperation(number) {
    if (!this.validator.isValidExpression(this.digits, this.calculatorModel.getOperation())) {
      return this.calculatorView.showDigit(0);
    }

    this.calculatorModel.setNumbers(number);
    this.calculatorModel.setResult();
    this.showResult();
    this.initCalculator();
  }

  onClickOperationHandler(operation) {
    let number = Number(this.digits);
    if (this.calculatorModel.getOperation() === '-' && !this.calculatorModel.getNumbersLength()) {
      number *= -1;
    }

    if (operation === '=') {
      this.doEqualOperation(number);
    }

    this.calculatorModel.setOperation(operation);

    if (operation === '-' && this.digits === '') {
      return;
    }

    this.calculatorModel.setNumbers(number);
    this.digits = '';
  }
}
