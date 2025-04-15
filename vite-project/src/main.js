/* import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */

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

  // swiper.realIndex — актуальный индекс (с 0), поэтому +1
  current.textContent = swiper.realIndex + 1;
  total.textContent = swiper.slides.length - 1;
}



