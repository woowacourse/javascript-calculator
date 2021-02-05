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

## 세부 테스트 케이스

- [x] 1. 숫자를 눌렀을 때 화면에 표시되는지 확인한다. ( 0 ~ 9 : 0 ~ 9 )
- [x] 2. 숫자를 여러번 눌렀을 때 최대 3개의 수까지 누적되는지 확인한다. / 이후 입력은 막는다.
  - (예외) 입력할 수 있는 최솟값 -999
  - 입력할 수 있는 최댓값 999
<<<<<<< HEAD
- [ ] 3. AC 를 누르면 0으로 초기화 된다.
=======
- [x] 3. AC 를 누르면 0으로 초기화 된다.
>>>>>>> 08c4ae543750741edc8dc4b08ba1a365a9f1d75c
- [ ] 4. 사칙연산을 누르면 해당 버튼의 색이 변한다.
  - 사칙연산자는 마지막에 눌린 것을 기준으로 이용한다.
- [ ] 5. 두 수의 덧셈이 가능하다 ( 3 + 5 = 8 )
- [ ] 6. '=' 을 누르면 결과가 화면에 표시된다.
  - 완성되지 않은 수식은 alert로 경고하기 ('완성되지 않은 수식입니다.')
  - 사칙연산을 선택하지 않으면 처음에 입력한 숫자를 표시한다.
  - 완성된 수식은 결과를 표시한다.
- [ ] 7. 두 수의 곱셈이 가능하다. ( 10 \* 11 = 110 )
- [ ] 8. 두 수의 나눗셈이 가능하다. 소수점은 버린다. ( 400 / 2 = 200, 501 / 2 = 250 )
- [ ] 9. 두 수의 뺄셈이 가능하다. ( 5 - 100 = -95 )
- [ ] 10. 두 수의 나눗셈에서 0으로 나눌 경우 결과에 '오류'를 출력한다. ( 333 / 0 = '오류')

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
