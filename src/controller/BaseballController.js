import DrawingMachine from '../domain/DrawingMachine';

class BaseballController {
  #drawingMachine
  
  async startGame() {
    this.#drawingMachine = new DrawingMachine();
  }
}

export default BaseballController;