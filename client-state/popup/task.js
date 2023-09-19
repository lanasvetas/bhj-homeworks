const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const subscribeModal = document.getElementById('subscribe-modal');


if (document.cookie.includes('hasEntered')) {
    subscribeModal.classList.remove('modal_active');
} else {
    subscribeModal.classList.add('modal_active');
    modalClose.addEventListener('click', () => {
    document.cookie = 'hasEntered=1';
    subscribeModal.classList.remove('modal_active');
})
}




