import CalculatorController from '../controller/CalculatorController.js';
import CalculatorModel from '../model/CalculatorModel.js';
export default class CalculatorView {
  #model;
  #$target;
  #$total;

  constructor($target) {
    this.#$target = $target;
    this.#model = new CalculatorModel(this);
    this.render();
    this.initDOMElement();
    new CalculatorController(this.#model);
  }

  initDOMElement() {
    this.#$total = document.querySelector('#total');
  }

  renderTotal() {
    this.#$total.innerText = this.#model.fomula;
  }

  render() {
    this.#$target.innerHTML = `
      <div class="calculator">
        <h1 id="total">${this.#model.fomula}</h1>
        <div class="digits flex">
          <button class="digit" data-key="9">9</button>
          <button class="digit" data-key="8">8</button>
          <button class="digit" data-key="7">7</button>
          <button class="digit" data-key="6">6</button>
          <button class="digit" data-key="5">5</button>
          <button class="digit" data-key="4">4</button>
          <button class="digit" data-key="3">3</button>
          <button class="digit" data-key="2">2</button>
          <button class="digit" data-key="1">1</button>
          <button class="digit" data-key="0">0</button>
        </div>
        <div class="modifiers subgrid">
          <button class="modifier">AC</button>
        </div>
        <div class="operations subgrid">
          <button class="operation">/</button>
          <button class="operation">X</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button class="operation">=</button>
        </div>
      </div>`;
  }
}
