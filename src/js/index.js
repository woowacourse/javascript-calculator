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

function updateFirstInputAndOperator(operation, firstInput, operator) {
  if (operation.innerText !== "=") {
    state.operation = operator;
    firstInput = state.tempInput;
  }

  return firstInput;
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

function onClickedEqual() {
  const operation = document.getElementsByClassName("operation")[4];
  let result = "";

  operation.addEventListener("click", () => {
    if (state.operation === "X") {
      state.operation = "*";
    }

    if (isDivideError()) {
      result = "오류";
      resetState();
    } else if (state.operation !== "=") {
      result = parseInt(
        eval(state.firstInput + state.operation + state.secondInput)
      );
      state.firstInput = String(result);
    }
    setTotalText(result);
  });
}

function onClickedOperation() {
  const operations = document.getElementsByClassName("operation");
  let firstInput = state.firstInput;
  let secondInput = "";
  onClickedDigit();

  // document.querySelector(".operations").addEventListener("click", (e) => {
  //   let operator = e.target.innerText;
  //   console.log(e.target.innerText, e.target);
  //   console.log(state);
  //   if (firstInput === "" || state.error) {
  //     firstInput = updateFirstInputAndOperator(e.target, firstInput, operator);
  //     state.firstInput = firstInput;
  //   }

  //   if (operator !== "=" && operator !== "") {
  //     state.operation = operator;
  //     if (state.error) {
  //       state.firstInput = state.tempInput;
  //       state.error = false;
  //     }
  //   }

  //   onClickedDigit();
  //   secondInput = state.tempInput;
  //   state.secondInput = secondInput;
  // });
  for (let operation of operations) {
    operation.addEventListener("click", () => {
      let operator = operation.innerText;
      if (firstInput === "" || state.error) {
        firstInput = updateFirstInputAndOperator(
          operation,
          firstInput,
          operator
        );
        state.firstInput = firstInput;
      }

      if (operator !== "=" && operator !== "") {
        state.operation = operator;
        if (state.error) {
          state.firstInput = state.tempInput;
          state.error = false;
        }
      }

      onClickedDigit();
      secondInput = state.tempInput;
      state.secondInput = secondInput;
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
