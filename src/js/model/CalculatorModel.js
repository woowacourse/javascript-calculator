import operation from '../library/utils/calculation.js';

export default class CalculatorModel {
  #fomula;
  #view;
  #currentState;

  constructor(view) {
    this.#fomula = '0';
    this.#view = view;
    this.#currentState = 'input';
  }

  calculate() {
    const parsedElements = this.#parseFomula();
    this.#fomula = this.#getCalculatedResult(parsedElements);
    this.#currentState = 'result';
    this.#view.renderTotal();
  }

  #parseFomula() {
    const [operand1, operand2] = this.#fomula
      .split(/[-+\/X]/)
      .map(operand => parseInt(operand));
    const operator = this.#fomula.match(/[-+\/X]/)[0];

    return { operand1, operand2, operator };
  }

  #getCalculatedResult({ operand1, operand2, operator }) {
    return operation[operator](operand1, operand2);
  }

  get fomula() {
    return this.#fomula;
  }

  changeFomula(value) {
    if (this.#currentState === 'input') {
      this.#fomula += value;
    } else if (this.#currentState === 'result') {
      this.#fomula = value;
      this.#currentState = 'input';
    }
    this.#view.renderTotal();
  }
}
