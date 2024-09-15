const titles = document.getElementsByClassName('person__title');
const titlesArray = Array.from(titles);
const modalWindow = document.querySelector('.describe');
const modalWindow2 = document.querySelector('.describe2');
console.log(titles);

titlesArray.forEach(element => {
    element.addEventListener('mouseover', openModal)
    element.addEventListener('mouseout', closeModal)
});

function openModal(){
    this.nextElementSibling.nextElementSibling.style.display="block";
    // modalWindow.style.display="block";
}

function closeModal(){
    this.nextElementSibling.nextElementSibling.style.display="none";
    // modalWindow.style.display="none";
}