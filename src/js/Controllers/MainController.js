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
  }

  onClickOperationHandler(operation) {
    if (operation === '=') {
      if (this.digits === '' && this.CalculatorModel.getOperation() !== '') {
        this.CalculatorView.showDigit(0);
        return alert('완성되지 않은 수식입니다.');
      }
      this.CalculatorModel.setNumbers(Number(this.digits));
      this.CalculatorView.showDigit(this.CalculatorModel.getResult());
      return;
    }

    this.CalculatorModel.setNumbers(parseInt(this.digits, 10));
    this.CalculatorModel.setOperation(operation);
    this.digits = '';
  }
}
