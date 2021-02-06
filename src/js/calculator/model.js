import { INITIAL_NUMBER } from "../utils/constants.js";

class CalculatorModel {
  constructor() {
    this.expression = INITIAL_NUMBER;
  }

  getExpression() {
    return this.expression;
  }

  setExpression(value) {
    this.expression = value;
  }
}

export default CalculatorModel;
