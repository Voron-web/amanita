const mainCategorySlider = new Swiper('.category__slider', {
    enabled: false,
    breakpoints: {
        950: {
            enabled: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.category__btn-next',
                prevEl: '.category__btn-prev'
            }

        }
    }
})

const mainPopularSlider = new Swiper('.popular__slider', {
    enabled: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.popular__btn-next',
        prevEl: '.popular__btn-prev'
    },
    breakpoints: {
        950: {
            enabled: true,
            slidesPerView: 3,

        },
        1200: {
            enabled: true,
            slidesPerView: 4,
        }

    }
})

const mainPromoSlider = new Swiper('.promo__slider', {
    enabled: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.promo__btn-next',
        prevEl: '.promo__btn-prev'
    },
    breakpoints: {
        950: {
            enabled: true,
            slidesPerView: 3,

        },
        1200: {
            enabled: true,
            slidesPerView: 4,
        }

    }
})
const mainLicenseSlider = new Swiper('.license__slider', {
    slidesPerView: 2.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.license__btn-next',
        prevEl: '.license__btn-prev'
    },
    pagination: {
        el: ".license__pagination",
        type: "fraction",
        // type: "custom",
    },
    breakpoints: {
        950: {
            slidesPerView: 2,
        },
    }
})

const mainAboutSlider = new Swiper('.about__slider', {
    slidesPerView: 1.25,
    spaceBetween: 30,
    navigation: {
        nextEl: '.about__btn-next',
        prevEl: '.about__btn-prev'
    },
    pagination: {
        el: ".about__pagination",
        type: "fraction",
        // type: "custom",
    },
    breakpoints: {
        950: {
            slidesPerView: 4,
        },
        750: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        }
    }
})

const mainProcedureSlider = new Swiper('.procedure__slider', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.procedure__btn-next',
        prevEl: '.procedure__btn-prev'
    },
    pagination: {
        el: ".procedure__pagination",
        type: "fraction",
        // type: "custom",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
    }
})

const mainArticleSlider = new Swiper('.article__slider', {
    slidesPerView: 1.25,
    spaceBetween: 30,
    navigation: {
        nextEl: '.article__btn-next',
        prevEl: '.article__btn-prev'
    },
    pagination: {
        el: ".article__pagination",
        type: "fraction",
        // type: "custom",
    },
    breakpoints: {
        950: {
            slidesPerView: 4,
        },
        750: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        }
    }
})
if (document.querySelector('.popular__slider')) {
    const mainMoveSliderPopular = new MoveSlider('.popular__slider')
    mainMoveSliderPopular.init()
}
if (document.querySelector('.promo__slider')) {
    const mainMoveSliderPromo = new MoveSlider('.promo__slider')
    mainMoveSliderPromo.init()
}


const swiperProductNav = new Swiper('.product__slider_nav', {
    speed: 400,
    slidesPerView: 4.2,
    spaceBetween: 16,


    // navigation: {
    //     nextEl: '.about__btn-next',
    //     prevEl: '.about__btn-prev',
    // },

    // breakpoints: {
    //     1200: {
    //         slidesPerView: 4,
    //     },
    //     860: {
    //         slidesPerView: 3,
    //     },
    //     500: {
    //         slidesPerView: 2,
    //     },
    // }
});

const swiperProductMain = new Swiper('.product__slider_main', {
    speed: 400,
    slidesPerView: 1,

    thumbs: {
        swiper: swiperProductNav,
    },

    navigation: {
        nextEl: '.product__btn-next',
        prevEl: '.product__btn-prev',
    },

    pagination: {
        el: '.product__pagination',
        type: 'bullets',
        clickable: true,
    },
    // breakpoints: {
    //     1200: {
    //         slidesPerView: 4,
    //     },
    //     860: {
    //         slidesPerView: 3,
    //     },
    //     500: {
    //         slidesPerView: 2,
    //     },
    // }
});

const mainDocumentsSlider = new Swiper('.documents__slider', {
    slidesPerView: 1.25,
    spaceBetween: 30,
    navigation: {
        nextEl: '.documents__btn-next',
        prevEl: '.documents__btn-prev'
    },
    pagination: {
        el: ".documents__pagination",
        type: "fraction",
        // type: "custom",
    },
    breakpoints: {
        950: {
            slidesPerView: 4,
        },
        750: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        }
    }
})
