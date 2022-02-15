
it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    cy.visit("index.html");

    cy.get(".digit").contains(9).click();
    cy.get('.operation').contains('+').click();
    cy.get(".digit").contains(3).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text','12');
});

it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    cy.visit("index.html");

    cy.get(".digit").contains(9).click();
    cy.get('.operation').contains('-').click();
    cy.get(".digit").contains(3).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text','6');
});

it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    cy.visit("index.html");

    cy.get(".digit").contains(9).click();
    cy.get('.operation').contains('X').click();
    cy.get(".digit").contains(3).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text','27');
});

it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    cy.visit("index.html");

    cy.get(".digit").contains(9).click();
    cy.get('.operation').contains('/').click();
    cy.get(".digit").contains(3).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text','3');
});

it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
    cy.visit("index.html");

    cy.get(".modifier").click();
    cy.get('#total').should('have.text','0');
});

it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
    cy.visit("index.html");
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click();
    cy.get(".digit").contains(9).click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
});

it("숫자는 2개까지만 입력할 수 있다.", () => {
    cy.visit("index.html");
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    cy.get(".digit").contains(9).click();
    cy.get('.operation').contains('X').click();
    cy.get(".digit").contains(3).click();
    cy.get(".operation").contains("+").click()
        .then(() => {
            expect(alertStub).to.be.called;
        })
})

it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    cy.visit("index.html");

    cy.get(".digit").contains(8).click();
    cy.get('.operation').contains('/').click();
    cy.get(".digit").contains(3).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').should('have.text','2');
})
