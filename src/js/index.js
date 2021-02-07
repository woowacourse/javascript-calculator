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

  if (state.isError) state.setState("isError", false);

  if (state.typeOfLastBtn === "=") {
    total.innerText = event.target.innerText;
    state.setState("previousValue", "0");
    state.setState("currentValue", event.target.innerText);
    state.setState("typeOfLastBtn", "digit");
    return;
  }

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
      if (state.currentValue === "0") {
        total.innerText = "오류";
        alert("0으로 나눌 수 없습니다.");
        state.setState("isError", true);
        break;
      } else {
        total.innerText = parseInt(op1 / op2);
        state.setState("previousValue", total.innerText);
        break;
      }
    }
    case "multiple": {
      total.innerText = parseInt(op1) * parseInt(op2);
      state.setState("previousValue", total.innerText);
      break;
    }
    case "increase": {
      total.innerText = parseInt(op1) + parseInt(op2);
      state.setState("previousValue", total.innerText);
      break;
    }
    case "decrease": {
      total.innerText = parseInt(op1) - parseInt(op2);
      state.setState("previousValue", total.innerText);
      break;
    }
  }
};

const onOperatorClick = (event) => {
  if (state.isError) return;
  if (event.target.innerText === "=") {
    if (state.typeOfLastBtn === "operator") state.setState("currentValue", state.previousValue);
    calculate(state.previousValue, state.currentValue, state.operator);
    state.setState("typeOfLastBtn", "=");
    return;
  } else if (state.typeOfLastBtn === "=") {
    state.setState("currentValue", state.previousValue);
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
  if (state.isError) state.setState("isError", false);
};

HtmlManager.addClickEventHandler(operators, onOperatorClick);
HtmlManager.addClickEventHandler(modifier, onModifierClick);
