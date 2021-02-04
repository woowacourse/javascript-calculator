function checkInputLength(input) {
  let checkLength = false;

  if (input.length < 3) {
    checkLength = true;
  }

  return checkLength;
}

function isRightInput(input) {
  let rightInput = false;

  if (input[0] !== "0") {
    rightInput = true;
  }

  return rightInput;
}

function onClickedDigit() {
  const digits = document.getElementsByClassName("digit");
  let input = "";

  for (let digit of digits) {
    digit.addEventListener("click", () => {
      const total = document.getElementById("total");
      if (
        checkInputLength(input) &&
        (input.length !== 0 || digit.innerText !== "0")
      ) {
        input += digit.innerText;
      }
      total.innerText = input;
    });
  }

  return input;
}

new onClickedDigit();
