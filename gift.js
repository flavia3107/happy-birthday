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