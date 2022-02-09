import { ID, CLASS, ERROR_MESSAGES, OPERATORS, RULES } from './constant/index.js';

class Calculator {
  constructor() {
    this.init();
    this.operands = new Array(RULES.MAX_OPERAND_NUMBER).fill(RULES.INITIAL_VALUE);
    this.operator = null;
  }

  init() {
    this.initDOM();
    this.initEventListner();
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
        const number = e.target.innerText;
        const [firstOperand, secondOperand] = this.operands;

        if (this.operator === null) {
          // 첫 번째 피연산자 입력
          // 길이 체크하기
          if (firstOperand.length === RULES.MAX_OPERAND_LENGTH) {
            alert(ERROR_MESSAGES.EXCEED_THREE_LENGTH);
            return;
          }

          // 숫자를 이어붙인다.
          this.operands[0] += number;
          this.$total.innerText = this.operands[0];

          return;
        }

        // 두 번째 피연산자 입력
        // 길이 체크하기
        if (secondOperand.length === RULES.MAX_OPERAND_LENGTH) {
          alert(ERROR_MESSAGES.EXCEED_THREE_LENGTH);
          return;
        }

        // 숫자를 이어붙인다.
        this.operands[1] += number;
        this.$total.innerText = this.operands[1];

        return;
      }
    });

    this.$operations.addEventListener('click', (e) => {
      if (e.target.classList.contains(CLASS.OPERATION)) {
        const [firstOperand, secondOperand] = this.operands;

        if (e.target.innerText === OPERATORS.EQUAL) {
          //추후 구현
          //피연산자 연산자 멤버변수를 초기화한다.

          if (firstOperand === RULES.INITIAL_VALUE || secondOperand === RULES.INITIAL_VALUE) {
            alert(ERROR_MESSAGES.ENTER_TWO_NUMBERS);
            return;
          }

          //결과값을 렌더링한다.

          switch (this.operator) {
            case OPERATORS.ADD:
              this.$total.innerText = Number(firstOperand) + Number(secondOperand);
              break;
            case OPERATORS.SUBSTRACT:
              this.$total.innerText = Number(firstOperand) - Number(secondOperand);
              break;
            case OPERATORS.DIVIDE:
              // 소수 점 없애는 작업
              // 두번째 피연산자가 0인경우 예외처리
              if (Number(secondOperand) === RULES.ZERO_NUMBER) {
                alert(ERROR_MESSAGES.DIVIDED_NOT_ZERO);
                this.operands[1] = RULES.INITIAL_VALUE;
                return;
              }
              this.$total.innerText = Math.floor(Number(firstOperand) / Number(secondOperand));
              break;
            case OPERATORS.MULTIPLY:
              this.$total.innerText = Number(firstOperand) * Number(secondOperand);
              break;
            default:
          }

          const result = this.$total.innerText;
          this.operands = [result, ''];
          this.operator = null;

          return;
        }

        // operator 멤버 변수 체크
        if (this.operator !== null) {
          alert(ERROR_MESSAGES.EXIST_OPERAND);
          return;
        }

        // operator는 있는데, 첫번째 operand가 없을때
        if (this.operands[0] === RULES.INITIAL_VALUE) {
          alert(ERROR_MESSAGES.ENTER_TWO_NUMBERS);
          return;
        }

        this.operator = e.target.innerText;
        this.$total.innerText = this.operator;
      }
    });

    //초기화
    this.$modifier.addEventListener('click', (e) => {
      this.$total.innerText = RULES.ZERO_NUMBER;
      this.operator = null;
      this.operands = new Array(RULES.MAX_OPERAND_NUMBER).fill(RULES.INITIAL_VALUE);
    });
  }
}

function resetValue(value1, value2) {
  this.operator = null;
  this.operands = new Array(RULES.MAX_OPERAND_NUMBER).fill(RULES.INITIAL_VALUE);
}

new Calculator();
