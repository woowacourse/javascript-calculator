import { MAX_DIGIT, EMPTY_STRING } from './constants.js';

class Validation {
  constructor(formula) {
    this.formula = formula;
  }

  isExceed() {
    return this.formula.getCurNumber().length >= MAX_DIGIT;
  }

  haveNumber(index) {
    return this.formula.numbers[index] !== EMPTY_STRING;
  }

  haveFirstNumber() {
    return this.haveNumber(0);
  }

  haveSecondNumber() {
    return this.haveNumber(1);
  }

  haveOperator() {
    return this.formula.offset() > 0;
  }
}

export default Validation;