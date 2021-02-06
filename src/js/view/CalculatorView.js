import CalculatorController from '../controller/CalculatorController.js';
import { CLASS, ID } from '../library/constants/attribute.js';
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
    this.#$total = document.querySelector(`#${ID.TOTAL}`);
  }

  renderTotal() {
    this.#$total.innerText = this.#model.formula;
  }

  render() {
    this.#$target.innerHTML = `
      <div class="calculator">
        <h1 id="${ID.TOTAL}">${this.#model.formula}</h1>
        <div class="${CLASS.DIGITS} flex">
          <button class="digit">9</button>
          <button class="digit">8</button>
          <button class="digit">7</button>
          <button class="digit">6</button>
          <button class="digit">5</button>
          <button class="digit">4</button>
          <button class="digit">3</button>
          <button class="digit">2</button>
          <button class="digit">1</button>
          <button class="digit">0</button>
        </div>
        <div class="modifiers subgrid">
          <button class="${CLASS.MODIFIER}">AC</button>
        </div>
        <div class="${CLASS.OPERATIONS} subgrid">
          <button class="operation">/</button>
          <button class="operation">X</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button class="operation">=</button>
        </div>
      </div>`;
  }
}
