import Formula from './Formula.js';
import Validation from './Validation.js';
import { $, $$ } from './utils.js';
import { MSG, EMPTY_STRING } from './constants.js';

class Calculator {
  constructor() {
    this.formula = new Formula();
    this.validation = new Validation(this.formula);
    this.calculated = false;
  }

  init() {
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
    if (this.validation.isExceed()) return alert(MSG.exceed);

    if (this.calculated) { 
      this.formula.initializeData();
      this.calculated = false;
    }
    this.formula.setNumber(e.target.dataset.value);
    this.print();
  }

  initNumberClickEvent() {
    $$('.digit').forEach(($digit) => {
      $digit.addEventListener('click', this.numberClickEvent.bind(this));
    });
  }

  operatorClickEvent(e) {
    if (!this.validation.haveFirstNumber()) return alert(MSG.empty_number);
    if (!this.calculated && this.validation.haveOperator()) return alert(MSG.have_operator);

    if (this.calculated) {
      this.formula.setNumberByIndex(0, this.formula.calculate());
      this.formula.setNumberByIndex(1, EMPTY_STRING);
      this.calculated = false;
    }
    this.formula.setOperator(e.target.dataset.operator);
    this.print();
  }

  initOperatorClickEvent() {
    $$('.operation').forEach(($operation) => {
      $operation.addEventListener('click', this.operatorClickEvent.bind(this));
    });
  }

  calculateClickEvent(e) {
    if (!this.validation.haveSecondNumber()) return alert(MSG.lack_number);

    if (this.calculated) {
      this.formula.setNumberByIndex(0, this.formula.calculate());
    }
    this.setResult(this.formula.calculate());
    this.calculated = true;
  }

  initCalculateClickEvent() {
    $('#calculate-button').addEventListener('click', this.calculateClickEvent.bind(this));
  }

  clearClickEvent() {
    this.formula.initializeData();
    this.setResult(0);
  }

  initClearClickEvent() {
    $('#clear-button').addEventListener('click', this.clearClickEvent.bind(this));
  }

}

export default Calculator;