const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      document.getElementById('poll__title').innerHTML = xhr.response.data.title;
      
      const answers = document.getElementById('poll__answers');
     
      for (let response of xhr.response.data.answers.reverse()) {
        answers.insertAdjacentHTML('afterbegin', "<button class='poll__answer'></button>");
        document.querySelector('.poll__answer').innerHTML = response;
        let button = document.querySelector('.poll__answer');
        button.addEventListener('click', function () {
            alert('Спасибо, ваш голос засчитан!')
        }) 
        };
    }; 
};




 

