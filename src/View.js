const $total = document.querySelector('#total');

export default class View {
  static render(newTotalValue) {
    $total.innerText = newTotalValue;
  }
}
