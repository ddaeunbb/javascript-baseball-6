import DrawingMachine from '../domain/DrawingMachine';
import OutputView from '../view/OutputView';
import InputView from '../view/InputView';
import UserNumberValidator from '../validators/UserNumberValidator';

class BaseballController {
  #drawingMachine
  
  async startGame() {
    this.#drawingMachine = new DrawingMachine();
    OutputView.noticeStart();
    const userNumber = await InputView.readUserNumber();
    UserNumberValidator.validateUserNumber(userNumber);
  }
}

export default BaseballController;