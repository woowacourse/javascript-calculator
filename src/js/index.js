let firstDigit = "";
let secondDigit = "";
let operation = "";
const total = document.querySelector("#total");

const validateInput = (firstDigit, secondDigit, operation) => {
  if (firstDigit !== "" && secondDigit !== "" && operation !== "") {
    return true;
  }
  return false;
};

const calculateMath = (firstDigit, secondDigit, operation) => {
  if (validateInput(firstDigit, secondDigit, operation)) {
    switch (operation) {
      case "+":
        return firstDigit + secondDigit;
      case "-":
        return firstDigit - secondDigit;
      case "X":
        return firstDigit * secondDigit;
      case "/":
        return firstDigit / secondDigit;
      default:
        break;
    }
  }
  return 0;
};

const digits = document.querySelectorAll(".digit");
digits.forEach(digitButton => {
  digitButton.addEventListener("click", e => {
    e.preventDefault();
    // 첫번째 수 입력
    if (!operation) {
      firstDigit += e.target.textContent;
      total.innerHTML = firstDigit;
    }

    // 두번째 수 입력
    if (firstDigit && operation) {
      secondDigit += e.target.textContent;
      total.innerHTML = secondDigit;
    }

    // total.innerHTML = firstDigit + operation + secondDigit;
  });
});
