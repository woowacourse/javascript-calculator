import {
  DIGITS_LIMIT,
  INIT_NUMBER,
  OPERATORS,
  alertMessage,
  CLASSES,
  ID,
  VALID_INPUT_NUMBERS_LENGTH,
  OPERATORS_REGEX,
} from './utils/constants.js';
import {$} from './utils/selector.js';

class Calculator {
  constructor() {
    this.isStarted = false;
    this.currentNumber = '';
    this.inputNumbers = [];
    this.currentOpertor = '';
  }

  init = () => {
    this.bindDOMs();
    this.bindEvent();
  };

  bindEvent = () => {
    $(CLASSES.DIGITS).addEventListener('click', this.clickDigitHandler);
    $(CLASSES.OPERATIONS).addEventListener('click', this.clickOperatorHandler);
    $(CLASSES.MODIFIER).addEventListener('click', this.clickModifierHandler);
  };

  bindDOMs = () => {
    this.$totalResult = document.querySelector(ID.TOTAL);
  };

  clickModifierHandler = () => {
    this.isStarted = false;
    this.currentNumber = '';
    this.inputNumbers = [];
    this.currentOpertor = '';
    this.renderResult(INIT_NUMBER);
  };

  clickDigitHandler = e => {
    if (this.isOverThreeDigit()) {
      alert(alertMessage.OVER_THREE_DIGIT);
      return;
    }
    const selectedNumber = e.target.innerText;
    this.currentNumber += selectedNumber;
    this.renderDigit(selectedNumber);
  };

  renderDigit = digit => {
    if (!this.isStarted) {
      this.isStarted = true;
      this.$totalResult.innerText = '';
    }
    this.$totalResult.innerText += digit;
  };

  renderOperator = operator => {
    this.$totalResult.innerText += operator;
  };

  renderResult = result => {
    this.$totalResult.innerText = result;
  };

  isOverThreeDigit = () => {
    return this.currentNumber.length >= DIGITS_LIMIT;
  };

  clickOperatorHandler = e => {
    const selectedOperator = e.target.innerText;
    if (!this.checkValidOperatorInput(selectedOperator)) {
      return;
    }
    this.inputNumbers.push(Number(this.currentNumber));
    this.currentNumber = '';
    if (this.isEqualOperator(selectedOperator)) {
      this.renderResult(this.calculate());
      return;
    }
    this.currentOpertor = selectedOperator;
    this.renderOperator(selectedOperator);
  };

  checkValidOperatorInput = operator => {
    if (!this.isEqualOperator(operator) && this.currentOpertor) {
      alert(alertMessage.OVER_TWO_NUMBER);
      return false;
    }
    if (this.isDuplicatedOperator()) {
      alert(alertMessage.DUPLICATED_OPERATOR);
      return false;
    }
    if (this.isEqualOperator(operator) && this.invalidEqualOperatorHandler()) {
      return false;
    }
    return true;
  };

  calculate = () => {
    const [first, second] = this.inputNumbers;
    switch (this.currentOpertor) {
      case OPERATORS.PLUS:
        return first + second;
      case OPERATORS.MULTIPLY:
        return first * second;
      case OPERATORS.MINUS:
        return first - second;
      case OPERATORS.DIVISION:
        return Math.floor(first / second);
      default:
        return;
    }
  };

  isEqualOperator = operator => operator === OPERATORS.EQUAL;

  invalidEqualOperatorHandler = () => {
    if (
      !this.currentOpertor ||
      this.inputNumbers.length < VALID_INPUT_NUMBERS_LENGTH
    ) {
      alert(alertMessage.WRONG_EQUAL_INPUT);
      return true;
    }
    return false;
  };

  isDuplicatedOperator = () => {
    return this.$totalResult.innerText[
      this.$totalResult.innerText.length - 1
    ].match(OPERATORS_REGEX);
  };
}

const calculator = new Calculator();
calculator.init();
