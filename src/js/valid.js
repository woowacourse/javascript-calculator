const isNumberLowerThreeChar = operator => {
  const splitedOperator = operator.split(/[*+-/]/);
  if (splitedOperator.slice(-1)[0].length > 2) {
    return alert("숫자는 3자리를 넘을 수 없습니다.");
  }

  return true;
};
const isOperatorLowerTwoChar = operator => {
  if (["*", "/", "+", "-"].includes(operator.slice(-1))) {
    return alert("연산자는 두번 연속 작성할 수 없습니다.");
  }

  return true;
};

export { isNumberLowerThreeChar, isOperatorLowerTwoChar };
