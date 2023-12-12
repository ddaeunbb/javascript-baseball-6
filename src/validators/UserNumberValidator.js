import CustomError from '../exceptions/CustomError';
import { ERROR_MESSAGE } from '../constants/message';

class UserNumberValidator {
  /**
   * 입력값이 숫자가 아니면 Error 생성
   * @param {string} userNum
  */
  static isNumber(userNum) {
    if(Number.isNaN(userNum)) throw new CustomError(ERROR_MESSAGE.shouldNum);
  }

  /**
   * 입력값이 정수가 아니면 Error 생성
   * @param {string} userNum
  */
  static isInt(userNum) {
    const num = Number(userNum);
    if(!Number.isInteger(num)) throw new CustomError(ERROR_MESSAGE.shouldInt);
  }

  /**
   * 입력값이 양수가 아니면 Error 생성
   * @param {string} userNum
  */
  static isPositive(userNum) {
    const num = Number(userNum);
    if(num <= 0) throw new CustomError(ERROR_MESSAGE.shouldPositive);
  }

  static validateUserNumber(userNum) {
    this.isNumber(userNum);
    this.isInt(userNum);
    this.isPositive(userNum);
  }
}

export default UserNumberValidator;