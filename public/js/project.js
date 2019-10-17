$(document).ready(function () {
    $('.project-wrapper').removeClass('hide', 700);
})



$('.marvel-flip').magnificPopup({ //.container is div hypotetical class
    type: 'iframe',
    items: {
        src: "../../FlipCard/index.html"
    },
});
