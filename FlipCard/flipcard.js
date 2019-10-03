var hor_value = 6;
var ver_value = 4;
var startBtn = document.getElementById("marvel-start-button");
var startScreen = document.getElementById("start-screen");
var restartBtn = document.getElementById("marvel-restart-btn");
var cardimages = [
  "url(./images/blackwidow.jpg)",
  "url(./images/blackwidow.jpg)",
  "url(./images/captainamerica.jpg)",
  "url(./images/captainamerica.jpg)",
  "url(./images/drstrange.jpg)",
  "url(./images/drstrange.jpg)",
  "url(./images/entman.jpg)",
  "url(./images/entman.jpg)",
  "url(./images/fight.jpg)",
  "url(./images/fight.jpg)",
  "url(./images/groot.jpg)",
  "url(./images/groot.jpg)",
  "url(./images/hawkeye.jpg)",
  "url(./images/hawkeye.jpg)",
  "url(./images/hulk.jpg)",
  "url(./images/hulk.jpg)",
  "url(./images/ironman.jpg)",
  "url(./images/ironman.jpg)",
  "url(./images/spiderman.jpg)",
  "url(./images/spiderman.jpg)",
  "url(./images/thanos.jpg)",
  "url(./images/thanos.jpg)",
  "url(./images/thor.jpg)",
  "url(./images/thor.jpg)"
];

var realcards = [];
var clickcard = [];
var completecards = [];
var clickflag = true;
var candidatecards = cardimages.slice();

function initial() {
  document.querySelectorAll(".card").forEach(function(card, index) {
    setTimeout(function() {
      card.classList.add("flipped");
    }, 1000 + 100 * index);
  });
  document.querySelectorAll(".card").forEach(function(card, index) {
    setTimeout(function() {
      card.classList.remove("flipped");
      clickflag = true;
    }, 5000);
  });
}

function shuffle() {
  for (var i = 0; candidatecards.length > 0; i++) {
    realcards = realcards.concat(
      (checkcards = candidatecards.splice(
        Math.floor(Math.random() * candidatecards.length),
        1
      ))
    );
  }
}

function completeAndreStart() {
  document.querySelector("#main").innerHTML = "";
  candidatecards = cardimages.slice();
  clickflag = true;
  clickcard = [];
  realcards = [];
  completecards = [];
  shuffle(); // 카드 무작위로 섞기
  extendCard(); // 카드 생성 및 데이터 넣기
}

function extendCard() {
  clickflag = false;
  for (var i = 0; i < hor_value * ver_value; i++) {
    var card = document.createElement("div");
    card.className = "card";
    var cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    var cardfront = document.createElement("div");
    cardfront.className = "card-front";
    var cardback = document.createElement("div");
    cardback.className = "card-back";
    cardback.style.backgroundImage = realcards[i];
    cardInner.appendChild(cardfront);
    cardInner.appendChild(cardback);
    card.appendChild(cardInner);
    // 카드를 클릭하였을때의 이벤트
    document.querySelector("#main").appendChild(card);

    (function(c) {
      c.addEventListener("click", function() {
        if (
          clickflag &&
          !completecards.includes(c) &&
          !c.classList.contains("flipped")
        ) {
          c.classList.toggle("flipped");
          clickcard.push(c);
          if (clickcard.length === 2) {
            clickflag = false;
            // 클릭한 2가지 카드 비교
            if (
              clickcard[0].querySelector(".card-back").style.backgroundImage ===
              clickcard[1].querySelector(".card-back").style.backgroundImage
            ) {
              completecards.push(clickcard[0]);
              completecards.push(clickcard[1]);
              clickflag = true;
              clickcard = [];
              if (completecards.length === hor_value * ver_value) {
                alert("축하드립니다.");
                completeAndreStart();
              }
            } else {
              setTimeout(function() {
                clickcard[0].classList.remove("flipped");
                clickcard[1].classList.remove("flipped");
                clickcard = [];
                clickflag = true;
              }, 1000);
            }
          }
        }
      });
    })(card);
  }
  // 처음에 시작할때 카드 보여주기 위함.
  initial();
}

function gameStart() {
  setTimeout(function() {
    startScreen.style.display = "none";
  }, 500);
  shuffle(); // 카드 무작위로 섞기
  extendCard(); // 카드 생성 및 데이터 넣기
}

function gamereStart() {
  setTimeout(function() {
    completeAndreStart();
  }, 500);
}

startBtn.addEventListener("click", gameStart);
restartBtn.addEventListener("click", gamereStart);
