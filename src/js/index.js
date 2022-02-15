import {
  ID,
  CLASS,
  ERROR_MESSAGES,
  OPERATORS,
  RULES,
  FIRST_INDEX,
  SECOND_INDEX,
} from './constant/index.js';
import { counter } from './util/index.js';
import { convertToNumber, isExceedOperandLength, isNotEnterTwoNumbers } from './util/index.js';

class Calculator {
  constructor() {
    this.init();
  }

  init() {
    this.initDOM();
    this.initEventListner();
    this.resetCalculator();
  }

  initDOM() {
    this.$total = document.getElementById(ID.TOTAL);
    this.$digits = document.getElementsByClassName(CLASS.DIGITS)[0];
    this.$modifier = document.getElementsByClassName(CLASS.MODIFIER)[0];
    this.$operations = document.getElementsByClassName(CLASS.OPERATIONS)[0];
  }

  initEventListner() {
    this.$digits.addEventListener('click', (e) => {
      if (e.target.classList.contains(CLASS.DIGIT)) {
        const [firstOperand, secondOperand] = this.operands;
        const number = e.target.innerText;

        if (this.getOperator() === RULES.NOTHING) {
          if (isExceedOperandLength(firstOperand)) {
            return;
          }

          this.setOperand(FIRST_INDEX, this.getOperand(FIRST_INDEX) + number);
          this.displayResultScreen(this.getOperand(FIRST_INDEX));
          return;
        }

        if (isExceedOperandLength(secondOperand)) {
          return;
        }

        this.setOperand(SECOND_INDEX, this.getOperand(SECOND_INDEX) + number);
        this.displayResultScreen(this.getOperand(SECOND_INDEX));
        return;
      }
    });

    this.$operations.addEventListener('click', (e) => {
      if (e.target.classList.contains(CLASS.OPERATION)) {
        const [firstOperand, secondOperand] = this.operands;

        if (e.target.innerText === OPERATORS.EQUAL) {
          if (isNotEnterTwoNumbers(firstOperand, secondOperand)) {
            return;
          }

          this.caculate(convertToNumber(firstOperand), convertToNumber(secondOperand));
          this.resetCalculator();

          const calculatedValue = this.$total.innerText;
          this.setOperand(FIRST_INDEX, calculatedValue);
          return;
        }

        if (this.getOperator() !== RULES.NOTHING) {
          alert(ERROR_MESSAGES.EXIST_OPERAND);
          return;
        }

        if (this.getOperand(FIRST_INDEX) === RULES.INITIAL_VALUE) {
          alert(ERROR_MESSAGES.ENTER_TWO_NUMBERS);
          return;
        }

        this.setOperator(e.target.innerText);
        this.displayResultScreen(this.getOperator());
      }
    });

    this.$modifier.addEventListener('click', (e) => {
      this.displayResultScreen(RULES.ZERO_NUMBER);
      this.resetCalculator();
    });
  }

  resetCalculator() {
    this.setOperator(RULES.NOTHING);
    this.operands = new Array(RULES.MAX_OPERAND_NUMBER).fill(RULES.INITIAL_VALUE);
  }

  caculate(firstOperand, secondOperand) {
    const result = counter[this.getOperator()](
      firstOperand,
      secondOperand,
      this.setOperand(SECOND_INDEX, RULES.INITIAL_VALUE)
    );

    this.displayResultScreen(result);
  }

  getOperand(index) {
    return this.operands[index];
  }

  setOperand(index, value) {
    this.operands[index] = value;
  }

  getOperator() {
    return this.operator;
  }

  setOperator(value) {
    this.operator = value;
  }

  displayResultScreen(result) {
    this.$total.innerText = result;
  }
}

new Calculator();
