export default class Validator {
  isValidExpression(digit, operation) {
    return digit === '' && operation !== '' ? alert('완성되지 않은 수식입니다.') : true;
  }
}
