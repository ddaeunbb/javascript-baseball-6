import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message'

const OutputView = Object.freeze({
  noticeStart() {
    Console.print(OUTPUT_MESSAGE.gameStart);
  }
});

export default OutputView;