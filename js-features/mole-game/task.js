const hole = document.getElementsByClassName('hole');
let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');
for (let item of hole) {
	item.onclick = function() {
		if (item.className.includes('hole_has-mole')) {
			if (deadCounter.innerHTML === '10') {
				alert('Победа');
				deadCounter.innerHTML = '0';
				lostCounter.innerHTML = '0';
			} else {
				deadCounter.innerHTML++;
			}
		} else {
			if (lostCounter.innerHTML === '5') {
				deadCounter.innerHTML = '0';
				lostCounter.innerHTML = '0'
			} else {
			lostCounter.innerHTML++;
            }
		}
	}
}