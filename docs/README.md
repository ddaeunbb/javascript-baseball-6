## 기능목록리스트

### 📌 Role
- DrawingMachine
  - 난수 생성
  - 난수 output
- NumberChecker
  - 게임 결과 확인
- View (OutputView, InputView)
  - 입출력
- Controller
  - 컨트롤러
- Validator
  - 입력값 확인 (예외처리)
<br/>

### 📌 기능 리스트
- [x] 게임을 시작하면 난수를 생성한다. (DrawingMachine)
- [ ] `숫자 야구 게임을 시작합니다. 숫자를 입력해주세요 : `을 출력하고 사용자로부터 입력을 받는다.(InputView)
- [ ] 입력에 대한 Validation을 확인한다. (Validator)
- [ ] 입력값이 잘못되었다면 에러를 발생한다.
- [ ] 매 입력마다 값에 대한 게임 결과를 확인한다.(NumberChecker)
- [ ] 정답을 맞추게되면 `3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`을 출력한다. InputView
- [ ] 입력에 대한 Validation을 진행한다.
- [ ] 입력값이 잘못되었다면 에러를 발생한다.
- [ ] 1을 입력하면 다시 난수생성하면서 맨 첫번째로 돌아가고, 2를 입력하는 경우 게임을 종료한다.