let editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('editor', editor.value);
    
})

window.onload = function() {
  editor.value = localStorage.getItem('editor');  
}


