export const isUnderThreeDigits = (number) => {
  if (number.length === 3) {
    alert('4자리 이상의 숫자를 입력할 수 없습니다.');
    return false;
  }
  return true;
};
