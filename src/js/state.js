class state {
  constructor() {
    this.previousValue = "0";
    this.currentValue = "0";
    this.operator = "0";
  }

  setState(name, value) {
    this[name] = value;
  }
}
