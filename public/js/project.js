$(document).ready(function() {
  $(".project-wrapper").removeClass("hide", 700);
});

$(".project__portfolio-marvel").mouseenter(function() {
  $(".portfolio-list-title-marvel").text(
    "바닐라 자바스크립트로 100% 구현하였으며 간단한 HTML과 CSS로 디자인적인 부분도 입혀 자바스크립트와 친해지는 계기가 된 프로젝트"
  );
  $(".portfolio-list-bg-marvel").css("opacity", 0.7);
});

$(".project__portfolio-marvel").mouseleave(function() {
  $(".portfolio-list-title-marvel").text("Marvel Flip Card Start");
  $(".portfolio-list-bg-marvel").css("opacity", 1.0);
});

$(".project__portfolio-escaperoom").mouseenter(function() {
  $(".portfolio-list-title-escaperoom").text(
    "바닐라 자바스크립트 위주로 주로 이미지를 이용하여 이벤트 핸들러 함수와 콜백함수 내에 작성하여 간단한 애니메이션 효과를 넣어 만든 게임"
  );
  $(".portfolio-list-bg-escaperoom").css("opacity", 0.7);
});

$(".project__portfolio-escaperoom").mouseleave(function() {
  $(".portfolio-list-title-escaperoom").text("EscapeRoom Game");
  $(".portfolio-list-bg-escaperoom").css("opacity", 1.0);
});

$(".project__portfolio-tetris").mouseenter(function() {
  $(".portfolio-list-title-tetris").text(
    "자바스크립트 공부가 더 필요하다 생각하여 이번에는 es5문법을 사용하여 구현 / 최대한 혼자 테트리스 알고리즘을 생각하고 구현을 하려 시도 - 방향전환 부분에서 막혀 오픈소스들을 참고하여 코드를 참고하여 완성"
  );
  $(".portfolio-list-bg-tetris").css("opacity", 0.7);
});

$(".project__portfolio-tetris").mouseleave(function() {
  $(".portfolio-list-title-tetris").text("Tetris Game");
  $(".portfolio-list-bg-tetris").css("opacity", 1.0);
});

$(".project__portfolio-calendar").mouseenter(function() {
  $(".portfolio-list-title-calendar").text(
    "자바스크립트 ES6를 더 깊게 이해하기 위하여 혼자 힘으로 만들었으며 구조적인 부분과 중복된 부분을 합치면서 최대한 코드를 깔끔하게 작성하였다."
  );
  $(".portfolio-list-bg-calendar").css("opacity", 0.7);
});

$(".project__portfolio-calendar").mouseleave(function() {
  $(".portfolio-list-title-calendar").text("calendar Game");
  $(".portfolio-list-bg-calendar").css("opacity", 1.0);
});

$(".project__portfolio-minesweeper").mouseenter(function() {
  $(".portfolio-list-title-minesweeper").text(
    "구조적인 부분을 매우 신경쓰면서 만들었다. 랭킹을 보여주기 위해 게임 클리어시 이름과 시간을 파이어베이스 DB를 사용하였으며 배포 또한 파이어베이스로 간단하게 처리하였다."
  );
  $(".portfolio-list-bg-minesweeper").css("opacity", 0.7);
});

$(".project__portfolio-minesweeper").mouseleave(function() {
  $(".portfolio-list-title-minesweeper").text("Minesweeper Game");
  $(".portfolio-list-bg-minesweeper").css("opacity", 1.0);
});

$(".project__portfolio-reorder").mouseenter(function() {
  $(".portfolio-list-title-reorder").text(
    "비콘을 이용한 주문예약 시스템을 주제로 서버라는 개념을 처음 알게되어 전체적인 기획 과 Node 서버 구축(사용자와 웹쪽 REST API방식으로 데이터 처리)를 100% 맡았으며 리액트 라이브러리를 사용하여 관리자 웹을 구축 및 사용자의 안드로이드쪽은 다른 두 친구가 개발을 진행 "
  );
  $(".portfolio-list-bg-reorder").css("opacity", 0.7);
});

$(".project__portfolio-reorder").mouseleave(function() {
  $(".portfolio-list-title-reorder").text("Campus Project");
  $(".portfolio-list-bg-reorder").css("opacity", 1.0);
});

$(".project__portfolio-swot").mouseenter(function() {
  $(".portfolio-list-title-swot").text(
    "학교 강의실 예약과 동시에 스터디 모집을 연동을 주제로 총 4명에서 팀을 이루었으며 웹, 서버, 앱으로 개발하였으며 전체적인 기획과 웹 부분을 전담하여 담당하였습니다."
  );
  $(".portfolio-list-bg-swot").css("opacity", 0.7);
});

$(".project__portfolio-swot").mouseleave(function() {
  $(".portfolio-list-title-swot").text("Team Project");
  $(".portfolio-list-bg-swot").css("opacity", 1.0);
});

$(".project__portfolio-sjinmv").mouseenter(function() {
  $(".portfolio-list-title-sjinmv").text(
    "AWS EC2로 해당 애플리케이션을 배포하였으며 과금이될 경우를 대비하여 일정 기간에만 서버를 열어두고 있습니다^^.. "
  );
  $(".portfolio-list-bg-sjinmv").css("opacity", 0.7);
});

$(".project__portfolio-sjinmv").mouseleave(function() {
  $(".portfolio-list-title-sjinmv").text("Personal Project");
  $(".portfolio-list-bg-sjinmv").css("opacity", 1.0);
});

// $('.marvel-flip').magnificPopup({ //.container is div hypotetical class
//     type: 'iframe',
//     items: {
//         src: "../../FlipCard/index.html"
//     },
// });

// $('.escaperoom').magnificPopup({
//     type: 'iframe',
//     items: {
//         src: '../../escaperoom/index.html'
//     }
// })

// $('.TetrisGame').magnificPopup({
//     type: 'iframe',
//     items: {
//         src: "../../SJ_Tetris/index.html"
//     }
// });

// $('.Hollys').magnificPopup({
//     type: 'iframe',
//     items: {
//         src: "../../HollysCoffee/index.html"
//     }
// });

$(".reorder").magnificPopup({
  items: [
    {
      src: "../images/Reorder/ReOrder_1.png"
    },
    {
      src: "../images/Reorder/ReOrder_2.png"
    },
    {
      src: "../images/Reorder/ReOrder_3.png"
    },
    {
      src: "../images/Reorder/ReOrder_4.png"
    },
    {
      src: "../images/Reorder/ReOrder_5.png"
    },
    {
      src: "../images/Reorder/ReOrder_6.png"
    },
    {
      src: "../images/Reorder/ReOrder_7.png"
    },
    {
      src: "../images/Reorder/ReOrder_8.png"
    },
    {
      src: "../images/Reorder/ReOrder_9.png"
    },
    {
      src: "../images/Reorder/ReOrder_10.png"
    },
    {
      src: "../images/Reorder/ReOrder_11.png"
    },
    {
      src: "../images/Reorder/ReOrder_12.png"
    },
    {
      src: "../images/Reorder/ReOrder_13.png"
    },
    {
      src: "../images/Reorder/ReOrder_14.png"
    }
  ],
  gallery: {
    enabled: true
  },
  type: "image" // this is default type
});

// $('.Swot').magnificPopup({
//     type: 'iframe',
//     items: {
//         src: "http://13.124.57.55/"
//     }
// });
