// 페이지를 불러왔을때, 새로고침
window.onpageshow = function(event) {
  if (event.persisted) {
    location.reload(true);
  }
};

// 포트폴리오 리스트 등장 함수 실행
$(document).ready(function() {
  portfolioAppear("project");
});

// 포트폴리오 아이템 리스트 (코딩)
var portfolioItemList_project = [
  {
    // *****************************************************************
    category: "JavaScript",
    type: "title"
  },
  {
    category: "JavaScript",
    type: "portfolio",
    name: "Marvel Flip Card",
    text: "JavaScript",
    subtext: "바닐라 자바스크립트를 이용한 미니게임",
    bg: "url(images/marvelbg.jpg)"
    // url: "portfolio-project/marvel/mariocart.html"
  }
];

// 포트폴리오 아이템 자동추가
$.each(portfolioItemList_project, function(index, value) {
  var text = value.text + " - " + value.name;

  if (value.type == "title") {
    $("<li>")
      .appendTo(".portfolio-coding")
      .append('<h2 class="portfolio-title">')
      .children(".portfolio-title")
      .text(value.category);
  }

  if (value.type == "portfolio") {
    $("<li>")
      .appendTo(".portfolio-project")
      .append('<a class="portfolio-project hide">')
      .children("a")
      .append('<div class="portfolio-project-title">')
      .append('<div class="portfolio-project-texts">')
      .children(".portfolio-project-title")
      .text(value.name)
      .siblings(".portfolio-project-texts")
      .append('<p class="portfolio-project-subtexts">')
      .append('<p class="portfolio-project-maintext">')
      .children(".portfolio-project-maintext")
      .text(text)
      .siblings(".portfolio-project-subtexts")
      .text(value.subtext)
      .parents(".portfolio-project")
      .append('<div class="portfolio-list-bg">')
      .append('<div class="portfolio-list-tab">')
      .children(".portfolio-list-bg")
      .css("background-image", value.bg)
      .siblings(".portfolio-list-tab")
      .text(value.text);
  }
});
