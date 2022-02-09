//- [x] 2개의 숫자에 대해 덧셈이 가능하다.

it('덧셈에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(2).click();
	cy.get('.operation').contains('+').click();
	cy.get('.digit').contains(5).click();
	cy.get('.operation').contains('=').click();
	
	cy.get('#total').should('have.text', '7');
});

//- [x] 2개의 숫자에 대해 뺄셈이 가능하다.
it('뺄셈에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(8).click();
	cy.get('.operation').contains('-').click();
	cy.get('.digit').contains(9).click();
	cy.get('.operation').contains('=').click();
	
	cy.get('#total').should('have.text', '-1');
});

//- [x] 2개의 숫자에 대해 곱셈이 가능하다.
it('곱셈에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(6).click();
	cy.get('.operation').contains('X').click();
	cy.get('.digit').contains(9).click();
	cy.get('.operation').contains('=').click();
	
	cy.get('#total').should('have.text', '54');
});

//- [x] 2개의 숫자에 대해 나눗셈이 가능하다.
it('나눗셈에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(7).click();
	cy.get('.operation').contains('/').click();
	cy.get('.digit').contains(3).click();
	cy.get('.operation').contains('=').click();
	
	cy.get('#total').should('have.text', '2');
});

//- [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
it('AC에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(7).click();
	cy.get('.operation').contains('/').click();
	cy.get('.digit').contains(3).click();
	cy.get('.modifier').click();
	
	cy.get('#total').should('have.text', '0');
});