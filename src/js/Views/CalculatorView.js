import View from './View.js';

export default class CalculatorView extends View {
  constructor($element) {
    super();
    this.init($element);
    this.bindDigitClickEvent();
    this.bindACClickEvent();
    this.bindOperationClickEvent();
  }

  bindDigitClickEvent() {
    Array.from(this.$element.querySelectorAll('.digit'))
      .map((digit) => digit.addEventListener('click', () => this.onClickDigitHandler(digit.innerText)));
  }

  onClickDigitHandler(digit) {
    this.emit('clickDigit', Number(digit));
  }

  showDigit(digit) {
    this.$element.querySelector('#total').innerText = digit;
  }

  bindACClickEvent() {
    this.$element.querySelector('.modifier').addEventListener('click', () => {
      this.onClickACHandler();
    });
  }

  onClickACHandler() {
    this.emit('clickAC');
  }

  bindOperationClickEvent() {
    Array.from(this.$element.querySelectorAll('.operation'))
      .map((operation) => operation.addEventListener('click', () => {
        this.onClickOperationHandler(operation.innerText);
      }));
  }

  onClickOperationHandler(operation) {
    this.emit('clickOperation', operation);
  }
}
