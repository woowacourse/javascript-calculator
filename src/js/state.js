class State {
  constructor() {
    this.previousValue = "0";
    this.currentValue = "0";
    this.operator = "";
    this.typeOfLastBtn = "";
    this.isError = false;
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
