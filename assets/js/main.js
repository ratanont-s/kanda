$(function () {
    'use strict'
    
    $("#navbar").sticky({
        topSpacing: 0,
        zIndex: 1020
    });

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

    $("#bestSeller .product").slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
});