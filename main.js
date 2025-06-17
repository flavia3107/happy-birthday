const confeti = document.getElementById('confetti');
const gift = document.getElementById('suprise-gift');
const cake = document.getElementById('bday-cake');
const candle = document.getElementById('candle');
const candle1 = document.getElementById('candle1');
const candle2 = document.getElementById('candle2');
const candle3 = document.getElementById('candle3');
const bdcake = document.getElementById('cake-container')
const container = document.getElementById('container');
const bdtext = document.querySelector('.happy-bday-text')


gift.addEventListener('click', openGift);

function openGift() {
	const audio = new Audio('happy-birthday.mp3');
	gift.style.display = 'none';
	confeti.style.display = 'block';
	cake.style.display = 'block';
	bdcake.style.display = 'block';
	candle.style.display = 'block';
	candle1.style.display = 'block';
	candle2.style.display = 'block';
	candle3.style.display = 'block';
	const layers = document.querySelectorAll('.layer');
	const creams = document.querySelectorAll('.cream');
	let delay = 0;
	for (let i = layers.length - 1; i >= 0; i--) {
		setTimeout(() => {
			layers[i].classList.add('visible');
		}, delay);
		delay += 500; // Delay for each subsequent layer

		setTimeout(() => {
			creams[i].classList.add('visible');
		}, delay);
		delay += 500; // Delay for each subsequent cream
	}

	setTimeout(() => {
		container.style.visibility = 'visible';
	}, 3500);

	// setTimeout(() => {
	// 	audio.play();
	// }, 4500);

	setTimeout(() => {
		candle.classList.add('animate-candle');
	}, 3000);

	setTimeout(() => {
		candle1.classList.add('animate-candle');
	}, 3500);

	setTimeout(() => {
		candle2.classList.add('animate-candle');
	}, 4000);

	setTimeout(() => {
		candle3.classList.add('animate-candle');
	}, 4500);

	setTimeout(() => {
		document.querySelectorAll('.fuego').forEach(el => {
			el.classList.add('animate-flame');
		});
		bdtext.style.display = 'inline-block';
	}, 5000);
}