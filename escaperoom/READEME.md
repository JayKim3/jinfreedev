### 방탈출 게임

-> 방탈출이라는 게임에 매력에 빠져 한 번 JS로 만들어 보고 싶어 기존에 유니티로 만들어져 있는 방탈출 게임을 자바스크립트를 사용하여 제작하게 된 게임

#### Esacape Room function

기존의 우리가 흔히 알고 있는 방탈출 게임과 동일하며 방을 탈출하기 위하여 여러 단서들을 모아서 추리하여 방을 빠져나오는 게임


1. 게임은 클로즈업되면서 시작되도록 구현

2. 여러 소품들이 존재하는데 소품을 클릭 시, 소품이 오른쪽 인벤토리에 담기며 해당 소품은 화면에서 사라지도록 구현

3. 오른쪽 인벤토리에서 소품을 클릭 시, 소품 이미지가 주변이 초록색으로 변하여 선택된걸 알아 볼 수 있도록 구현

4. 소품을 클릭 후, 알맞은 단서들에 접근하였을 때, 그에 맞게 화면이 변하도록 구현

5. 번호를 입력하는 소품은 해당 번호가 입력될수 있도록 구현

6. 여러가지의 소품들을 합치거나 분리해 새로운 소품을 획득 할 수도 있다.

### used method

1. 여러 방의 이미지를 겹쳐 놓은 다른 방으로 이동을 하려 할 때 해당 방에 대한 이미지만 Flag를 주어 방 -> 방으로 이동한 것 처럼 구현

2. 소품을 클릭하여 획득한 이미지같은 경우, 인라인 블록으로 이미지 위에 이미지를 겹쳐보이도록 변환을 주어서 구현

### I Know

1. offset 메서드는 이벤트가 걸려 있는 DOM객체를 기준으로 좌표를 출력

2. screen 메서드는 화면 출력 크기(자신의 모니터)가 기준인 절대 좌표

3. client 메서드는 브라우저가 기준인 좌표입니다. 현재 보이는 브라우저 화면 상에서 어느 지점에 위치하는 지를 의미하기 때문에 스크롤 해도 값은 변하지 않습니다.

4. page 메서드는 문서가 기준입니다. client와 비슷하지만 이 메서드는 문서 전체 크기가 기준이라 스크롤 시 값이 바뀝니다. (스크롤을 포함해서 측정합니다)

---

### 시작 화면

<img width="1231" alt="Screen Shot 2020-02-06 at 9 49 28 AM" src="https://user-images.githubusercontent.com/45479309/73897470-87ab5380-48c9-11ea-9ac0-9529cc498a98.png">

- 클래스로 요소들을 추가하고 제거함으로써 각 배경 이미지를 다루었으며 마우스로 클릭하였을 때 초기화면이 천천히 사라짐과 동시에 스테이지가 시작되도록 구현하였다.

- 시작과 동시에 시간타이머를 두어 돔 객체의 getElementById로 가져와 innerHTML을 계속해서 setTimeout 되도록 하였다.

---

### 진행 화면

<img width="1300" alt="Screen Shot 2020-02-06 at 10 09 32 AM" src="https://user-images.githubusercontent.com/45479309/73897517-ac9fc680-48c9-11ea-93db-5f67f73d801a.png">

- 오른쪽에는 총 4개의 인벤토리에 대한 offsetX,offsetY로 아이템들을 제어하였으며 2번 인벤토리를 클릭하였을 때, 해당 카드에 대한 내용을 볼 수 있도록 이미지를 바꾸었다. ( 마찬가지로 다른 인벤토리를 클릭하거나 해당 아이템으로 어떤 물건을 클릭할때도 똑같은 방식으로 구현하였다.)

---

<img width="1280" alt="Screen Shot 2020-02-06 at 10 09 54 AM" src="https://user-images.githubusercontent.com/45479309/73897521-af9ab700-48c9-11ea-892e-d68515255185.png">

---

- 금고에서 번호를 클릭하였을 때 그에 대한 이미지인데 가장 까다롭고 코드가 깔끔하지 못한다고 생각한다.. 우선 기능을 위주로 생각하여 구현을하였지만 1번부터 9번까지에 번호에 대한 클릭 이벤트를 if문으로 모두 분기처리하여 해당 금고의 번호가 바뀌도록 구현을 하였다.

- 금고 번호가 틀릴 시에는 다시 번호를 리셋시켰으며 맞추었을 때는 이미지가 바뀌도록 구현ㄴ

<img width="1265" alt="Screen Shot 2020-02-06 at 10 10 49 AM" src="https://user-images.githubusercontent.com/45479309/73897525-b1647a80-48c9-11ea-9cc9-7908185078fe.png">

- 방을 탈출하기 위한 마지막 열쇠를 얻은 장면으로, 해당 열쇠를 클릭 후 방문을 클릭 시 탈출되도록 함수를 구현하였다. 마찬가지로 offsetX와 offsetY로 간단하게 처리하였다.

- 탈출함과 동시에 시간은 멈추도록 clearInterval함수로 timer를 파라미터로 전달해주었다.

```javascript
function escape() {
  const escapeText = document.getElementById("complete");

  stage1bg.addEventListener("click", function(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    // offsetX : 245,300 offsetY : 250,340
    if (x >= 850 && x <= 985 && y >= 150 && y <= 445 && escapeFlag) {
      stage1bg.classList.remove("secondkey");
      stage1bg.classList.add("escape");
      escapeText.innerHTML = "Escape Success";
      clearInterval(timer);
      document.getElementById("times").innerHTML = "Clear";
    }
  });
}
```

### 종료 화면

<img width="1280" alt="Screen Shot 2020-02-06 at 9 51 09 AM" src="https://user-images.githubusercontent.com/45479309/73897490-998cf680-48c9-11ea-9820-a2b83a10fcd4.png">

- 게임이 종료되었을 때는 간단히 중앙에 텍스트가 띄워지도록 구현하였다.

---

### 개발 후기

코드를 구현하는데에는 많이 어렵지 않았다. offsetX와 offsetY의 좌표 값으로 거의 모든 기능들을 제어 하였다. 생각보다 예외 상황들이 있어 변수들을 많이 사용하였으며 가장 까다로웠던 점은 금고 번호를 선택하는 부분에서 if문으로 모두 분기처리 하다보니 코드도 길어져 더 깔금하게 코드를 작성할순 없을까 고민을 해보았다.
