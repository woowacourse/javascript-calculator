describe('계산 기능', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/#');
  });

  it('초기화면이 렌더링 되면 결과화면에 0이 표시된다.', () => {
    cy.get(`#total`).should('have.text', '0');
  });

  it('계산기 숫자나 연산자 버튼을 누르면 결과화면에 표시된다.', () => {
    cy.get('.digit').contains('1').click();
    cy.get(`#total`).should('have.text', '01');
  });

  it('맨 앞자리수가 0일 때 0을 누르면 변화가 없다.', () => {});

  it('숫자는 한번에 최대 3자리 수까지 입력 가능하다.', () => {
    for (let i = 0; i < 10; i++) {
      cy.get(`.digit[data-key="${i}"]`).click();
    }
    cy.get('#total').then(element => {
      const length = element[0].innerText.length;
      expect(length).to.equal(3);
    });
  });

  it('2개의 숫자에 대해 덧셈이 가능하다', () => {});
});
