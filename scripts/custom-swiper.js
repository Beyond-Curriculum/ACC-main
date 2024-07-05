// НЕ ЛЕЗЬ, УБЬЕТ

document.addEventListener('DOMContentLoaded', function () {
    // Константа в rem
    const remValue = 5.7;
    function remToPx(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    const remPx = remToPx(remValue);


    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        mousewheel: {
            invert: false,
        },
        touchEventsTarget: 'container',
        slidesPerView: 'auto',
        spaceBetween: 10,
    });

    swiper.on('autoplayStart', function () {
        console.log('autoplay started');
    });

    swiper.on('autoplayStop', function () {
        console.log('autoplay stopped');
    });

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
        const img = slide.querySelector('.partners__img');
        if (img) {
            img.addEventListener('load', function() {
                const contentWidth = img.scrollWidth;
                slide.style.width = `${contentWidth + remPx}px`;
                swiper.update();
            });
            if (img.complete) {
                const contentWidth = img.scrollWidth;
                slide.style.width = `${contentWidth + remPx}px`;
                swiper.update();
            }
        }
    });
});