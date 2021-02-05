export default class TotalBox {
  constructor(value) {
    this.value = value;
  }

  getNonNagativeValue() {
    return this.isLeftOperandNagative() ? this.value.substr(1) : this.value;
  }

  getOperators() {
    const newValue = this.getNonNagativeValue();

    const operators = newValue.match(/(\+|\-|\/|X)/g);
    if (operators === null) {
      return [];
    }

    return operators;
  }

  getOperands() {
    const newValue = this.getNonNagativeValue();

    const [operator] = this.getOperators();
    const operands = newValue.split(operator);

    return operands;
  }

  getLatestOperand() {
    const [leftOperand, rightOperand] = this.getOperands();
    const latestOperand =
      rightOperand === undefined ? leftOperand : rightOperand;

    return latestOperand;
  }

  isOperatorExist() {
    return this.getOperators().length > 0;
  }

  isLeftOperandEmpty() {
    const [leftOperand] = this.getOperands();

    return leftOperand === '';
  }

  isLeftOperandNagative() {
    if (this.value.length > 0 && this.value[0] === '-') {
      return true;
    }

    return false;
  }
}
