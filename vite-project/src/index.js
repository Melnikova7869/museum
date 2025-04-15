fetch('header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

// Загрузка подвала...
fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);

/* 
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;
const slideWidth = 1221; // Ширина одного слайда (3 изображения)
const totalSlides = slides.length;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
} */

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
  
  
  
  