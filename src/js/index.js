class Calculator {
  constructor() {
    this.init();
    this.operands = ['', ''];
    this.operator = null;
  }

  init() {
    this.initDOM();
    this.initEventListner();
  }

  initDOM() {
    this.$total = document.getElementById('total');
    this.$digits = document.getElementsByClassName('digits')[0];
    this.$modifier = document.getElementsByClassName('modifier')[0];
    this.$operations = document.getElementsByClassName('operations')[0];
  }

  initEventListner() {
    this.$digits.addEventListener('click', (e) => {
      if (e.target.classList.contains('digit')) {
        const number = e.target.innerText;
        const [firstOperand, secondOperand] = this.operands;

        if (this.operator === null) {
          // 첫 번째 피연산자 입력
          // 길이 체크하기
          if (firstOperand.length === 3) {
            alert('숫자는 세 자리를 초과하면 안됩니다.');
            return;
          }

          // 숫자를 이어붙인다.
          this.operands[0] += number;
          this.$total.innerText = this.operands[0];

          return;
        }

        // 두 번째 피연산자 입력
        // 길이 체크하기
        if (secondOperand.length === 3) {
          alert('숫자는 세 자리를 초과하면 안됩니다.');
          return;
        }

        // 숫자를 이어붙인다.
        this.operands[1] += number;
        this.$total.innerText = this.operands[1];
        console.log(this.operator);
        console.log(this.operands);
        return;
      }
    });

    this.$operations.addEventListener('click', (e) => {
      if (e.target.classList.contains('operation')) {
        const [firstOperand, secondOperand] = this.operands;

        if (e.target.innerText === '=') {
          //추후 구현
          //피연산자 연산자 멤버변수를 초기화한다.

          //결과값을 렌더링한다.
          switch (this.operator) {
            case '+':
              this.$total.innerText = Number(firstOperand) + Number(secondOperand);
              break;
            case '-':
              this.$total.innerText = Number(firstOperand) - Number(secondOperand);
              break;
            case '/':
              // 소수 점 없애는 작업
              // 두번째 피연산자가 0인경우 예외처리
              if (secondOperand === '0') {
                alert('0으로 나눌 수 없습니다.');
                return;
              }
              this.$total.innerText = Math.floor(Number(firstOperand) / Number(secondOperand));
              break;
            case 'X':
              this.$total.innerText = Number(firstOperand) * Number(secondOperand);
              break;
            default:
          }

          return;
        }

        // operator 멤버 변수 체크
        if (this.operator === null) {
          this.operator = e.target.innerText;
          this.$total.innerText = this.operator;
          return;
        }

        // operator는 있는데, 첫번째 operand가 없을때
        if (this.operands[0] === '') {
          alert('연산자는 단독으로 사용할 수 없습니다');
          return;
        }

        // 두번째 피연산자가 '' 빈문자열이 아닐때 에러처리
        if (this.operands[1] !== '') {
          alert('두 개의 피연산자만 연산이 가능합니다.');
          return;
        }
      }
    });
  }
}

new Calculator();
