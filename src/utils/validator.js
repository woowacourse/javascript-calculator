import { USER_INPUT_ALERT, MAX_INPUT_LENGTH } from './constant.js';

export const isUnderThreeDigits = (number) => {
  if (number.length === MAX_INPUT_LENGTH) {
    alert(USER_INPUT_ALERT.over4DigitsError);
    return false;
  }
  return true;
};
