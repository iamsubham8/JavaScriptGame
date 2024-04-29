score = 0;
cross = true;

audio = new Audio('Gmusic.mp3');
audiogo = new Audio('over.wav');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        boyrun = document.querySelector('.boyrun');
        boyrun.classList.add('animateBoyrun');
        setTimeout(() => {
            boyrun.classList.remove('animateBoyrun')
        }, 700);
    }
    if (e.keyCode == 32) {
        boyrun = document.querySelector('.boyrun');
        boyrun.classList.add('animateBoyrun');
        setTimeout(() => {
            boyrun.classList.remove('animateBoyrun')
        }, 700);
    }
    if (e.keyCode == 39) {
        boyrun = document.querySelector('.boyrun');
        boyrunX = parseInt(window.getComputedStyle(boyrun, null).getPropertyValue('left'));
        boyrun.style.left = boyrunX + 112 + "px";
    }
    if (e.keyCode == 37) {
        boyrun = document.querySelector('.boyrun');
        boyrunX = parseInt(window.getComputedStyle(boyrun, null).getPropertyValue('left'));
        boyrun.style.left = (boyrunX - 112) + "px";
    }
}

setInterval(() => {
    boyrun = document.querySelector('.boyrun');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(boyrun, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(boyrun, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 130 && offsetY < 96) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}