/* globals jQuery */

jQuery(function ($) {
    $(document.getElementById('site-title-fit-text')).fitText(0.55, {
        minFontSize: '100px'
    });

    $('.site-info.date').fitText(0.7, {
        minFontSize: '20px',
        maxFontSize: '50px'
    });

    $('.site-info.location').fitText(1.8, {minFontSize: '20px'});

    $('.big-title').fitText(0.7, {minFontSize: '20px', maxFontSize: '50px'});

    $(window).load(function () {
        $(document.body).css('opacity', 1);
    });

    const sideNavToggle = $(document.getElementById('side-nav-toggle')),
        sideNav = $(document.getElementById('side-nav'));

    sideNavToggle.on('click', function (event) {
        event.preventDefault();
        sideNavToggle.toggleClass('open');
        sideNav.toggleClass('open');
    });

    sideNav.on('click', function () {
        sideNavToggle.removeClass('open');
        sideNav.removeClass('open');
    });

    var sliderImages, sliderImageWidth;

    function rotateSlider() {
        sliderImages.stop().animate({
            'margin-left': '-' + sliderImageWidth + 'px'
        }, 50000, 'linear', function () {
            sliderImages.css({'margin-left': 0});
            rotateSlider();
        });
    }

    $('.slider .images img')
        .on('load', function () {
            sliderImages = $('.section-location .images');
            sliderImageWidth = $('img', sliderImages).width();
            rotateSlider();
        });

    $('img[data-original]').lazyload();

    $('a.talk-link').on('click', function (event) {

        event.preventDefault();

        $(this).closest('.event').find('.summary').toggle();

    });
});
