const toggleButton = document.getElementById('toggleButton');
const myDiv = document.getElementById('myDiv');
const tooltip = document.getElementById('tooltip');

toggleButton.addEventListener('click', () => {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block'; // Показать div
  } else {
    myDiv.style.display = 'none';  // Скрыть div
  }
});


function openMap() {
  window.open("https://yandex.ru/maps/-/CDxKzPLb", "_blank");
}

function openMap2() {
  window.open("https://yandex.ru/maps/-/CDxK7H5s", "_blank");
}

function openMap3() {
  window.open("https://yandex.ru/maps/-/CDxK7LnW", "_blank");
}

function openMap4() {
  window.open("https://yandex.ru/maps/-/CDxK7P2y", "_blank");
}

function openMap5() {
  window.open("https://yandex.ru/maps/-/CDxoIEz0", "_blank");
}


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-item");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector("#modal-img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Открытие модального окна с картинкой
  images.forEach((img, index) => {
      img.addEventListener("click", () => {
          modal.style.display = "flex";
          modalImg.src = img.src;
          currentIndex = index;
      });
  });

  // Закрытие модального окна
  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Переключение на предыдущую картинку
  prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
  });

  // Переключение на следующую картинку
  nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
  });

  // Закрытие модального окна при клике вне изображения
  modal.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });

  // Переключение клавишами (← →)
  document.addEventListener("keydown", (e) => {
      if (modal.style.display === "flex") {
          if (e.key === "ArrowLeft") {
              prevBtn.click();
          } else if (e.key === "ArrowRight") {
              nextBtn.click();
          } else if (e.key === "Escape") {
              modal.style.display = "none";
          }
      }
  });
});
