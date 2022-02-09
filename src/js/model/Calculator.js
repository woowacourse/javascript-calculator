import { ERROR_MESSAGES } from "../constants.js";

export default class Calculator {
  constructor() {}

  // 2개의 숫자에 대해 덧셈이 가능하다.
  add(number1, number2) {
    if (!number1 || !number2) {
      throw new Error(ERROR_MESSAGES.NOT_ENOUGHT_PARAMETER);
    }

    if (typeof number1 !== "number" || typeof number2 !== "number") {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }

    return number1 + number2;
  }

  // 2개의 숫자에 대해 뺄셈이 가능하다.
  // 2개의 숫자에 대해 곱셈이 가능하다.
  // 2개의 숫자에 대해 나눗셈이 가능하다.
  // AC(All Clear)버튼을 누르면 0으로 초기화 한다.
  // 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
  // 숫자는 2개까지만 입력할 수 있다.
  // 계산 결과를 표현할 때 소수점 이하는 버림한다.
}
