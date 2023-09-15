const modal = document.querySelector('.modal');
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

for (let item of modalClose) {
    item.onclick = function() {
        item.closest('.modal').remove('modal_active');
    }
};

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

