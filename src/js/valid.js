const isNumberOverThreeChar = operator => {
  const splitedOperator = operator.split(/[*+-/]/);
  if (splitedOperator.slice(-1)[0].length > 3) {
    return alert("숫자는 3자리를 넘을 수 없습니다.");
  }

  return true;
};
const isOperatorOverTwoChar = operator => {};

export { isNumberOverThreeChar, isOperatorOverTwoChar };
