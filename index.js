const body = document.querySelector('body');
const h1 = document.querySelector('h1');

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restart);

const sa = new Audio('./assets/sa.mp3');
const bop = new Audio('./assets/bop.mp3');
const saBopReverse = new Audio('./assets/sa-bop-reverse.mp3');

function start() {
    // play sah ana sah tee ree tee... tee ree tee... tee ree tee...
    sa.play();

    setTimeout(() => {
        body.classList.add('remove-bg');
        h1.classList.add('hide');
        startBtn.classList.add('hide');
    }, 500);
    
    // start animation
    setTimeout(() => {
        body.classList.remove('start-bg');
        body.classList.remove('animate-body-start');

        main();
    }, 5000);
}

function main() {
    // play the music
    const smallPics = document.querySelectorAll('.small');
    const largePic = document.querySelector('.large');

    smallPics.forEach((pic) => {
        pic.classList.add('fadeIn');
    })

    largePic.classList.add('fadeIn');

    // play the card animation
    setTimeout(() => {
        smallPics.forEach((pic) => {
            pic.classList.add('animate');
        })

        largePic.classList.add('animate');

        bop.play();
    }, 4000);

    // hide the cards
    setTimeout(() => {
        smallPics.forEach((pic) => {
            pic.classList.remove('fadeIn');
            pic.classList.remove('animate');
            pic.classList.add('hide');
        })

            largePic.classList.remove('fadeIn');
            largePic.classList.remove('animate');
            largePic.classList.add('hide');
    }, 20000);

    // show the restart button
    setTimeout(() => {
        body.classList.remove('remove-bg');
        body.classList.add('end-bg');
        body.classList.add('animate-body-end');

        h1.classList.remove('hide');
        h1.classList.add('fadeIn');
        
        restartBtn.style.display = 'flex';
        restart.classList.add('fadeIn');
    }, 21000);
}

function restart() {
    // play as ana as....
    saBopReverse.play();

    // refresh page
    setTimeout(() => {
        window.location.reload();
    }, 9000);
}
