$(document).ready(function () {
    $('.sort .btn').click(function (e) { 
        e.preventDefault();
        $('.sort-menu').toggleClass('show');
    });

    $('.new-to-old').click(function (e) { 
        e.preventDefault();
        $('.sort-menu').toggleClass('show');
        $('.sort-btnText').text($('.new-to-old').text());
    });

    $('.old-to-new').click(function (e) { 
        e.preventDefault();
        $('.sort-menu').toggleClass('show');
        $('.sort-btnText').text($('.old-to-new').text());
    });

    $('.qa-list-item').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).find('.add-icon').toggleClass('d-none');
        $(this).find('.remove-icon').toggleClass('d-block');
        $(this).find('.content p').toggleClass('show');
      });

    $(".navbar-btn").click(function () {
        $(".hide").fadeToggle();
    });
});