class State {
  constructor() {
    this.previousValue = "0";
    this.currentValue = "0";
    this.operator = "";
  }

  setState(name, value) {
    this[name] = value;
  }

  clearAll() {
    this.previousValue = "0";
    this.currentValue = "0";
    this.operator = "";
  }
}

export default State;
