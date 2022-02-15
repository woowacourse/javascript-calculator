const NUMBERS_LIMIT = 2;
export const DIGITS_LIMIT = 3;
export const VALID_INPUT_NUMBERS_LENGTH = NUMBERS_LIMIT-1
export const INIT_NUMBER = "0";
export const OPERATORS_REGEX = "[-X/+]";

export const OPERATORS = Object.freeze({
    PLUS:'+',
    MINUS: "-",
    MULTIPLY: "X",
    DIVISION: "/",
    EQUAL:'=',
})

export const alertMessage = Object.freeze({
    OVER_THREE_DIGIT: `${DIGITS_LIMIT}자리 수가 넘었습니다`,
    OVER_TWO_NUMBER: `${NUMBERS_LIMIT}개의 수만 계산 가능합니다.`,
    DUPLICATED_OPERATOR: '중복된 연산자 입력입니다.',
    WRONG_EQUAL_INPUT: '잘못된 = 연산자 입력입니다.'
})

export const CLASSES = Object.freeze({
    DIGITS: ".digits",
    OPERATIONS: ".operations",
    MODIFIER: ".modifier"
})

export const ID = Object.freeze({
    TOTAL: "#total"
})