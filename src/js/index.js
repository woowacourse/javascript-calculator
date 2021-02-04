class Calculator {
  constructor() {
    this.$ = {
      total: document.querySelector('#total'),
      digits: document.querySelector('.digits'),
      modifiers: document.querySelector('.modifiers'),
      operations: document.querySelector('.operations'),
    };

    this.operands = [];
    this.operator = '';
    this.isTimeToInputNumber = false;
    this.setEventListener();
  }

  onClickDigit(event) {
    if (event.target.className !== 'digit') return;

    const digit = event.target.innerText;

    if (this.$.total.innerText.length >= 3 && !this.isTimeToInputNumber) return;

    if (this.$.total.innerText === '0' || this.isTimeToInputNumber) {
      this.$.total.innerText = '';
      this.isTimeToInputNumber = false;
    }

    this.$.total.innerText += digit;
  }

  onClickModifier(event) {
    if (event.target.className !== 'modifier') return;

    const modifier = event.target.innerText;

    if (modifier === 'AC') {
      this.allClear();
    }
  }

  onClickOperation(event) {
    if (event.target.className !== 'operation') return;

    const operation = event.target.innerText;
    this.operands.push(Number(this.$.total.innerText));

    if (operation !== '=') {
      this.operator = operation;
      this.isTimeToInputNumber = true;
      return;
    }

    let result = 0;
    if (this.operator === '+') {
      result = this.operands[0] + this.operands[1];
    } else if (this.operator === '-') {
      result = this.operands[0] - this.operands[1];
    } else if (this.operator === 'X') {
      result = this.operands[0] * this.operands[1];
    } else if (this.operator === '/') {
      if (this.operands[1] === 0) {
        result = 'NaN';
      } else {
        result = (this.operands[0] / this.operands[1]).toFixed(3);
      }
    }

    this.$.total.innerText = result;
  }

  setEventListener() {
    this.$.digits.addEventListener('click', this.onClickDigit.bind(this));
    this.$.modifiers.addEventListener('click', this.onClickModifier.bind(this));
    this.$.operations.addEventListener(
      'click',
      this.onClickOperation.bind(this)
    );
  }

  allClear() {
    this.$.total.innerText = '0';
    this.operands = [];
    this.operator = '';
  }
}

new Calculator();
