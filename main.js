const confeti = document.querySelector('#confetti');
const gift = document.querySelector('#suprise-gift');
const cake = document.querySelector('#bday-cake');
const candle = document.querySelector('#candle');
const candle1 = document.querySelector('#candle1');
const candle2 = document.querySelector('#candle2');
const candle3 = document.querySelector('#candle3');
const bdcake = document.querySelector('#cake-container');
const container = document.querySelector('#container');
const bdtext = document.querySelector('.happy-bday-text');
const svhWrapper = document.querySelector('.svg-wrapper');
const bdayContent = document.querySelector('.bday-content');
const cakeTop = document.querySelector('.cake-top');
const musicButton = document.querySelector('#musicButton');
const musicIcon = document.querySelector('#music-icon');
const btnText = document.querySelector('#text');
const audio = new Audio('happy-birthday.mp3');

let isPlaying = false;

function openGift() {
	const layers = document.querySelectorAll('.layer');
	const creams = document.querySelectorAll('.cream');
	let delay = 0;

	svhWrapper.style.display = gift.style.display = 'none';
	bdayContent.style.display = bdcake.style.display = bdtext.style.display = cake.style.display = 'flex';
	confeti.style.display = candle.style.display = candle1.style.display = 'block';
	candle2.style.display = candle3.style.display = 'block';

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
		isPlaying = true;
		audio.play();
		musicButton.style.display = btnText.style.display = 'block';
		bdtext.style.visibility = 'visible';
		bdtext.classList.add('active');
	}, 5500);
}

function handleMusic() {
	if (isPlaying) {
		audio.pause();
		musicIcon.src = 'music.svg';
		btnText.textContent = 'On';
	} else {
		audio.play();
		musicIcon.src = 'music-off.svg';
		btnText.textContent = 'Off';
	}
	isPlaying = !isPlaying;
}

gift.addEventListener('click', openGift);
musicButton.addEventListener('click', handleMusic)