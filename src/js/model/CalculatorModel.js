import operation from '../library/utils/calculation.js';
import {
  INITIAL_FOMULA,
  STATE,
  MAXIMUM_OPERAND_VALUE,
} from '../library/constants/calculator.js';
import { MSG, SYNTAX_ERROR } from '../library/constants/error.js';
export default class CalculatorModel {
  #formula;
  #view;
  #currentState;

  constructor(view) {
    this.#formula = INITIAL_FOMULA;
    this.#view = view;
    this.#currentState = STATE.INPUT;
  }

  get formula() {
    return this.#formula;
  }

  changeFormula(value) {
    if (this.#currentState === STATE.INPUT) {
      this.#formula += value;
    } else if (this.#currentState === STATE.RESULT) {
      this.#formula = value;
      this.#currentState = STATE.INPUT;
    }
    this.#view.renderTotal();
  }

  resetFormula() {
    this.#formula = INITIAL_FOMULA;
    this.#currentState = STATE.INPUT;
    this.#view.renderTotal();
  }

  calculate() {
    try {
      this.#verifyCurrentStateResult();
      const parsedElements = this.#parseFormula();
      this.#formula = this.#getCalculatedResult(parsedElements);
    } catch (error) {
      this.#formula = SYNTAX_ERROR;
      alert(error);
    }
    this.#currentState = STATE.RESULT;
    this.#view.renderTotal();
  }

  #verifyCurrentStateResult() {
    if (this.#currentState === STATE.RESULT) {
      throw new Error(MSG.INPUT_FOMULA);
    }
  }

  #parseFormula() {
    const [operand1, operand2, ...surpluses] = this.#formula
      .split(/[-+\/X]/)
      .map(operand => parseInt(operand));
    const operator = (this.#formula.match(/[-+\/X]/) ?? [null])[0];
    this.#verifyFormula(operand1, operand2, surpluses, operator);

    return { operand1, operand2, operator };
  }

  #verifyFormula(operand1, operand2, surpluses, operator) {
    if (isNaN(operand1) || isNaN(operand2)) {
      throw new Error(MSG.SHOULD_HAVE_2_OPERAND);
    }
    if (!operator) throw new Error(MSG.SHOULD_HAVE_1_OPERATOR);
    if (surpluses.length > 0) throw new Error(MSG.TOO_MANY_OPERATERS);
    if (operand1 > MAXIMUM_OPERAND_VALUE || operand2 > MAXIMUM_OPERAND_VALUE)
      throw new Error(MSG.EXCEED_MAXIMUM_OPERAND);
  }

  #getCalculatedResult({ operand1, operand2, operator }) {
    return operation[operator](operand1, operand2);
  }
}
