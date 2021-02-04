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

- [x] 2개의 숫자에 대해 덧셈이 가능하다.
- [x] 2개의 숫자에 대해 뺄셈이 가능하다.
- [x] 2개의 숫자에 대해 곱셈이 가능하다.
- [x] 2개의 숫자에 대해 나눗셈이 가능하다.
- [x] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [x] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [x] 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br/>

## 📝 구현 기능 목록

- [x] 숫자버튼을 클릭했을 때 해당 숫자를 디스플레이에 표시한다.

  > - [x] 1을 클릭하면 1이 디스플레이에 표시되는지 테스트 한다.

- [x] 숫자버튼 입력 후 연산자를 클릭했을 때 해당 연산자를 디스플레이에 표시한다.

  > - [x] 1을 클릭하고 '/'을 클릭했을 때 디스플레이에 '1/'이 표시되는지 테스트 한다.

- [x] 네자리 이상의 숫자 입력을 시도했을 경우 경고메세지를 띄운다.

  > - [x] '1111'을 순서대로 클릭했을 때 alert('숫자는 세 자리까지만 입력 가능합니다!')가 뜨는지 테스트 한다.
  > - [x] (이어서)'/1111'을 순서대로 클릭했을 때 alert('숫자는 세 자리까지만 입력 가능합니다!')가 뜨는지 테스트 한다.

- [x] 숫자를 입력받지 않았을 때 연산자를 클릭하면 경고메세지를 띄운다.

  > - [x] 초기화면에서 '/'을 클릭했을 때 alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')가 뜨는지 테스트한다.
  > - [x] '1//'를 순서대로 클릭했을 때 alert('숫자를 먼저 입력한 후 연산자를 입력해주세요!')가 뜨는지 테스트한다.

- [x] '=' 버튼을 클릭 시 연산 결과를 디스플레이에 표시한다.

  > - [x] '999 + 999 ='를 순서대로 입력했을 때 디스플레이에 '1998'이 표시되는지 테스트 한다.
  > - [x] '999 - 1 ='를 순서대로 입력했을 때 디스플레이에 '998'이 표시되는지 테스트 한다.
  > - [x] '999 X 999 ='를 순서대로 입력했을 때 디스플레이에 '998001'이 표시되는지 테스트 한다.
  > - [x] '999 / 9 ='를 순서대로 입력했을 때 디스플레이에 '111'이 표시되는지 테스트 한다.

- [x] 연산시 소수점 이하의 결과는 버린다.

  > - [x] '999 / 5 ='를 순서대로 입력했을 때 디스플레이에 '1998'이 표시되는지 테스트 한다.

- [x] AC 버튼을 눌렀을 때 디스플레이를 '0'으로 초기화한다.

  > - [x] '999 / 5'를 순서대로 입력 후 'AC' 버튼을 클릭했을 때 디스플레이의 값이 '0'으로 초기화 되는지 테스트 한다.
