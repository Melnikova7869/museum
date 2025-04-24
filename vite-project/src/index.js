// footer 

/* fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);


 */
// слайдер 

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Ждём 4 секунды перед началом исчезновения
      setTimeout(() => {
        preloader.style.opacity = '0';
        // Потом ждём ещё 0.5 секунды, чтобы завершить анимацию и скрыть элемент
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500); // время затухания
      }, 2000); // Задержка до начала исчезновения
    }
  });
  
  

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 3,
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




