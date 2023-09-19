const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const login = form.login;
const password = form.password;
const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');


if (localStorage.getItem('id') !== null) {
	signin.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	id.textContent = localStorage.getItem('id');

} else {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (login.value && password.value) {
			let formData = new FormData(form);

			const xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
			xhr.responseType = 'json';
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.response.success) {
						localStorage.setItem('id', JSON.stringify(this.response.user_id));
						signin.classList.remove('signin_active');
						welcome.classList.add('welcome_active');
						id.textContent = localStorage.getItem('id');
					} else {
						signin.classList.add('signin_active');
						welcome.classList.remove('welcome_active');

						alert('Неверный логин/пароль');
					};
				};
			};
			xhr.send(formData);
		};
	});
}