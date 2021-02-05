const state = {
  tempInput: "",
  firstInput: "",
  secondInput: "",
  operation: "",
  error: false,
};

function checkInputLength(input) {
  let checkLength = false;

  if (input.length < 3) {
    checkLength = true;
  }

  return checkLength;
}

function isRightInput(input) {
  let rightInput = false;

  if (input[0] !== "0" && checkInputLength(input)) {
    rightInput = true;
  }

  return rightInput;
}

function setTotalText(result) {
  const total = document.getElementById("total");
  total.innerText = result;
}

function onClickedDigit() {
  let input = "";

  document.querySelector(".digits").addEventListener("click", (e) => {
    const currentInputNumber = e.target.innerText;

    if (isRightInput(input)) {
      input += currentInputNumber;
    } else {
      input = currentInputNumber;
    }

    setTotalText(input);
    state.tempInput = input;
  });
}

function resetState() {
  state.tempInput = "";
  state.firstInput = "";
  state.secondInput = "";
  state.operation = "";
}

function isDivideError() {
  let isDivideError = false;

  if (state.operation === "/" && state.secondInput === "0") {
    isDivideError = true;
    resetState();
    state.error = true;
  }

  return isDivideError;
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

function onClickedEqual() {
  const operation = document.getElementsByClassName("operation")[4];
  let result = "";

  operation.addEventListener("click", () => {
    if (isDivideError()) {
      result = "오류";
      resetState();
    } else {
      result = calculateResult();
    }
    state.firstInput = String(result);
    setTotalText(result);
  });
}

function setFirstInputAndOperator(operation, firstInput, operator) {
  if (operation.innerText !== "=") {
    state.operation = operator;
    firstInput = state.tempInput;
  }

  return firstInput;
}

function onClickedOperation() {
  const operations = document.getElementsByClassName("operation");
  let prevResult = state.firstInput;
  onClickedDigit();

  for (let operation of operations) {
    operation.addEventListener("click", () => {
      let operator = operation.innerText;

      if (prevResult === "" || state.error) {
        // 첫번 째 연산이거나 AC눌렀을 때
        prevResult = setFirstInputAndOperator(operation, prevResult, operator);
        state.firstInput = prevResult;
      }

      if (operator !== "=" && operator !== "") {
        // operator가 사칙연산자일 때
        state.operation = operator;
        if (state.error) {
          // 오류 났을 때
          state.firstInput = state.tempInput;
          state.error = false;
        }
      }

      onClickedDigit();
      state.secondInput = state.tempInput;
    });
  }

  onClickedEqual();
}

function onClickedModifier() {
  const modifier = document.getElementsByClassName("modifier")[0];

  modifier.addEventListener("click", () => {
    state.error = true;
    resetState();
    setTotalText("0");
  });
}

new onClickedModifier();
new onClickedOperation();
