fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
        nextEl: '.s-button-next',
        prevEl: '.s-button-prev',
    },
    on: {
        init: function () {
            updateCounter(this);
        },
        slideChange: function () {
            updateCounter(this);
        }
    }
});

function updateCounter(swiper) {
    const current = document.querySelector('.current-slide');
    const total = document.querySelector('.total-slides');

    const formatNumber = (num) => (num < 10 ? '0' + num : num);

    current.textContent = formatNumber(swiper.realIndex + 1);
    total.textContent = formatNumber(swiper.slides.length - 1);
}





