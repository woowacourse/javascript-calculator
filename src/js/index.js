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

class Formula {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    this.numbers = ['', ''];
    this.operator = '';
  }

  offset() {
    return this.operator === '' ? 0 : 1;
  }

  result() {
    return this.numbers[0] + this.operator + this.numbers[1];
  }

  setNumber(value) {
    this.setCurNumber(this.isZero() ? value : this.getCurNumber() + value);
  }

  setOperator(operator) {
    this.operator = operator;
  }

  isZero() {
    return this.getCurNumber() === '0';
  }

  setCurNumber(value) {
    this.numbers[this.offset()] = value;
  }

  getCurNumber() {
    return this.numbers[this.offset()];
  }

  toInts() {
    return this.numbers.map(Number);
  }

  calculate() {
    return new Operation(this.toInts(), this.operator).operate();
  }
}

class Validation {
  constructor(formula) {
    this.formula = formula;
  }

  isExceed() {
    return this.formula.getCurNumber().length >= 3;
  }

  haveNumber(index) {
    return this.formula.numbers[index] !== '';
  }

  haveFirstNumber() {
    return this.haveNumber(0);
  }

  haveSecondNumber() {
    return this.haveNumber(1);
  }

  haveOperator() {
    return this.formula.offset() > 0;
  }
}

class Calculator {
  constructor() {
    this.formula = new Formula();
    this.validation = new Validation(this.formula);
    this.initNumberClickEvent();
    this.initOperatorClickEvent();
    this.initCalculateClickEvent();
    this.initClearClickEvent();
  }

  setResult(result) {
    $('#total').innerText = result;
  }

  print() {
    this.setResult(this.formula.result());
  }

  numberClickEvent(e) {
    if (this.validation.isExceed()) return alert('글자수를 초과했습니다!');
    
    this.formula.setNumber(e.target.dataset.value);
    this.print();
  }

  initNumberClickEvent() {
    $$('.digit').forEach(($digit) => {
      $digit.addEventListener('click', this.numberClickEvent.bind(this));
    });
  }

  operatorClickEvent(e) {
    if (!this.validation.haveFirstNumber()) return alert('숫자를 먼저 입력해주세요!');
    if (this.validation.haveOperator()) return alert('이미 연산자를 입력하셨습니다.');

    this.formula.setOperator(e.target.dataset.operator);
    this.print();
  }

  initOperatorClickEvent() {
    $$('.operation').forEach(($operation) => {
      $operation.addEventListener('click', this.operatorClickEvent.bind(this));
    });
  }

  calculateClickEvent(e) {
    if (!this.validation.haveSecondNumber()) return alert('숫자 입력이 부족합니다!');

    this.setResult(this.formula.calculate());

  }

  initCalculateClickEvent() {
    $('#calculate-button').addEventListener('click', this.calculateClickEvent.bind(this));
  }

  clearClickEvent() {
    this.formula.initializeData();
    this.print();
  }

  initClearClickEvent() {
    $('#clear-button').addEventListener('click', this.clearClickEvent.bind(this));
  }

}

class Operation {
  constructor(numbers, operator) {
    this.numbers = numbers;
    this.operator = operator;
    this.operationFns = {
      '+': this.add,
      '-': this.minus,
      '/': this.division,
      'x': this.multi,
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

  division(numbers) {
    return Math.floor(numbers[0] / numbers[1]);
  }

  multi(numbers) {
    return numbers[0] * numbers[1];
  }
}

const calculator = new Calculator();


// '='를 눌러서 결과가 나왔을 때
// flag = true;

// - 숫자를 누른 경우
//   - flag === true 
//        formula.initializeData();
//        flag = false;

// - 연산자를 누른 경우
//   - flag === true 
//      formula.initializeData();
//      1. 결과값 numbers[0]에 저장
//      2. 연산자 저장 
//      flag = false;
// - '='를 누른 경우
//   - flag === true 
//     결과값 numbers[0]에 저장
//     formular.calculate
  