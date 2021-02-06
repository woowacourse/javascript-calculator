const isNumberLowerThreeChar = expression => {
  const splitedExpression = expression.split(/[X+-/]/);
  if (splitedExpression.slice(-1)[0].length > 2) {
    alert("숫자는 3자리를 넘을 수 없습니다.");

    return false;
  }

  return true;
};

const isOperatorLowerTwoChar = expression => {
  if (isNaN(expression)) {
    alert("연산자는 두번 이상 작성할 수 없습니다.");

    return false;
  }

  return true;
};

export { isNumberLowerThreeChar, isOperatorLowerTwoChar };
