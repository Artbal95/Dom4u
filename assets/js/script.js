$(document).ready(function () {

    /** Slide Owl-carousel Start*/

    (function owlCarousel() {

        $('.owl-carousel').owlCarousel({
            margin: 0,
            loop: true,
            center: true,
            nav: true,
            items: 1,
            dotClass: 'slide_dot',
            navContainerClass: 'slide_nav_container',
            navClass: ['slide_nav slide_prev', 'slide_nav slide_next'],
        });

        $('.slide_dot').each(function (index) {
            $(this).html(`<span class="slide_nav_index">${index + 1}</span>`);
        });
    })();

    /** Slide Owl-carousel End*/

    /** Complex Start*/

    if (window.matchMedia("(min-width: 768px)").matches) {
        (function complex() {
            const complex = {
                init() {
                    $('.complex_row').each(function () {
                        $(this).hover(
                            function () {
                                $(this).css({
                                    'background-color': '#304763',
                                    'border': '1px solid #EBEBEB',
                                    'box-sizing': 'border-box',
                                });
                                $(this).children().css({
                                    'color': 'white',
                                });
                            },
                            function () {
                                complex.removeClass('.complex_row');
                            });
                    })
                },
                removeClass(tr) {
                    $(tr).each(function () {
                        $(this).css({
                            'background-color': '',
                            'border': '',
                            'box-sizing': '',
                        });
                        $(this).children().css({
                            'color': '',
                        });
                    })
                }
            };
            complex.init();
        })();
    } else {
        (function complex() {
            const complex = {
                init() {
                    $('.complex_row').each(function () {
                        $(this).click(function () {

                            complex.removeClass('.complex_row');
                            $(this).css({
                                'background-color': '#304763',
                                'border': '1px solid #EBEBEB',
                                'box-sizing': 'border-box',
                            });
                            $(this).children().css({
                                'color': 'white',
                            });


                        })
                    })
                },
                removeClass(tr) {
                    $(tr).each(function () {
                        $(this).css({
                            'background-color': '',
                            'border': '',
                            'box-sizing': '',
                        });
                        $(this).children().css({
                            'color': '',
                        });
                    })
                }
            };
            complex.init();
        })();
    }

    /** Complex End*/

    /** Consult Start*/

    (function () {
        const consult = {
            init() {
                document.querySelectorAll('.consult_col').forEach(function (td) {
                    td.addEventListener('click', function () {
                        consult.removeStyle();
                        this.style.backgroundColor = 'white';
                        this.firstElementChild.style.fill = '#304763';
                        this.lastElementChild.style.color = '#304763';
                    })
                })
            },
            removeStyle() {
                document.querySelectorAll('.consult_col').forEach(function (td) {
                    td.style.backgroundColor = '#304763';
                    td.firstElementChild.style.fill = 'white';
                    td.lastElementChild.style.color = 'rgba(255, 255, 255, 0.75)';
                })
            }
        };
        consult.init()
    })();

    /** Consult End*/
})
;