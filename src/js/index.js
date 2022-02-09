class Calculator { 

    validateNumber(number){
        return typeof number === 'number'
    }

    isValidateInput(left, right) {
        return this.validateNumber(left) && this.validateNumber(right)
    }

    add(left, right) {
        if (this.isValidateInput(left, right)) return left + right;
    }

    sub(left, right) {
        if (this.isValidateInput(left, right)) return left - right;
    }

    mul(left, right) {
        if (this.isValidateInput(left, right)) return left * right;
    }

    div(left, right) {
        if (this.isValidateInput(left, right)) return Math.floor(left / right);
    }
}