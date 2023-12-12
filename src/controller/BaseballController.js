import { Console } from '@woowacourse/mission-utils';
import DrawingMachine from '../domain/DrawingMachine';
import OutputView from '../view/OutputView';
import InputView from '../view/InputView';

class BaseballController {
  #drawingMachine
  
  async startGame() {
    this.#drawingMachine = new DrawingMachine();
    OutputView.noticeStart();
    const userNumber = await InputView.readUserNumber();
    Console.print(userNumber);
  }
}

export default BaseballController;