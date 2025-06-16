const confeti = document.getElementById('confetti');
const gift = document.getElementById('suprise-gift');
const cake = document.getElementById('bday-cake');
const candle = document.getElementById('candle');
const candle1 = document.getElementById('candle1');
const candle2 = document.getElementById('candle2');
const candle3 = document.getElementById('candle3');
const bdcake = document.getElementById('cake')
const animation1 = document.getElementById('bizcocho_1');
const container = document.getElementById('container');
gift.addEventListener('click', openGift);


function openGift() {
	gift.style.display = 'none';
	confeti.style.display = 'block';
	cake.style.display = 'block';
	bdcake.style.display = 'block';
	candle.style.display = 'block';
	candle1.style.display = 'block';
	candle2.style.display = 'block';
	candle3.style.display = 'block';
	animation1.setAttribute('begin', '2s');
	var audio = new Audio('happy-birthday.mp3');

	setTimeout(() => {
		container.style.visibility = 'visible';
	}, 3500);

	setTimeout(() => {
		audio.play();
	}, 4500);

}