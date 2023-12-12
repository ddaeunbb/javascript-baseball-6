import { Console } from '@woowacourse/mission-utils';
import BaseballController from './controller/BaseballController';

class App {
  /*
   * 1. 난수를 생성하고, 사용자에게 입력값을 받는다.
   * 2. 입력값에 따른 게임 결과를 나타낸다.
   * 3. 정답을 맞추면 게임을 다시 시작하거나, 종료한다.
  */
  #controller = new BaseballController();
  async play() {
    try {
      this.#controller.startGame();
    } catch (err) {
      Console.print(err.message);
    }
  }
}

export default App;
