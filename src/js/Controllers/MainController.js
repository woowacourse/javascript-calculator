import CalculatorView from '../Views/CalculatorView.js';
import CalculatorModel from '../Models/MainModel.js';

export default class MainController {
  init() {
    this.CalculatorView = new CalculatorView()
      .setup(document.querySelector('#app'))
      .on('clickDigit', (e) => this.onClickDigitHandler(e.detail))
      .on('clickAC', () => this.onClickACHandler())
      .on('clickOperation', (e) => this.onClickOperationHandler(e.detail));

    this.CalculatorModel = new CalculatorModel().init();
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
    this.digits = '';
    this.CalculatorModel.init();
  }

  onClickOperationHandler(operation) {
    let number = Number(this.digits);
    if (this.CalculatorModel.getOperation() === '-' && !this.CalculatorModel.getNumbersLength()) {
      number *= -1;
    }

    if (operation === '=') {
      if (this.digits === '' && this.CalculatorModel.getOperation() !== '') {
        this.CalculatorView.showDigit(0);
        return alert('완성되지 않은 수식입니다.');
      }
      this.CalculatorModel.setNumbers(number);
      const result = this.CalculatorModel.getResult();
      return result === Infinity ? this.CalculatorView.showDigit('오류') : this.CalculatorView.showDigit(result);
    }

    if (operation === '-') {
      if (this.digits !== '') {
        this.CalculatorModel.setNumbers(number);
      }
      this.CalculatorModel.setOperation(operation);
    } else {
      this.CalculatorModel.setOperation(operation);
      this.CalculatorModel.setNumbers(number);
    }
    this.digits = '';
  }
}
