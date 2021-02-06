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
      if (this.#currentState === 'result') {
        throw new Error('PLEASE INPUT FOMULA');
      }
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
    const operator = (this.#fomula.match(/[-+\/X]/) ?? [null])[0];
    console.log(`op1:${typeof operand1} op2:${operand2}`);
    if (isNaN(operand1) || isNaN(operand2)) {
      throw new Error('SHOULD HAVE 2 OPERAND');
    }
    if (!operator) throw new Error('SHOULD HAVE 1 OPERATOR');
    if (surpluses.length > 0) throw new Error('TOO MANY OPERATERS');
    if (operand1 > 999 || operand2 > 999)
      throw new Error('MAXIMUM OF OPERAND IS 999');

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

  resetFomula() {
    this.#fomula = '0';
    this.#currentState = 'input';
    this.#view.renderTotal();
  }
}
