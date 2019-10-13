$(document).ready(function () {
    //상대적인 좌표 값을 반환, .offset()가 반환 하는 객체는 left와 top 속성을 제공
    //top 속성을 이용해서 메뉴의 수직 위치를 구함
    var menu_offset = $('.header').offset();
    //스크롤 바를 스크롤할 때 매개변수로 전달된 함수를 실행시킴
    $('body').scroll(function () {

        //문서의 스크롤바 위치와 메뉴의 수직 위치를 비교해서 
        //문서의 스크롤바 위치가 메뉴의 수직 위치보다 크면(위치로 표현하면 아래)
        if ($(document).scrollTop() > menu_offset.top) {
            console.log("haha");
            //메뉴에 menu-fixed 클래스를 추가해서 메뉴를 고정시킴
            $('.header').addClass('menu-fixed');
        } else {
            //메뉴에서 menu-fized 클래스를 제거해서 메뉴를 수직으로 이동할 수 있도록 처리함
            $('.header').removeClass('menu-fixed');
        }
    });
});