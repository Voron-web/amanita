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
    breakpoints: {
        950: {
            enabled: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.popular__btn-next',
                prevEl: '.popular__btn-prev'
            }

        }
    }
})


const mainMoveSliderPopular = new MoveSlider('.popular__slider')
mainMoveSliderPopular.init()