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