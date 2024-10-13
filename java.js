const hamMenu = document.getElementById('hamMenu');
const offScreenMenu = document.getElementById('offScreenMenu');
const closeMenu = document.getElementById('closeMenu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('off-screen-menu-active');
});

closeMenu.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('off-screen-menu-active');
});
