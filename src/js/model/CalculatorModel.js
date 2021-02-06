import operation from '../library/utils/calculation.js';
import {
  INITIAL_FOMULA,
  STATE,
  MAXIMUM_OPERAND_VALUE,
} from '../library/constants/calculator.js';
import { MSG, SYNTAX_ERROR } from '../library/constants/error.js';
export default class CalculatorModel {
  #fomula;
  #view;
  #currentState;

  constructor(view) {
    this.#fomula = INITIAL_FOMULA;
    this.#view = view;
    this.#currentState = STATE.INPUT;
  }

  calculate() {
    try {
      if (this.#currentState === STATE.RESULT) {
        throw new Error(MSG.INPUT_FOMULA);
      }
      const parsedElements = this.#parseFomula();
      this.#fomula = this.#getCalculatedResult(parsedElements);
    } catch (error) {
      this.#fomula = SYNTAX_ERROR;
      alert(error);
    }
    this.#currentState = STATE.RESULT;
    this.#view.renderTotal();
  }

  #parseFomula() {
    const [operand1, operand2, ...surpluses] = this.#fomula
      .split(/[-+\/X]/)
      .map(operand => parseInt(operand));
    const operator = (this.#fomula.match(/[-+\/X]/) ?? [null])[0];
    if (isNaN(operand1) || isNaN(operand2)) {
      throw new Error(MSG.SHOULD_HAVE_2_OPERAND);
    }
    if (!operator) throw new Error(MSG.SHOULD_HAVE_1_OPERATOR);
    if (surpluses.length > 0) throw new Error(MSG.TOO_MANY_OPERATERS);
    if (operand1 > MAXIMUM_OPERAND_VALUE || operand2 > MAXIMUM_OPERAND_VALUE)
      throw new Error(MSG.EXCEED_MAXIMUM_OPERAND);

    return { operand1, operand2, operator };
  }

  #getCalculatedResult({ operand1, operand2, operator }) {
    return operation[operator](operand1, operand2);
  }

  get fomula() {
    return this.#fomula;
  }

  changeFomula(value) {
    if (this.#currentState === STATE.INPUT) {
      this.#fomula += value;
    } else if (this.#currentState === STATE.RESULT) {
      this.#fomula = value;
      this.#currentState = STATE.INPUT;
    }
    this.#view.renderTotal();
  }

  resetFomula() {
    this.#fomula = INITIAL_FOMULA;
    this.#currentState = STATE.INPUT;
    this.#view.renderTotal();
  }
}
