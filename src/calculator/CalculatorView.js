const $total = document.querySelector('#total');

export default class CalculatorView {
  static render(newTotalValue) {
    $total.innerText = newTotalValue;
  }
}
