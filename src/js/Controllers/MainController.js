import CalculatorView from "../Views/CalculatorView.js";

export default class MainController {
  init() {
    this.CalculatorView = new CalculatorView()
      .setup(document.querySelector('#app'))
      .on('clickDigit', (e) => this.onClickDigitHandler(e.detail));
  }

  onClickDigitHandler(digit) {
    this.CalculatorView.showDigit(digit);
  }
}
