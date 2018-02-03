window.addEventListener('load', function () {
	var carousels = document.querySelectorAll('.carousel');

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var figure = root.querySelector('figure'),
	    nav = root.querySelector('nav'),
	    images = figure.children,
	    n = images.length,
	    gap = root.dataset.gap || 0,
	    bfc = 'bfc' in root.dataset,
	    theta = 2 * Math.PI / n,
	    currImage = 0;

	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	// setupCarousel(n, 400);
	window.addEventListener('resize', function () {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var apothem = s / (2 * Math.tan(Math.PI / n));

		figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

		for (var i = 0; i < n; i++) {
			images[i].style.padding = gap + 'px';
		}for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
			images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
		}
		if (bfc) for (i = 0; i < n; i++) {
			images[i].style.backfaceVisibility = 'hidden';
		}rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);

		function onClick(e) {
			e.stopPropagation();

			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON') return;

			if (t.classList.contains('next')) {
				currImage++;
			} else if (t.classList.contains('pick')) {
				waitTime = 5000
				loops = 15
				subtraction = waitTime / loops
				for (var i = 0; i < loops; i++) {
					setTimeout(automatedRotation, waitTime);
					waitTime = waitTime - subtraction;
					// waitTime = waitTime / loops;
				}

				loops = 25
				for (var i = 0; i < loops; i++) {
					setTimeout(automatedRotation, waitTime);
					waitTime = waitTime + subtraction;
					// waitTime = waitTime * loops;
				}
			}
			else {
				currImage--;
			}

			rotateCarousel(currImage);
		}

		function automatedRotation() {
			rotateCarousel(currImage++)
		}
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
	}

	// document.automatedRotation = function () {
	// 	for (var i = 0; i < 5; i++) { setTimeout(rotateCarousel(currImage), 500); }
	// 	console.log('pw')
	// }
}
