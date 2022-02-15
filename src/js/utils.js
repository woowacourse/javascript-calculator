const validateNumber = (number) => {
    return typeof number === 'number'
}

const isValidateInput = (left, right) => {
    return validateNumber(left) && validateNumber(right)
}

const validateNumberLength = (number) => {
    return number.length < 3
}

const isStartZero = (number, newNumber) => {
    return number.length === 0 && newNumber === '0'
}

const calculate = {
    '+': (left,right)=>{if (isValidateInput(left, right)) return left + right;},
    '-': (left,right)=>{if (isValidateInput(left, right)) return left - right;},
    'X': (left,right) => {if (isValidateInput(left, right)) return left * right;},
    '/' : (left,right) => {if (isValidateInput(left, right)) return Math.floor(left / right);}
}

export { validateNumberLength, isStartZero, calculate}