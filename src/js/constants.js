export const SELECTORS = {
  app: '#app',
  calculator: '.calculator',
  total: '#total',
  digits: '.digits',
  digit: '.digit',
  modifier: '.modifier',
  operations: '.operations',
  operation: '.operation',
  plus: '.plus',
  minus: '.minus',
};

export const OPERATIONS = {
  plus: 'plus',
  minus: 'minus',
  multiply: 'multiply',
  divide: 'divide',
  equal: 'equal',
}

export const INITIAL_NUMBER = 0;

export const MAX_DIGIT_SIZE = 3;

export const ERROR_MESSAGES = {
  underMaxDigitSize: '세자리수 까지만 입력 가능합니다',
  operationBetweenNumber: '연산자는 숫자 사이에 입력해 주세요',
  onlyTwoOperlands: '두개의 숫자만 연산이 가능합니다',
  divideWithPositiveNumber: '양의 정수로만 나눌 수 있습니다',
};
