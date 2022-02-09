import { $ } from "./dom.js"

export const handleClick = (e, _callback) => {
    const state = {
        className: e.target.className
    }
    const _className = e.target.className
    let operation = undefined
    
    if(_className === 'digit') {
        console.log(e.target.innerHTML, '숫자')
        state.num =  e.target.innerHTML
        console.log('******state', state)
        _callback(state)
        // _callback(e.target.innerHTML)
    }

    if(_className === 'operation') {
        console.log(e.target.innerHTML, '기호')
        if ($("#total").innerHTML !== '0') {
            state.operation =  e.target.innerHTML
            console.log('******state', state)
            operation = e.target.innerHTML

            //_callback(state)
            renderOperation(operation);
        }
    }
}


const clearResult = () => {
    console.log('clear')
    $("#total").innerHTML = '0';
}

const renderOperation = (operation) => {
    $("#total").innerHTML += operation;
}

const isCorrectDigitCount = () =>{
// const isCorrectDigitCount = (plusNumber) =>{
    // const isCorrectDigitCount = (currentNumber, plusNumber) =>{
    const [num1, operation, num2] = $("#total").innerHTML.split(' ');
    console.log($("#total").innerHTML.split(' '),'*split*')
    console.log(num1, operation, num2)


    if(num1 && num1.length > 3){
        console.log('num1.length', num1.length)
        return False;
    }

    if(num2 && num2.length > 3){
        console.log('num1.length', num1.length)
        return False;
    }

    
    return true

}

// const isDigitsCount = (num) => {
//     return num.length < 4
// }


export const handleClickDigits = (e) => {
    let index = 0
    if(this.$state.currentOperation){
        index = 1
    }
    if(numbers[index].length >= 3){
        return
    }
    if($("#total").innerHTML === '0'){
        $("#total").innerHTML = e.target.innerHTML
    }
    $("#total").innerHTML += e.target.innerHTML

}

export const handleClickOperations = (e) => {
  if(e.target.innerHTML === '='){
        console.log($("#total").innerHTML, $("#total").innerHTML.split(' '));
        const [num1, operation, num2] = $("#total").innerHTML.split(' ');
        console.log(num1,operation, num2)
        
        // add()
        // minus()
        // 곱셈
        // 나누기
        // isCorrectDigitCount()
        return 
    }
    if ($("#total").innerHTML === '0'){
        return
    }
    $("#total").innerHTML += e.target.innerHTML;
    return e.target.innerHTML;
}

export const handleClickModifier = (e) => {
    clearResult();
}

