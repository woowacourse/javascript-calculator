const CLASS= { 
    MODIFIER :'modifier',
    DIGIT: 'digit',
    OPERATION: 'operation'
}

const SELECTOR = {
    CALCULATOR: '.calculator',
    TOTAL:'#total'
}

const ERROR = {
    DIGIT_LENGTH: '🚫3자리 숫자까지만 입력 가능합니다.',
    START_ZERO: '🚫0으로 시작되는 숫자는 불가능합니다',
    WRONG_EXPRESSION: '🚫올바르지 않은 식입니다.'
}

export {CLASS, SELECTOR, ERROR}