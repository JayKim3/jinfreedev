$(document).ready(function () {
    $('.project-wrapper').removeClass('hide', 700);
})



$('.marvel-flip').magnificPopup({ //.container is div hypotetical class
    type: 'iframe',
    items: {
        src: "../../FlipCard/index.html"
    },
});

$('.escaperoom').magnificPopup({
    type: 'iframe',
    items: {
        src: '../../escaperoomtest/index.html'
    }
})

$('.TetrisGame').magnificPopup({
    type: 'iframe',
    items: {
        src: "../../SJ_Tetris/index.html"
    }
});

$('.reorder').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});
