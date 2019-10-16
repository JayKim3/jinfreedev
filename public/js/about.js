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
    $('.about-Iam-bg').delay(1000).removeClass('hide', 1000);
    $('.Iam-names').delay(300).removeClass('hide', 1500);
    $('.about-navigation').delay(1500).removeClass('hide', 500);
});

// 스크롤시, 가운데 걸리는 아이템들 함수
var personal_explainTop = $('.about-personal-explain').offset().top;

var middleLock = function (item, itemTop, max) {

    var nowScroll = $(window).scrollTop();
    var halfOfScreen = $(window).height() / 2;
    var $item = $(item);
    var itemCenter = $item.height() / 2;

    var scrollCenter = nowScroll + halfOfScreen;
    var itemCenterLocation = itemTop + itemCenter;
    var nowScrollAfterCenterLock = itemCenterLocation - scrollCenter;

    // console.log(scrollCenter, itemCenterLocation);

    if (scrollCenter > itemCenterLocation) {
        $item.addClass('center-lock');
    }
    else {
        $item.removeClass('center-lock');
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
    middleLock('.about-personal-explain', personal_explainTop, 1700);
    // middleHighlight('.about-timeline-item');


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

                // 서브텍스트
                if (nowScroll > start + 500) {
                    $('.Iam-subtext').removeClass('hide');
                }
                else {
                    $('.Iam-subtext').addClass('hide');
                }
                // 서브텍스트 아래 문장
                if (nowScroll > start + 1300 && nowScroll <= start + 2200) {
                    $('.Iam-subtext-paragraph-1').removeClass('hide', 300);
                }
                else {
                    $('.Iam-subtext-paragraph-1').addClass('hide', 300);
                }
                if (nowScroll > start + 2200) {
                    $('.Iam-subtext-paragraph-2').removeClass('hide', 300);
                }
                else {
                    $('.Iam-subtext-paragraph-2').addClass('hide', 300);
                }
            }
            // PERSONAL 페이지 이벤트 ---------------------------------------------------------
            if (pageIndex == 1) {
                console.log("PageIndex:1");
                var $blabla = $('.about-personal-explain-blabla');
                $('.Iam-subtext').addClass('clear-display');

                if (nowScroll > start) {
                    $blabla.text('낙천적입니다');
                }
                if (nowScroll > start + 200) {
                    $blabla.text('외향적입니다');
                }
                if (nowScroll > start + 400) {
                    $blabla.text('비흡연자입니다');
                }
                if (nowScroll > start + 600) {
                    $blabla.text('술보단 커피입니다');
                }
                if (nowScroll > start + 800) {
                    $blabla.text('대식가입니다');
                }
                if (nowScroll > start + 1000) {
                    $blabla.text('사람을 좋아합니다');
                }
                if (nowScroll > start + 1200) {
                    $blabla.text('크리스천입니다');
                }
                if (nowScroll > start + 1400) {
                    $blabla.text('운동을 좋아합니다');
                }
            }

            // TIMELINE 페이지 이벤트 ---------------------------------------------------------
            if (pageIndex == 2) {
                if (nowScroll > start + 800) {
                    $('.about-timeline')
                        .removeClass('darkbg', 500)
                }
                else {
                    $('.about-timeline')
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
    var positionTop = $('.about-page').eq(index).position().top;

    $('.about-navigation-btn').removeClass('selected');
    $(this).addClass('selected');

    $('html').stop().animate({ scrollTop: positionTop }, 900, function () { canClick = true; });

});
