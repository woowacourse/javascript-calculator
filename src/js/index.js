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

  initEventListner() {}
}

new Calculator();
