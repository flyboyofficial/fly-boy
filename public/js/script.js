
(function ($) {
    'use strict'


    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('.topNab').addClass('nabActive');
        } else {
            $('.topNab').removeClass('nabActive');
        };
    });

    if ($('.flyboy-collections').length) {
        var swiper = new Swiper(".flyboy-collections", {
            effect: "coverflow",
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            breakpoints: {
                640: {
                    coverflowEffect: {
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    },
                }
            },
        });
    }

    if ($('.roadmap-slid').length) {
        $('.roadmap-slid').slick({
            dots: false,
            infinite: true,
            speed: 300,
            prevArrow: '<button class="fa-solid fa-angle-right slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="fa-solid fa-angle-left slide-arrow next-arrow"></button>',
            autoplay: false,
            autoplaySpeed: 4000,
            centerMode: true,
            responsive: [{
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: true,
                }
            }
            ]

        });
    }

    $(document).ready(($) => {

        const maxBtn = document.getElementById('max-btn')
        maxBtn.addEventListener('click', () => {
            document.getElementById('amount').value = '5'
        })


        $('.quantity').on('click', '.plus', function (e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());

            if (val < 5) {
                $input.val(val + 1).change();
            }
        });

        $('.quantity').on('click', '.minus',
            function (e) {
                let $input = $(this).next('input.qty');
                var val = parseInt($input.val());
                if (val > 0) {
                    $input.val(val - 1).change();
                }
            });
    });





})(jQuery);