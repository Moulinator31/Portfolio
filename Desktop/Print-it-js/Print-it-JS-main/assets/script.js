const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

];

const banner = document.getElementById('banner');
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');
const imageElement = document.getElementById('slide');
const nomElement = document.querySelector('#banner > p');
const bulletElement = document.querySelector('.dots');

const numberOfSlide = slides.length;

let number = 0;

for (let i = 0; i < slides.length; i++) {
	// var html = '<div class="dot"></div>';
	const dotSpan = document.createElement('span');
	
	if (i === 0) {
		html = '<span class="dot dot_selected"></span>';
	} else {
		html = '<span class="dot"></span>'
	}
	
	bulletElement.insertAdjacentHTML('beforeend', html);
}

function changeBulletSlide() {
	const bullets = bulletElement.querySelectorAll('.dot');

	for (let i = 0; i < bullets.length; i++) {
		let currentBullet = bullets[i];

		if (i === number) {
			currentBullet.classList.add('dot_selected');
		} else {
			currentBullet.classList.remove('dot_selected');
		}
	}

}

/**const changeBulletSlide = () => {
	var bullets = bulletElement.querySelectorAll('.dot');

	for (var i = 0; i < bullets.length; i++) {
		var currentBullet = bullets[i];
		if (i == number) {
			currentBullet.classList.add('dot_selected');
		}
		else {
			currentBullet.classList.remove('dot_selected');
		}
	}

}*/

function showSlide() {
    imageElement.src = `./assets/images/slideshow/${slides[number].image}`;
    nomElement.innerHTML = slides[number].tagLine;

    console.log(imageElement);
    console.log(nomElement);
}


arrowleft.addEventListener("click", function () {
    if (number == 0) {
        number = numberOfSlide - 1;
    } else {
        number--;
    }
        console.log(arrowleft);
		showSlide();
		changeBulletSlide();
});

arrowright.addEventListener("click", function () {
    if (number == numberOfSlide - 1) {
        number = 0;
    } else {
        number++;
    }
    console.log(arrowright);
	showSlide();
	changeBulletSlide();
});


	