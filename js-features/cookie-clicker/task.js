const cookie = document.getElementById('cookie');
document.getElementById('cookie').onclick = function() {
    document.getElementById('clicker__counter').textContent++;
    cookie.width= 210;
    cookie.height = 140;
     setTimeout(() => {
        cookie.width=200;
        cookie.height = 128;
    }, 100);
}
