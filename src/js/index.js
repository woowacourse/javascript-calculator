const state = {
  tempInput: "",
  firstInput: "",
  secondInput: "",
  operation: "",
  error: false,
  equalClicked: false,
};

function checkInputLength(input) {
  if (input.length < 3) {
    return true;
  }

  return false;
}

function isRightInput(input) {
  if (input[0] !== "0" && checkInputLength(input)) {
    return true;
  }

  return false;
}

function setTotalText(result) {
  const total = document.getElementById("total");
  total.innerText = result;
}

function onClickedDigit() {
  document.querySelector(".digits").addEventListener("click", (e) => {
    const currentInputNumber = e.target.innerText;
    if (state.equalClicked) {
      resetState();
      state.equalClicked = false;
    }
    if (isRightInput(state.tempInput)) {
      state.tempInput += currentInputNumber;
    } else {
      state.tempInput = currentInputNumber;
    }
    setTotalText(state.tempInput);
  });
}

function resetState() {
  state.tempInput = "";
  state.firstInput = "";
  state.secondInput = "";
  state.operation = "";
}

function isDivideError() {
  if (state.operation === "/" && state.secondInput === "0") {
    resetState();
    state.error = true;

    return true;
  }

  return false;
}

function calculateResult() {
  let result = 0;

  if (state.operation === "+") {
    result = parseInt(state.firstInput) + parseInt(state.secondInput);
  } else if (state.operation === "-") {
    result = parseInt(state.firstInput) - parseInt(state.secondInput);
  } else if (state.operation === "X") {
    result = parseInt(state.firstInput) * parseInt(state.secondInput);
  } else if (state.operation === "/") {
    result = parseInt(parseInt(state.firstInput) / parseInt(state.secondInput));
  }

  return result;
}

function setResultLimit(result) {
  if (result > 999999) {
    result = "범위초과";
    state.error = true;
    resetState();
  }
}

function onClickedEqual() {
  let result = "";

  if (isDivideError()) {
    result = "오류";
    resetState();
  } else {
    result = calculateResult();
    state.firstInput = String(result);
  }

  setResultLimit(result);
  setTotalText(result);
  state.equalClicked = true;
}

function whenStateIsInitialized(prevResult, operator) {
  if (prevResult === "" || state.error) {
    if (operator !== "=" || operator !== "") {
      state.operation = operator;
      state.firstInput = state.tempInput;
      state.equalClicked = false;
    } else {
      state.secondInput = state.tempInput;
      onClickedEqual();
    }
    if (state.error) {
      state.error = false;
    }
  }
}

function whenStateIsNotInitialized(prevResult, operator) {
  if (prevResult !== "") {
    if (operator !== "=") {
      state.operation = operator;
      state.equalClicked = false;
    } else {
      state.secondInput = state.tempInput;
      onClickedEqual();
    }
  }
}

function onClickedOperation() {
  document.querySelector(".operations").addEventListener("click", (e) => {
    const operator = e.target.innerText;
    let prevResult = state.firstInput;

    whenStateIsInitialized(prevResult, operator);
    whenStateIsNotInitialized(prevResult, operator);

    state.tempInput = "";
  });
}

function onClickedModifier() {
  const modifier = document.getElementsByClassName("modifier")[0];

  modifier.addEventListener("click", () => {
    state.error = true;
    resetState();
    setTotalText("0");
  });
}

new onClickedDigit();
new onClickedModifier();
new onClickedOperation();
