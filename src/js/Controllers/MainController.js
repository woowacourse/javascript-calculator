import CalculatorView from '../Views/CalculatorView.js';
import CalculatorModel from '../Models/CalculatorModel.js';
import Validator from '../Utils/Validator.js';
import {
  INITIAL_VALUE, MAX_DIGIT_NUMBER, DECIMAL_BASE, EQUAL_SIGN, NEGATIVE_VALUE, OPERATION,
} from '../Utils/Constant.js';

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
      this.digits = INITIAL_VALUE;
    }
    this.setDigits(digit);
  }

  setDigits(digit) {
    if (this.digits < MAX_DIGIT_NUMBER) {
      this.digits *= DECIMAL_BASE;
      this.digits += digit;
      this.calculatorView.showDigit(this.digits);
    }
  }

  onClickACHandler() {
    this.calculatorView.showDigit(INITIAL_VALUE);
    this.initCalculator();
  }

  showResult() {
    const result = this.calculatorModel.getResult();
    return this.calculatorView.showDigit(result);
  }

  doEqualOperation(number) {
    if (!this.validator.isValidExpression(this.digits, this.calculatorModel.getOperation())) {
      return this.calculatorView.showDigit(INITIAL_VALUE);
    }

    this.calculatorModel.setNumbers(number);
    this.calculatorModel.setResult();
    this.showResult();
    this.initCalculator();
  }

  setSign(number) {
    if (this.calculatorModel.getOperation() === OPERATION.SUBTRACT
      && !this.calculatorModel.getNumbersLength()) {
      return number * NEGATIVE_VALUE;
    }
    return number;
  }

  isNegativeSign(operation) {
    return operation === OPERATION.SUBTRACT && this.digits === '';
  }

  onClickOperationHandler(operation) {
    const number = this.setSign(Number(this.digits));
    if (operation === EQUAL_SIGN) {
      this.doEqualOperation(number);
    }
    this.calculatorModel.setOperation(operation);
    if (this.isNegativeSign(operation)) {
      return;
    }
    this.calculatorModel.setNumbers(number);
    this.digits = '';
  }
}
