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
  }
}

new Calculator();
