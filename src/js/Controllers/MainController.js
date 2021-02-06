import CalculatorView from '../Views/CalculatorView.js';
import CalculatorModel from '../Models/MainModel.js';

export default class MainController {
  init() {
    this.CalculatorView = new CalculatorView()
      .setup(document.querySelector('#app'))
      .on('clickDigit', (e) => this.onClickDigitHandler(e.detail))
      .on('clickAC', () => this.onClickACHandler())
      .on('clickOperation', (e) => this.onClickOperationHandler(e.detail));

    this.CalculatorModel = new CalculatorModel();
    this.digits = '';
  }

  onClickDigitHandler(digit) {
    if (this.digits.length < 3) {
      this.digits += digit;
      this.CalculatorView.showDigit(this.digits);
    }
  }

  onClickACHandler() {
    this.CalculatorView.showDigit('0');
  }

  onClickOperationHandler(operation) {
    if (operation === '=') {
      this.CalculatorModel.setNumbers(parseInt(this.digits, 10));
      this.CalculatorView.showDigit(this.CalculatorModel.getResult());
      return;
    }

    this.CalculatorModel.setNumbers(parseInt(this.digits, 10));
    this.CalculatorModel.setOperation(operation);
    this.digits = '';
  }
}
