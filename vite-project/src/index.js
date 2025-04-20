    // footer 

/* fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);


 */
    // слайдер 

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
  
    // swiper.realIndex — актуальный индекс (с 0), поэтому +1
    current.textContent = swiper.realIndex + 1;
    total.textContent = swiper.slides.length - 2;
  }
  
  
  
  