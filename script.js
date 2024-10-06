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

/* // Добавление события наведения мыши на кнопку
toggleButton.addEventListener('mouseover', () => {
    tooltip.style.display = 'block'; // Показать подсказку
});

// Добавление события когда мышь покидает кнопку
toggleButton.addEventListener('mouseout', () => {
    tooltip.style.display = 'none'; // Скрыть подсказку
}); */