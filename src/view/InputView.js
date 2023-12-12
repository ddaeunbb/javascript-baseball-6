import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = Object.freeze({
  async readUserNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.getNumber);
    return input;
  }
});

export default InputView;