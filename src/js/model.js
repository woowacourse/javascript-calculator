class CalculatorModel {
  constructor() {
    this.expression = "0";
  }

  getExpression() {
    return this.expression;
  }

  setExpression(value) {
    this.expression = value;
  }
}

export default CalculatorModel;
