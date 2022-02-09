export const DOM = Object.freeze({
  CALCULATOR_CLASS_NAME: "calculator",
  TOTAL_ID: "total",
  DIGIT_CLASS_NAME: "digit",
  OPERATION_CLASS_NAME: "operation",
  MODIFIER_CLASS_NAME: "modifier",
});

export const TYPE = Object.freeze({
  UNDEFINED: undefined,
  NUMBER: "number",
});

export const OPERATION = Object.freeze({
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "X",
  DIVIDE: "/",
  EQUAL: "=",
});

export const ZERO = 0;

export const ONE_THOUSAND = 1000;

export const ONE_HUNDRED = 100;

export const ERROR_MESSAGE = Object.freeze({
  PARAMETER_ERROR: "두 개의 인자를 입력해주세요.",
  TYPE_ERROR: "숫자만 입력이 가능합니다.",
  NUMBER_SIZE_ERROR: "3자리수 이하만 입력 가능합니다.",
  DENOMINATOR_ERROR: "분모는 0일 수 없습니다.",
});
