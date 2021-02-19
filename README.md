<p align="middle" >
  <img width="100px;" src="https://github.com/woowacourse/javascript-calculator/blob/main/src/images/calculator.png?raw=true"/>
</p>
<h2 align="middle">level1 - 자바스크립트 계산기</h2>
<p align="middle">자바스크립트 계산기로 익혀보는 프론트엔드 테스트</p>
<p align="middle">
<img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
<img src="https://img.shields.io/badge/language-html-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank">
  <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="300" src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/805329299a1a43c4850c410a545caf24">
</p>

## 테스트 목록

- 결과창(#total)의 기본 값이 "0"이어야 한다.
- 결과창(#total)이 "0"일 때 숫자(.digit)을 클릭하면 그 숫자가 결과값이 되야 한다.
- 결과창(#total)이 "0"일 때 숫자(.digit) "0"을 클릭하면 결과창(#total)에 "0"이 출력되어야 한다.
- 숫자(.digit)를 연속해서 클릭할 때 그 숫자가 누적되어서 결과창(#total)에 출력되어야 한다.
- 숫자(.digit)를 연속해서 클릭할 때 결과창에 값이 3자리수 이하여야 하고, 더 추가하려고 하면 기존 출력을 유지하고 수정되지 않도록 한다.
- '='를 제외한 연산자(.operation)을 눌렀을 때 결과창이 변하지 않아야 한다.
- 결과창에 0이 있는 상태에서 연산자(.operation)를 클릭하면, 0에 연산을 수행한 결과가 결과창(#total)에 나와야 한다.
- 숫자를 클릭하고, 연산자를 클릭하고, 숫자를 클릭하고, =을 클릭하면 결과창에 연산 결과가 출력되어야 한다.
- 연산자를 두번 이상 클릭할 경우, 마지막으로 클릭한 연산자로 연산이 수행되어야 한다.
- 올클리어(.modifier)를 누르면 결과창(#total)의 값이 "0"이 된다.
- 올클리어(.modifier)를 누르면 초기 상태로 돌아가고, 다음 연산을 수행할 수 있다.
- '='를 제외한 연산자(.operation)를 누르자 마자 '='를 누르면 op1, op2가 결과창의 값이 되고, 연산자는 직전에 눌렀던 연산자가 되어 연산한다.
- '='을 연속해서 누르면, 결과창(#total)에 있는 값을 op1, 최초로 '='을 눌렀을 때의 op2를 op2로 써서 연산한다.
- 등호를 눌러 나온 결과값을 이용해 연산을 해야 한다.
- 계산 결과를 표현할 때 소수점 이하는 버림한다.
- 0으로 나누려고 하면 alert로 경고 메시지를 출력하고, 결과창에는 '오류'를 출력한다.
- '오류'가 출력된 상태에서 숫자, 올클리어 이외의 버튼을 클릭하면 내부적으로 아무런 동작이 되지 않도록 한다.
- '오류'가 출력된 상태에서 숫자를 클릭하면 결과창에 그 숫자가 출력되고, 그 숫자로 연산이 가능하다.
- '오류'가 출력된 상태에서 올클리어(.modifier)를 누르면 초기 상태로 돌아가고, 다음 연산을 수행할 수 있다.
- '='을 누른 후에 숫자를 누르면 기존의 연산 결과에 누적되지 않고 새로운 숫자로 입력된다.

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br/>

## 📊 테스트 요구사항

**기능 요구사항에 제시된 7개의 항목에 대해 테스트 케이스를 만든다.**

<br/>

## 📄 참고 사항

- 숫자 입력은 **클릭**으로만 가능하다.

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br/>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-calculator/issues) 에 등록 후 @eastjun에게 dm을 보내주세요.

<br/>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-calculator/blob/master/LICENSE) licensed.