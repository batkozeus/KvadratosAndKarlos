
var kvadratos = document.querySelector('#kvadratos');
var karlos = document.querySelector('#karlos');

kvadratos.onmousemove = vidvinut;
function vidvinut (event) {
	var x = event.offsetX;
	var y = event.offsetY;


	if ((x >= 0) && (x <= 250)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosLeft 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosLeftBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}

	if ((x >= 251) && (x <= 500)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosRight 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosRightBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}

}

