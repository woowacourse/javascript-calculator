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

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br/>

## 📝 구현 기능 목록

- [ ] 각 숫자버튼 및 연산자를 클릭했을 때 해당 숫자 혹은 연산자를 결과디스플레이에 표시한다.
- [ ] 마지막으로 입력한 내용이 숫자가 아닐 때 연산자를 클릭하면 경고메세지를 표시한다.
- [ ] 숫자는 최대 3자리까지만 입력 가능하다.
- [ ] AC 버튼을 눌렀을 때 결과디스플레이를 0으로 초기화한다.
- [ ] '=' 버튼을 클릭 시 연산 결과를 결과디스플레이에 표시한다.
- [ ] 소수점 이하의 결과는 버린다.

## 📝 테스트 코드 목록

- 숫자와 연산자의 입력이 결과디스플레이에 표시되는지 테스트한다.
  - [x] 숫자버튼을 눌렀을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.
  - [x] 숫자버튼 입력 후 연산자를 클릭했을 경우 결과디스플레이에 제대로 표시되는지 테스트 한다.
  - [x] 네자리 이상의 숫자가 입력됐을 경우 경고메세지가 뜬다.
  - [x] 현재 display의 마지막 텍스트가 숫자가 아닌 상태에서 연산자가 입력됐을 경우 경고메세지가 뜬다.
- 세자리 숫자의 연산 결과과 정확하게 결과디스플레이에 표시되는지 테스트한다.
  - [x] 덧셈 연산 - 999 + 999 의 결과값이 1998와 같다.
  - [x] 뺄셈 연산 - 999 - 1 의 결과값이 998과 같다.
  - [x] 곱셈 연산 - -999 x (999) 의 결과값이 -998001와 같다.
  - [x] 나눗셈 연산 - 999 / 9 의 결과값이 111과 같다.
  - [x] 나눗셈 연산 - 999 / 5 의 결과값이 199와 같다.
- [x] AC 버튼 클릭 시 결과디스플레이의 값이 0이다.
