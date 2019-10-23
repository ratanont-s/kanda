$(function () {
    $("#navbar").sticky({
        topSpacing: 0,
        zIndex: 1020
    });

    $("#bestSeller .product").slick({
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