const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType ='json'
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        document.getElementById('loader').classList.remove('loader_active');
        let item;
         
        for (let [_, value] of Object.entries(xhr.response.response.Valute)) {
            item = document.querySelector('.item');
            item.insertAdjacentHTML('beforebegin', "<div class='item'></div>");
            item.insertAdjacentHTML('afterbegin', "<div class='item__currency'> </div>");
            item.insertAdjacentHTML('afterbegin', "<div class='item__value'> </div>");
            item.insertAdjacentHTML('afterbegin', "<div class='item__code'> </div>");
            
            document.querySelector('.item__currency').innerHTML = 'руб.';
            document.querySelector('.item__value').innerHTML = value.Value;
            document.querySelector('.item__code').innerHTML = value.CharCode;
        };
    };
};