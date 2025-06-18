const confeti = document.getElementById('confetti');
const gift = document.getElementById('suprise-gift');
const cake = document.getElementById('bday-cake');
const candle = document.getElementById('candle');
const candle1 = document.getElementById('candle1');
const candle2 = document.getElementById('candle2');
const candle3 = document.getElementById('candle3');
const bdcake = document.getElementById('cake-container');
const container = document.getElementById('container');
const bdtext = document.querySelector('.happy-bday-text');
const svhWrapper = document.querySelector('.svg-wrapper');
const bdayContent = document.querySelector('.bday-content');
const cakeTop = document.querySelector('.cake-top');

gift.addEventListener('click', openGift);

function openGift() {
	const audio = new Audio('happy-birthday.mp3');
	svhWrapper.style.display = gift.style.display = 'none';
	bdayContent.style.display = bdcake.style.display = bdtext.style.display = cake.style.display = 'flex';
	confeti.style.display = candle.style.display = candle1.style.display = 'block';
	candle2.style.display = candle3.style.display = 'block';
	const layers = document.querySelectorAll('.layer');
	const creams = document.querySelectorAll('.cream');
	let delay = 0;
	for (let i = layers.length - 1; i >= 0; i--) {
		setTimeout(() => {
			layers[i].classList.add('visible');
		}, delay);
		delay += 500;

		setTimeout(() => {
			creams[i].classList.add('visible');
		}, delay);
		delay += 500;
	}
	setTimeout(() => {
		cakeTop.classList.add('visible');
		cakeTop.style.visibility = 'visible';
	}, 3000);

	setTimeout(() => {
		candle.classList.add('animate-candle');
	}, 3500);

	setTimeout(() => {
		container.style.visibility = 'visible';
		candle1.classList.add('animate-candle');
	}, 4000);

	setTimeout(() => {
		candle2.classList.add('animate-candle');
	}, 4500);

	setTimeout(() => {
		candle3.classList.add('animate-candle');
	}, 5000);

	setTimeout(() => {
		document.querySelectorAll('.fuego').forEach(el => {
			el.classList.add('animate-flame');
		});
		audio.play();
		bdtext.style.visibility = 'visible';
		bdtext.classList.add('active');
	}, 5500);
}