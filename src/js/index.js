import State from "./state.js";

const state = new State();

const total = document.getElementById("total");

function onDigitClick(event) {
  if (total.innerText === "0") {
    total.innerText = event.target.innerText;
    state.setState("currentValue", total.innerText);
  } else {
    total.innerText += event.target.innerText;
    state.setState("currentValue", total.innerText);
  }
}
