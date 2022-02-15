it("2개의 숫자에 대해 덧셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 2 + 9 = 11
  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // + 버튼을 누른다.
  cy.get(".operation").contains("+").click();

  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 11이 나오는지 확인한다.
  cy.get("#total").should("have.text", "11");
});

it("2개의 숫자에 대해 뺄셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 9 - 2 = 7
  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // - 버튼을 누른다.
  cy.get(".operation").contains("-").click();

  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 7이 나오는지 확인한다.
  cy.get("#total").should("have.text", "7"); // total이 특정 text를 가지고 있어야 한다
});

it("2개의 숫자에 대해 곱셈이 가능하다", () => {
  cy.visit("index.html"); // 문서를 방문

  // 2 * 9 = 18
  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // * 버튼을 누른다.
  cy.get(".operation").contains("X").click();

  // 9 버튼을 누른다.
  cy.get(".digit").contains(9).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 18이 나오는지 확인한다.
  cy.get("#total").should("have.text", "18");
});

it("2개의 숫자에 대해 나눗셈이 가능하다", () => {
  cy.visit("index.html");

  // 8 / 2 = 4
  // 8 버튼을 누른다.
  cy.get(".digit").contains(8).click();

  // + 버튼을 누른다.
  cy.get(".operation").contains("/").click();

  // 2 버튼을 누른다.
  cy.get(".digit").contains(2).click();

  // = 버튼을 누른다.
  cy.get(".operation").contains("=").click();

  // 4가 나오는지 확인한다.
  cy.get("#total").should("have.text", "4");
});

it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
  cy.visit("index.html");

  // AC를 클릭한다.
  cy.get(".modifier").click();

  // 0이 나오는지 확인한다.
  cy.get("#total").should("have.text", "0");
});

it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
  cy.visit("index.html");

  const target = cy.get(".digit").contains(8);
  const alertStub = cy.stub();

  cy.on("window:alert", alertStub);

  target.click();
  target.click();
  target.click();

  target.click().then(() => {
    expect(alertStub).to.be.called;
  });
});

it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
  cy.visit("index.html");

  cy.get(".digit").contains(8).click();

  cy.get(".operation").contains("/").click();

  cy.get(".digit").contains(3).click();

  cy.get(".operation").contains("=").click();

  cy.get("#total").should("have.text", "2");
});
