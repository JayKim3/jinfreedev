var clickflag = false;

// Home button
$(".header__home-btn")
  .hover(
    function() {
      $(".header__home-btn").addClass("hover");
    },
    function() {
      $(".header__home-btn").removeClass("hover");
    }
  )
  .click(function() {
    $("body").addClass("hide", 400);
    $(".section").addClass("hide", 400);
    setTimeout(function() {
      location.href = "index.html";
    }, 500);
  });

//

$(".portfolio-list")
  .hover(
    function() {
      if (clickflag == true) {
        $(this)
          .addClass("hover")
          .children("div")
          .addClass("hover");
      }
    },
    function() {
      $(this)
        .removeClass("hover")
        .children("div")
        .removeClass("hover");
    }
  )
  .click(function() {
    var $this = $(this);
    var index = $this.parent().index();
    var hasClass = $this.parents("ul").hasClass("portfolio-design");

    if (hasClass == true) {
      var gotoLocation = portfolioItemList_design[index].url;
    } else if (hasClass == false) {
      var gotoLocation = portfolioItemList_project[index].url;
    }

    console.log(gotoLocation);

    if (clickflag == true) {
      clickflag = false;
      $this
        .removeClass("hover")
        .addClass("clicked", 400)
        .children("div")
        .addClass("clicked", 500)
        .end()
        .children()
        .addClass("hide", 500)
        .end();
      $(".portfolio-title").addClass("hide", 500);
      $(".portfolio-list").addClass("hide", 500);
      setTimeout(function() {
        location.href = gotoLocation;
        clickflag = true;
      }, 700);
    }
  });

// 포트폴리오 등장 애니메이션
var portfolioAppear = function(whichPortfolio) {
  $(".contents").removeClass("hide", 800);

  var portfolio = ".portfolio-" + whichPortfolio;
  var $selectedPortfolio = $(portfolio);
  var $portfolio = $(".portfolio");

  setTimeout(function() {
    var howManyItems = $portfolio.find(".portfolio-list").eq();

    $portfolio.addClass("clear-display");

    $selectedPortfolio
      .removeClass("clear-display")
      .find(".portfolio-list")
      .delay(300)
      .each(function(index) {
        $(this)
          .delay(index * 100)
          .removeClass("hide", 800);
      });

    setTimeout(function() {
      $(".footer").removeClass("hide");
    }, 1000);

    setTimeout(function() {
      canClick = true;
    }, 500);
  }, 300);
};

// 주요 버튼 클릭시 반응 : BUTTON EFFECTS CONTROLS
$(".menu-btn").click(function() {
  if (clickflag == true) {
    clickflag = false;

    var $this = $(this);
    var $contents = $(".section__contents");
    var btnmyinfo = $this.hasClass("myinfo-btn");
    var btnDesign = $this.hasClass("design-btn");
    var btnproject = $this.hasClass("project-btn");
    var $headerTitle = $(".header-title");

    console.log(btnproject);

    if (btnmyinfo) {
      navigationButtonSelected("about");
      $headerTitle.text("about");
      $contents.addClass("hide", 400);
      setTimeout(function() {
        location.href = "myinfo.html";
      }, 500);
    }
    if (btnDesign) {
      navigationButtonSelected("design");
      $headerTitle.text("design");
      $contents.addClass("hide", 400);
      setTimeout(function() {
        location.href = "design.html";
      }, 500);
    }
    if (btnproject) {
      navigationButtonSelected("project-btn");
      $headerTitle.text("project");
      $contents.addClass("hide", 400);
      setTimeout(function() {
        location.href = "project.html";
      }, 500);
    }
  }
});

// 네비게이션 버튼 SELECTED 클래스 추가 (HOVER는 CSS로 컨트롤)
var navigationButtonSelected = function(btnType) {
  var btnClass = "." + btnType;
  $(".header__navi-btn").removeClass("selected");
  $(btnClass).addClass("selected");
};
