### `마블 카드 짝 맞추기` 게임

#### 개발 동기

- 자바스크립트를 공부할겸 인프런에서 제로초님의 무료 강의 중 웹 게임을 만들며 배우는 JS 강의 에서 카드 짝맞추기 게임을 약간 응용하여 커스터마이징 하여 만든 게임이다.

#### `기능`

- 최대한 깔끔한 디자인으로 `반응형`까지 고려하여 제작해보았다.

- 게임 시작 버튼을 누를 시, 카드가 `랜덤으로 섞이며` 처음에 5초 가량 모든 카드를 보여준 후 다시 뒤집는ㄴ다.

- 카드의 짝이 맞을 경우 계속 마블 케릭터가 `보여진 상태로 두면` 짝이 안맞을 경우는 다시 해당 카드들을 뒤집도록 구현

- 모든 카드를 `뒤집어 맞추`었을때는 간단하게 알트창 띄우도록 구현

- 다시하기 버튼을 눌렀을 시, 해당 카드들이 `다시 랜덤`으로 섞이도록 구현함

### `초기화면`

<img width="728" alt="Screen Shot 2020-02-05 at 7 50 10 PM" src="https://user-images.githubusercontent.com/45479309/73849027-8992f980-486c-11ea-887c-ab06370aedb5.png">

- 간단하게 div태그에 absolute 속성을 주어 바깥 테두리와 안의 텍스트 내용들을 전반적으로 가운데로 위치시켜 스타일을 주었다.

- 해당 Start! 버튼을 누르면 해당 화면을 display:none 스타일로 바꾸었으며 카드를 무작위로 섞는 shuffle함수와 카드를 6\*4 행렬로 카드를 생성하고 데이터를 넣어주었다.

### `작동 화면`

<img width="691" alt="Screen Shot 2020-02-05 at 7 50 36 PM" src="https://user-images.githubusercontent.com/45479309/73849249-f3130800-486c-11ea-9eff-fe2194af2acf.png">

---

<img width="718" alt="Screen Shot 2020-02-05 at 7 50 27 PM" src="https://user-images.githubusercontent.com/45479309/73849184-d8409380-486c-11ea-9ab4-adb6e1038528.png">

- 처음에 initial함수가 작동하여 해당 함수 내에서는 querySelectorAll로 card라는 클래스를 모두 찾아 forEach문으로 해당 카드 요소들을 순회하여 카드를 순서대로 카드 내의 해당 케릭터들을 보여주도록 하였으며 모든 카드가 뒤집었을 때 다시 안보이도록 setTimeout 비동기함수로 구현

---

<img width="708" alt="Screen Shot 2020-02-05 at 7 51 49 PM" src="https://user-images.githubusercontent.com/45479309/73849120-afb89980-486c-11ea-83fc-10323261c549.png">

- 카드를 2개 클릭하였을 때 flipped 클래스를 통하여 카드를 뒤집었는지 구현하였으며 클릭한 카드 개수가 2개일 경우만 작동하도록 if문으로 분기처리

- 미리 선언한 completecards 배열에 내가 선택한 2개의 카드가 일치시에 push로 밀어넣으며 일치하지 않으면 다시 내가 선택한 카드들을 안보이도록 하였다.

- 해당 코드는 extendCard함수 내에서 작성하였으며 각각의 카드들이 선택했을때 작동하도록 하기 위하여 익명함수로 호출하는형식으로 작성함

---

### `완료 화면`

<img width="658" alt="Screen Shot 2020-02-05 at 7 52 04 PM" src="https://user-images.githubusercontent.com/45479309/73849283-058d4180-486d-11ea-8b9e-9dead8ba0d71.png">

- 모든 카드들이 다 뒤집혔을때 completecards의 길이와 처음에 가로,세로 길이를 곱한 값이 동일할 때 완료되도록 if문으로 처리 후, 게임이 다시시작되도록 함수를 호출하였다.
