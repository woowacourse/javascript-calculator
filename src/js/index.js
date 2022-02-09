// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// 숫자는 2개까지만 입력할 수 있다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

const $ = (selector) => document.querySelector(selector);
class Calculator {
  constructor() {
    this.numbers = ['', ''];
    this.offset = 0;
    this.operator = '';
    this.initNumberClickEvent();
  }

  print() {
    $('#total').innerText = this.numbers[0] + this.operator + this.numbers[1];
  }

  initNumberClickEvent() {
    $('.digits').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
          return;
      }
      if (this.numbers[this.offset].length >= 3) return;

      this.numbers[this.offset] += e.target.dataset.value;
      this.print();
    })
  }


  
}

const calculator = new Calculator();
