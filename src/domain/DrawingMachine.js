import { Random } from '@woowacourse/mission-utils';

/**
 * @classdesc DrawingMachine
 * 난수를 만들고, 난수를 알려준다.
*/
class DrawingMachine {
  #number;
  
  constructor() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    let numStr = '';
    while(numStr.length < 3){
      const num = Random.pickNumberInRange(1, 9);
      if(!numStr.includes(num)) numStr += num;
    }
    this.#number = Number(numStr);
  }

  getRandomNumber() {
    return this.#number;
  }
}

export default DrawingMachine;