const menuLink = document.querySelectorAll('.menu__link');
const menuSub = document.querySelectorAll('.menu_sub');

for (let item of menuLink) {
    item.onclick = function() {
    if (menuSub) {
        item.parentElement.querySelector('.menu_sub').classList.toggle('menu_active'); 
        return false;
        };
    };
};
