// - 2개의 숫자에 대해 덧셈이 가능하다.
// - 2개의 숫자에 대해 뺄셈이 가능하다.
// - 2개의 숫자에 대해 곱셈이 가능하다.
// - 2개의 숫자에 대해 나눗셈이 가능하다.
// - AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// - 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// - 계산 결과를 표현할 때 소수점 이하

const digitClick = (number) => {
    const stringNumber = String(number).split("")
    stringNumber.forEach((digit) => {
        cy.get(".digit").contains(digit).click()
    });  
}

const operationClick = (operation) => {
    cy.get(".operation").contains(operation).click()
}

const acClick = () => {
    cy.get(".modifier").click();
}

const checkTotal = (result) => {
    cy.get("#total").should("have.text", result)
}

const checkAlertMessage = (message) => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(message)
    })
}

const calculate = (left,right,operator,total) => {
    digitClick(left);
    operationClick(operator);
    digitClick(right);
    operationClick("=");
    checkTotal(total);
}

before(() => {
    cy.visit('index.html');
})

describe("계산기 기능을 한다.", () => {

    beforeEach(() => {
        acClick();
    })

    it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
        // 올바른 답
        calculate(2, 3, "+", "5");
    });
    
    
    it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
        // 올바른 답
        calculate(5, 3, "-", "2");
    });
    
    it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
        // 올바른 답
        calculate(5, 3, "X", "15");
    
    });
    
    it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
        // 올바른 답
        calculate(10, 3, "/", "3");
    
    });    
})


describe("예외사항을 처리한다.", ()=> {
    beforeEach(() => {
        acClick();
    }) 

    it('3자리를 초과할 시 에러를 띄운다.', () => {
        digitClick(3333);
        checkAlertMessage('3자리 숫자까지만 입력 가능합니다.');
    });    
    
    it('0으로 숫자가 시작될 시 에러를 띄운다.', () => {
        digitClick(0);
        checkAlertMessage('0으로 시작되는 숫자는 불가능합니다');
    }); 
    
    it('올바른 형식의 식이 아닐 경우 에러를 띄운다', () => {
        operationClick("+")
        checkAlertMessage('올바르지 않은 식입니다.');
        acClick();
        digitClick(8);
        operationClick("+");
        operationClick("+");
        checkAlertMessage('올바르지 않은 식입니다.');
        acClick();
        digitClick(8);
        operationClick("=");
        checkAlertMessage('올바르지 않은 식입니다.');
    });   
})