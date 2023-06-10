const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
    },
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});