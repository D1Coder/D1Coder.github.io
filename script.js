// menu dropdown

$('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(600);
}, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(700)
});

// button submit

$("#btnSubmit").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('btn btn-dark btn-lg btn btn-outline-dark btn-lg');
});