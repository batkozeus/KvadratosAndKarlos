
var kvadratos = document.querySelector('#kvadratos');
var karlos = document.querySelector('#karlos');

kvadratos.onmousemove = vidvinut;
function vidvinut (event) {
	var x = event.offsetX;
	var y = event.offsetY;


	// if ((x >= 0) && (x <= 50)) {
	// 	karlos.style.display = 'block';
	// 	karlos.style.animation = 'karlosLeft 1s linear forwards';
	// 	kvadratos.onmousemove = null;
	// 	kvadratos.onmouseleave = function () {
	// 		karlos.style.animation = 'karlosLeftBack 1s linear forwards';
	// 		kvadratos.onmousemove = vidvinut;
	// 	}	
	// }

	// if ((x >= 451) && (x <= 500)) {
	// 	karlos.style.display = 'block';
	// 	karlos.style.animation = 'karlosRight 1s linear forwards';
	// 	kvadratos.onmousemove = null;
	// 	kvadratos.onmouseleave = function () {
	// 		karlos.style.animation = 'karlosRightBack 1s linear forwards';
	// 		kvadratos.onmousemove = vidvinut;
	// 	}	
	// }


	// if ((y >= 0) && (y <= 50)) {
	// 	karlos.style.display = 'block';
	// 	karlos.style.animation = 'karlosTop 1s linear forwards';
	// 	kvadratos.onmousemove = null;
	// 	kvadratos.onmouseleave = function () {
	// 		karlos.style.animation = 'karlosTopBack 1s linear forwards';
	// 		kvadratos.onmousemove = vidvinut;
	// 	}	
	// }

	// if ((y >= 451) && (y <= 500)) {
	// 	karlos.style.display = 'block';
	// 	karlos.style.animation = 'karlosBottom 1s linear forwards';
	// 	kvadratos.onmousemove = null;
	// 	kvadratos.onmouseleave = function () {
	// 		karlos.style.animation = 'karlosBottomBack 1s linear forwards';
	// 		kvadratos.onmousemove = vidvinut;
	// 	}	
	// }

	if ((x >= 0) && (x <= 10)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosLeft 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosLeftBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}

	if ((x >= 491) && (x <= 500)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosRight 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosRightBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}


	if ((y >= 0) && (y <= 10)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosTop 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosTopBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}

	if ((y >= 491) && (y <= 500)) {
		karlos.style.display = 'block';
		karlos.style.animation = 'karlosBottom 1s linear forwards';
		kvadratos.onmousemove = null;
		kvadratos.onmouseleave = function () {
			karlos.style.animation = 'karlosBottomBack 1s linear forwards';
			kvadratos.onmousemove = vidvinut;
		}	
	}


}

