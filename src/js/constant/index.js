export const ID = Object.freeze({
  TOTAL: 'total',
});

export const CLASS = Object.freeze({
  DIGITS: 'digits',
  MODIFIER: 'modifier',
  OPERATIONS: 'operations',
  DIGIT: 'digit',
  OPERATION: 'operation',
});

export const ERROR_MESSAGES = Object.freeze({
  EXCEED_THREE_LENGTH: '숫자는 세 자리를 초과하면 안됩니다.',
  ENTER_TWO_NUMBERS: '숫자는 두 개를 입력하셔야 합니다.',
  DIVIDED_NOT_ZERO: '0으로 나눌 수 없습니다.',
  EXIST_OPERAND: '연산자는 하나만 입력해주세요.',
});

export const OPERATORS = Object.freeze({
  ADD: '+',
  SUBSTRACT: '-',
  MULTIPLY: 'X',
  DIVIDE: '/',
  EQUAL: '=',
});

export const RULES = Object.freeze({
  MAX_OPERAND_LENGTH: 3,
  MAX_OPERAND_NUMBER: 2,
  INITIAL_VALUE: '',
  ZERO_NUMBER: 0,
});
