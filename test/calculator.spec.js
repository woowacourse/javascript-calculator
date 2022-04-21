/// <reference types="Cypress" />

describe("cypress로 구현 결과와 요구사항이 일치한지 체크한다", () => {
    const baseUrl = `../index.html`;

    it("숫자를 클릭하면, 현재 값에 보여진다.", () => {
        // given
        cy.visit(baseUrl);

        // when
        // selector가 동일한 다수의 dom에서 특정 dom 선택하는 방법? value로 체크해야함 -> contains(selector, value) 이용
        cy.contains("button", "9").click();

        // then
        cy.get("#total").should("have.text", "9");
    });

    it("숫자는 한번에 3자리 수 이상으로 입력할 경우, alert 메시지가 뜬다.", () => {
        // given
        const alertStub = cy.stub();
        cy.on("window:alert", alertStub);

        // when
        cy.contains("button", "5").click();
        cy.contains("button", "1").click();
        cy.contains("button", "2")
            .click()
            .then(() => {
                expect(alertStub).to.be.called;
            });
    });

    it("AC(All clear)버튼을 누르면 0으로 현재 값을 0으로 초기화한다.", () => {
        // when
        cy.get(".modifier").click();

        // then
        cy.get("#total").should("have.text", "0");
    });

    it("연산자는 숫자 사이에만 위치할 수 있다. 그렇지 않을 경우 alert가 뜬다.", () => {
        // given
        const stub = cy.stub();
        cy.on("window:alert", stub);
        //   msg => {
        //     expect(msg).to.contains(`계산할 숫자를 먼저 눌러주세요`);
        // }

        // when
        cy.contains("button", "/")
            .click()
            .then(() => {
                expect(stub).to.be.called;
            });
    });

    it("2개의 숫자에 대해 계산 결과가 정확해야한다.", () => {
        // 덧셈
        // when
        cy.contains("button", "5").click();
        cy.contains("button", "+").click();
        cy.contains("button", "3").click();
        cy.contains("button", "=").click();
        // then
        cy.get("#total").should("have.text", "8");

        // 뺄셈
        // given
        cy.get(".modifier").click();
        // when
        cy.contains("button", "1").click();
        cy.contains("button", "-").click();
        cy.contains("button", "5").click();
        cy.contains("button", "=").click();
        // then
        cy.get("#total").should("have.text", "-4");

        // 곱셈
        // given
        cy.get(".modifier").click();
        // when
        cy.contains("button", "8").click();
        cy.contains("button", "X").click();
        cy.contains("button", "9").click();
        cy.contains("button", "=").click();
        // then
        cy.get("#total").should("have.text", "72");

        // 나눗셈
        // given
        cy.get(".modifier").click();
        // when
        cy.contains("button", "8").click();
        cy.contains("button", "/").click();
        cy.contains("button", "4").click();
        cy.contains("button", "=").click();
        // then
        cy.get("#total").should("have.text", "2");
    });

    it("계산 결과에 소수점이 있다면, 버림해서 보여줘야한다.", () => {
        // given
        cy.get(".modifier").click();
        // when
        cy.contains("button", "9").click();
        cy.contains("button", "/").click();
        cy.contains("button", "2").click();
        cy.contains("button", "=").click();
        // then
        cy.get("#total").should("have.text", "4");
    });
});
