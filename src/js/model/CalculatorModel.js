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
    try {
      const parsedElements = this.#parseFomula();
      this.#fomula = this.#getCalculatedResult(parsedElements);
    } catch (error) {
      this.#fomula = `SYNTAX ERROR`;
      alert(error);
    }
    this.#currentState = 'result';
    this.#view.renderTotal();
  }

  #parseFomula() {
    const [operand1, operand2, ...surpluses] = this.#fomula
      .split(/[-+\/X]/)
      .map(operand => parseInt(operand));
    const operator = this.#fomula.match(/[-+\/X]/)[0];
    if (surpluses.length > 0) throw new Error('TOO MANY OPERATERS');

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
