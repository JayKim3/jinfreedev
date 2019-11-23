var canClick = false;

// 페이지를 불러왔을때, 새로고침
window.onpageshow = function (event) {
    if (event.persisted) {
        location.reload(true);
    }
};

// HOME=ABOUT페이지 처음 접속 시 로딩 -> 애니메이션
$(document).ready(function () {
    canClick = true;

    // Loading...
    $('.abouts').removeClass('hide', 700);
    $('.about-page').delay(500).removeClass('black', 1000);
    $('.canvas-character ').removeClass('hide', 500);
    characterDraw();
    $('.Iam-names').delay(200).removeClass('hide', 1500);
    $('.about-navigation').delay(1800).removeClass('hide', 500);
});


// 캔버스로 오각형 그리기 함수
var characterDraw = function () {
    var ctx = document.querySelector('#character').getContext('2d');
    draw();

    function draw() {
        setTimeout(function () {
            ctx.beginPath();
            ctx.arc(200, 220, 25, 0, Math.PI, false);
            ctx.moveTo(185, 190);
            ctx.arc(180, 190, 6, 0, Math.PI * 2, true);
            ctx.moveTo(225, 190); // 좌표이동
            ctx.arc(220, 190, 6, 0, Math.PI * 2, true);
            ctx.moveTo(200, 10);
            ctx.lineTo(0, 170);
            ctx.lineTo(80, 400);
            ctx.lineTo(320, 400);
            ctx.lineTo(400, 170);
            ctx.lineTo(200, 10);
            // ctx.fillStyle = "skyblue";

            ctx.font = "20px malgun gothic";
            ctx.fillStyle = "red";
            ctx.fillText('강한 책임감', 150, 80);
            ctx.fillText('무한대 체력', 280, 180);
            ctx.fillText('코딩 열정', 240, 380);
            ctx.fillText('끊임없는 도전', 80, 380);
            ctx.fillText('긍정 에너지', 20, 180)
            // ctx.fill();
            ctx.strokeStyle = "white";
            ctx.stroke();
        }, 1000);
    }
};

// 스크롤시, 가운데 걸리는 아이템들 함수
var personal_explainTop = $('.personal-explain').offset().top;

var middlePosition = function (item, itemTop, max) {

    var nowScroll = $(window).scrollTop();
    var halfOfScreen = $(window).height() / 2;
    var $item = $(item);
    var itemCenter = $item.height() / 2;

    var scrollCenter = nowScroll + halfOfScreen;
    var itemCenterLocation = itemTop + itemCenter;
    var nowScrollAfterCenterLock = itemCenterLocation - scrollCenter;

    // console.log(scrollCenter, itemCenterLocation);

    if (scrollCenter > itemCenterLocation) {
        $item.addClass('subtext-center');
    }
    else {
        $item.removeClass('subtext-center');
    }

    if (max != 0) {
        if (scrollCenter > itemCenterLocation + max) {
            $item.css('margin-top', nowScrollAfterCenterLock + max);
        }
        if (scrollCenter < itemCenterLocation + max) {
            $item.css('margin-top', '0');
        }
    }
};

var middleHighlight = function (item) {
    var nowScroll = $(window).scrollTop();
    var halfOfScreen = $(window).height() / 2;

    var scrollCenter = nowScroll + halfOfScreen;

    $(item).each(function () {
        var $this = $(this);
        var itemTop = $this.offset().top;
        var itemHeight = $this.innerHeight();

        if (scrollCenter > itemTop && scrollCenter < itemTop + itemHeight) {
            $this.addClass('highlight');
        }
        else {
            $this.removeClass('highlight');
        }
    });

}

// 메인 스크롤 이벤트 ---------------------------------------------------------

$(window).scroll(function () {

    var nowScroll = $(this).scrollTop();
    middlePosition('.personal-explain', personal_explainTop, 1700);
    middleHighlight('.experience-item');


    $('.about-page').each(function (pageIndex) {

        var $this = $(this);
        var gap = $(window).height() / 3;
        var start = $this.position().top - gap;
        var end = start + $this.height();

        if (nowScroll > start && nowScroll < end) {
            if (canClick == true) {
                $('.about-navigation-btn')
                    .removeClass('selected')
                    .eq(pageIndex)
                    .addClass('selected')
            }

            // I AM 페이지 이벤트 ---------------------------------------------------------
            if (pageIndex == 0) {
                $('.Iam-subtext').removeClass('clear-display');
                var $gag = $('.Iam-subtext-first-gag');
                var $you = $('.Iam-subtext-first-you');
                $gag.animate({ "font-size": "4.4rem" }, 3000);
                $you.animate({ "font-size": "4.4rem" }, 3000);
                // 서브텍스트
                if (nowScroll > start + 500) {
                    $('.Iam-subtext').removeClass('hide');
                }
                else {
                    $('.Iam-subtext').addClass('hide');
                }
                // 서브텍스트 아래 문장
                if (nowScroll > start + 1200 && nowScroll <= start + 2100) {
                    $('.Iam-subtext-paragraph-1').removeClass('hide', 300);
                }
                else {
                    $('.Iam-subtext-paragraph-1').addClass('hide', 300);
                }
                if (nowScroll > start + 2100) {
                    $('.Iam-subtext-paragraph-2').removeClass('hide', 300);
                }
                else {
                    $('.Iam-subtext-paragraph-2').addClass('hide', 300);
                }
            }
            // PERSONAL 페이지 이벤트 ---------------------------------------------------------
            if (pageIndex == 1) {
                var $introduce = $('.personal-explain-introduce');
                var $Iam = $('.personal-explain-iam');
                $('.Iam-subtext').addClass('clear-display');
                if (nowScroll > start + 200) {
                    $introduce.text('긍정적입니다');
                }
                if (nowScroll > start + 400) {
                    $introduce.text('비흡연자입니다');
                }
                if (nowScroll > start + 600) {
                    $introduce.text('커피를 좋아합니다');
                }
                if (nowScroll > start + 800) {
                    $introduce.text('미식가입니다');
                }
                if (nowScroll > start + 1000) {
                    $introduce.text('사람을 좋아합니다');
                }
            }

            // Experiences 페이지 이벤트 ---------------------------------------------------------
            if (pageIndex == 2) {
                if (nowScroll > start + 600) {
                    $('.timeline')
                        .removeClass('darkbg', 500)
                }
                else {
                    $('.timeline')
                        .addClass('darkbg', 500)
                }
            }
        }
    })
});



// 왼쪽 네비게이션버튼 이벤트 ******************************************************
$('.about-navigation-btn').click(function () {
    canClick = false;

    var index = $(this).parent().index();
    var positionTop = $('.about-page').eq(index - 1).position().top;

    $('.about-navigation-btn').removeClass('selected');
    $(this).addClass('selected');

    $('html').stop().animate({ scrollTop: positionTop }, 900, function () { canClick = true; });

});
