const card = document.querySelector('.card-page');
const menu = document.querySelector('.menu-page');
const buttonMenu = document.querySelector('.button-menu');
const buttonCard = document.querySelector('.button-card');
const closeMenu = document.querySelector('.close-menu');
const closeCard = document.querySelector('.close-card');
buttonCard.addEventListener('click', ()=>{
    if (card.classList.contains('activeTask')) card.classList.remove('activeTask');
    else card.classList.add('activeTask');
});
buttonMenu.addEventListener('click', ()=>{
    if (menu.classList.contains('activeTask')) menu.classList.remove('activeTask');
    else menu.classList.add('activeTask');
});
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('activeTask');
});
closeCard.addEventListener('click', ()=>{
    card.classList.remove('activeTask');
});

//# sourceMappingURL=task--menu-card.579125c3.js.map
