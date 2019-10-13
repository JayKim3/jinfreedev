$(document).ready(function () {
    console.log("test");
    $('.portfolio-list').magnificPopup({ //.container is div hypotetical class
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
    });
});