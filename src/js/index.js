// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// 숫자는 2개까지만 입력할 수 있다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
class Calculator {
  constructor() {
    this.numbers = ['', ''];
    this.offset = 0;
    this.operator = '';
    this.initNumberClickEvent();
    this.initOperatorClickEvent();
    this.initCalculateClickEvent();
  }

  print() {
    $('#total').innerText = this.numbers[0] + this.operator + this.numbers[1];
  }

  numberClickEvent(e) {
    if (e.target === e.currentTarget) {
      return;
    }
    if (this.numbers[this.offset].length >= 3) return;

    if (this.numbers[this.offset] === '0')
      this.numbers[this.offset] = e.target.dataset.value;
    else this.numbers[this.offset] += e.target.dataset.value;
    this.print();
  }

  initNumberClickEvent() {
    $('.digits').addEventListener('click', (e) => {
      this.numberClickEvent(e)
    })
  }

  operatorClickEvent(e) {
    // 빈 칸일 때
    if ($('#total').innerText === '0') return;

    // 이미 연산자가 있을 때
    if ($('#total').innerText.match(/[+\-/x]+/)) return;

    this.offset = 1;
    this.operator = e.target.dataset.operator;
    this.print();
  }

  initOperatorClickEvent() {
    $$('.operation').forEach(($operation) => {
      $operation.addEventListener('click', (e) => {
        this.operatorClickEvent(e);
      });
    });
  }

  calculateClickEvent(e) {
    // 두 번째 숫자 입력이 없을 때
    if (this.numbers[1] === '') return;

    $('#total').innerText = new Operation(this.numbers.map(Number), this.operator).operate();
  }

  initCalculateClickEvent() {
    $('#calculate-button').addEventListener('click', (e) => {
      this.calculateClickEvent(e);
    })
  }

}

class Operation {
  constructor(numbers, operator) {
    this.numbers = numbers;
    this.operator = operator;
    this.operationFns = {
      '+': this.add,
      '-': this.minus,
    };
  }

  operate() {
    return this.operationFns[this.operator](this.numbers);
  }

  add(numbers) {
    return numbers[0] + numbers[1];
  }

  minus(numbers) {
    return numbers[0] - numbers[1];
  }
}

const calculator = new Calculator();
