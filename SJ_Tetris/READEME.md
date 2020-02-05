#### HTML / CSS / JAVASCRIPT 를 이용하여 만든 테트리스 게임

### Tetris - 2차원 배열을 주로 사용하여 구현

-> 자바스크립트를 주로 사용하여 자바스크립트 ES5 문법에 관하여 더 깊게 이해하기 구현할 예정이며 먼저 개인적으로 테트리스 알고리즘을 생각하고 구현하며 막히는 부분이 생겨 개발진도가 늦어지면 오픈소스들을 참고하여 코드를 참고할 예정이며, 개발 기간은 우선 1~2주로 잡고 하루하루 마다 작업한 부분을 간단하게 TIL에 적을 생각이다.

#### Tetris Rules

1. O, I, T, S, X, J, L의 7개 도형을 특정 버튼이나 키보드를 이용하여 오른쪽으로 90도씩 회전시키고 한 라인을 모두 채우면 사라지도록 구현

2. 각 7 개의 도형에 대한 정보를 배열에 넣고 회전 명령에 따라 그때 그때 90 도씩 계산하여 회전

3. 한 줄이 채워지면 그 줄을 삭제하고 맨 위에 줄 을 추가하는 방식으로 구현 ( + 줄이 채워 질때마다 점수가 올라가도록 구현)

4. 왼쪽 빈 공간에 다음에 나올 도형, 사라진 Lines수, 현재 존재하는 Blocks수, 실시간 시간을 볼 수 있도록 구현

#### 필요 함수 및 변수 정리

<ul>
<li>Init() - Table Create , nextTable Create</li>
<li>createBlock() - Block Create</li>
<li>Draw() - Draw on Screen </li>
<li>createNextBlock() - Next Block Create</li>
<li>drawNext() - Draw Next Block on Screen</li>
<li>move() - Down one at a time</li>
<li>Checkrows() - Check if the line is full</li>
<li>Variable : TetrisData,currentBlock,nextBlock,CurrentTopLeft,Colors,Blocks(name,numCode,color,currentShapeIndex,shape),isActiveBlock,isInvalidBlock</li>
</ul>

1. 자바스크립트 공부를 위한 개인 프로젝트라 CSS는 최대한 간단하게 직접 만들어 구현 (이미지는 따로 핀터레스트 사이트에서 가져옴)

2. index.html 에서 GameStart 버튼을 클릭 시, Init()함수 내부에 테트리스 게임의 행(20)과 줄(10)을 생성하는 코드 구현

3. createBlock,createnextBlock 블록생성 함수 내부에 랜덤으로 블록 생성

4. draw,drawNext 함수에서 블록 생성시 저장한 데이터를 화면에 랜더링해주기 위하여 데이터 삽입

5. setInterval 함수로 1초에 한칸씩 내려오는 move 함수 구현
