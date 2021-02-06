import State from "./state.js";
import HtmlManager from "./htmlManager.js";

const state = new State();

const digits = document.querySelectorAll(".digit");
const total = document.getElementById("total");
const operators = document.querySelectorAll(".operation");
const modifier = document.querySelector(".modifier");

const isStringZero = (a) => a === "0";
const isThree = (a) => a === 3;

const onDigitClick = (event) => {
  if (isThree(state.currentValue.length)) return;

  if (isStringZero(state.currentValue)) {
    total.innerText = event.target.innerText;
    state.setState("currentValue", total.innerText);
    state.setState("typeOfLastBtn", "digit");
  } else {
    total.innerText += event.target.innerText;
    state.setState("currentValue", total.innerText);
    state.setState("typeOfLastBtn", "digit");
  }
};

digits.forEach((digit) => digit.addEventListener("click", onDigitClick));

const calculate = (op1, op2, operator) => {
  switch (operator) {
    case "divide": {
      total.innerText = parseInt(op1 / op2);
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", total.innerText);
      break;
    }
    case "multiple": {
      total.innerText = parseInt(op1) * parseInt(op2);
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", total.innerText);
      break;
    }
    case "increase": {
      total.innerText = parseInt(op1) + parseInt(op2);
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", total.innerText);
      break;
    }
    case "decrease": {
      total.innerText = parseInt(op1) - parseInt(op2);
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", total.innerText);
      break;
    }
  }
};

const onOperatorClick = (event) => {
  if (event.target.innerText === "=") {
    if (state.typeOfLastBtn === "operator") {
      state.setState("currentValue", state.previousValue);
    }

    calculate(state.previousValue, state.currentValue, state.operator);
    return;
  }
  switch (event.target.innerText) {
    case "/": {
      state.setState("operator", "divide");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      state.setState("typeOfLastBtn", "operator");
      break;
    }
    case "X": {
      state.setState("operator", "multiple");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      state.setState("typeOfLastBtn", "operator");
      break;
    }
    case "+": {
      state.setState("operator", "increase");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      state.setState("typeOfLastBtn", "operator");
      break;
    }
    case "-": {
      state.setState("operator", "decrease");
      state.setState("previousValue", state.currentValue);
      state.setState("currentValue", "0");
      state.setState("typeOfLastBtn", "operator");
      break;
    }
  }
};

const onModifierClick = () => {
  state.setState("currentValue", "0");
  state.setState("previousValue", "0");
  state.setState("operator", "");
  state.setState("typeOfLastBtn", "");
  total.innerText = "0";
};

HtmlManager.addClickEventHandler(operators, onOperatorClick);
HtmlManager.addClickEventHandler(modifier, onModifierClick);
