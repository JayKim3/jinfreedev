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
