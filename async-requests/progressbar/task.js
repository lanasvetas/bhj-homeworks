let file = document.getElementById('file');
let progress = document.getElementById('progress');

const send = document.getElementById('send');
const form = document.getElementById('form');

form.addEventListener('submit', uploadFile);
function uploadFile(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open ('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.upload.addEventListener('progress', e => {
        const percent = e.lengthComputable ? (e.loaded / e.total) : 0;

        progress.value = percent;
    }) 

    xhr.setRequestHeader('Content-Type', 'students.netoservices.ru/nestjs-backend/upload');
    xhr.send(new FormData(form));
}





